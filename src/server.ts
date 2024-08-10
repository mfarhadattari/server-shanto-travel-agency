import { Server } from 'http';
import app from './app';
import config from './config';

let server: Server;

(async () => {
  server = app.listen(config.port, () => {
    console.log(`[SERVER]: ${config.app_name} is running...`);
  });
})().catch((err) => {
  console.error(err);
});
