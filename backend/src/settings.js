import _ from 'lodash';

import defaultConfig from 'shared/src/config.default.json';
import basicConfig from '../../config.json';
import backendConfig from '../../config.backend.json';

const settings = _.merge({}, defaultConfig, basicConfig, backendConfig);
export default settings;
