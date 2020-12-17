import express from 'express';
import avatarsMiddleware from './index';

const port = process.env.PORT || 8080;
const app = express();

app.use('/', avatarsMiddleware);

app.listen(port, () => {
  console.log(`Started listening at http://localhost:${port}`);
});
