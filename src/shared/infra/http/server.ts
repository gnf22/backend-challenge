import express from 'express';

import '@shared/infra/typeorm';

const app = express();

app.post('/', (request, response) => {
  return response.json({ message: 'Hello World!' });
});

app.listen(3333, () => console.log('Server started at port 3333'));
