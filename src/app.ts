import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import httpStatus from 'http-status';
import config from './config';

const app: Application = express();

// middlewares
app.use(cors());

// parser
app.use(express.json());

app.use('/', (req: Request, res: Response) => {
  res.status(httpStatus.OK).json({
    success: true,
    message: 'Welcome to Shanto Travel Agency!',
    data: {
      name: config.app_name,
      port: config.port,
      environment: config.node_env,
    },
  });
});

export default app;
