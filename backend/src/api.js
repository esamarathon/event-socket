import express from 'express';
import cors from 'cors';

import settings from './settings';
import { getMessageList } from './schema-collector';

const app = express();

app.use(cors({ credentials: true, origin: true }));

app.get('/messagetypes', async (req, res) => {
  res.send(await getMessageList());
});

app.listen(settings.api.port, () => console.log(`Example app listening on port ${settings.api.port}!`));
