import 'reflect-metadata';
import 'dotenv/config';
import cors from 'cors';

import express, { Request, Response, NextFunction } from 'express';

import swaggerUi from 'swagger-ui-express';

import AppError from '@shared/errors/AppError';
import * as swaggerDocument from '../../../swagger.json';

import 'express-async-errors';
import routes from './routes';

import '@shared/infra/typeorm';
import '@shared/container';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.use('/api', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  console.error(err);

  return response.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
});

app.listen(8080, () => console.log('Server started at port 8080'));
