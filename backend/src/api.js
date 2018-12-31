import express from 'express';
import settings from './settings';
import { getMessageList } from './proto-collector';

const app = express();

app.get('/messagetypes', async (req, res) => {
  res.send(await getMessageList());
});

app.listen(settings.api.port, () => console.log(`Example app listening on port ${settings.api.port}!`));
