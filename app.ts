import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes';

const app: express.Application = express();

app.use(bodyParser.json());
app.use(routes);

app.listen(3000, () => {
    console.log(`Server listening at port localhost:3000}`);
});

export default app;