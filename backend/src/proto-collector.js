import fs from 'fs';
import path from 'path';
import _ from 'lodash';
import protobuf from 'protobufjs';

import { promisify } from 'shared/src/helpers';
import settings from './settings';

async function recFindByExt(base, ext) {
  const files = await promisify(fs.readdir, base, { withFileTypes: true, encoding: 'utf8' });
  if (typeof files[0] === 'string') throw new Error('Outdated node.js version! Make sure to install node >= 10.10.x');
  const extraLookups = [];
  const results = [];
  _.each(files, (dirent) => {
    if (dirent.isDirectory()) {
      extraLookups.push(recFindByExt(path.join(base, dirent.name), ext));
    } else if (dirent.isFile()) {
      if (dirent.name.endsWith(ext)) results.push(path.join(base, dirent.name));
    }
  });
  results.push(..._.flatten(await Promise.all(extraLookups)));
  return results;
}

let messages = null;

async function updateMessageList() {
  const protoFiles = await recFindByExt(settings.protobuf.definitionsBase, '.proto');
  console.log('Found proto files:', protoFiles);
  return Promise.all(_.map(protoFiles, async (fileName) => {
    try {
      const protoDesc = await protobuf.load(fileName);
      console.log('Loaded', fileName, ':', protoDesc);
      const protoJSON = protoDesc.toJSON();
      return protoJSON;
    } catch (err) {
      console.error(err);
      return null;
    }
  }));
}


export async function getMessageList() {
  if (!messages) {
    messages = updateMessageList();
    // update every minute
    setTimeout(() => { messages = null; }, settings.protobuf.refreshTimeout);
  }
  return messages;
}
