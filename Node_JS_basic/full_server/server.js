import express from 'express';
import router from './routes/index';

const app = express();
const port = 1245;

// Use the routes defined in full_server/routes/index.js
app.use('/', router);

if (require.main === module) {
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
  });
}

export default app;
