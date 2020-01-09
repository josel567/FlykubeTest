import { Router } from 'express';
import PlacesController from './controllers/PlacesController';

const router: Router = Router();
const placesController = new PlacesController();

router.get('/', (request, response) => {
    response.send('Welcome to Flykube test');
});

router.get('/places/:queryString', placesController.getPlaces)

export default router;