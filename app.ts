import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes';
import mongoose from 'mongoose';

const app: express.Application = express();

app.use(bodyParser.json());
app.use(routes);

app.listen(3000, () => {
    console.log(`Server listening at port localhost:3000`);
    mongoose.connect('mongodb://localhost:27017/flykube', { useNewUrlParser: true });
    mongoose.connection.once('open', () => {
        console.info('Connected to Mongo via Mongoose');
    });
    mongoose.connection.on('error', (err) => {
        console.error('Unable to connect to Mongo via Mongoose', err);
    });
});

export default app;