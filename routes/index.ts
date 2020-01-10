import { Router } from 'express';
import PlacesController from '../controllers/PlacesController';
import QuotesController from '../controllers/QuotesController';

const router: Router = Router();

const placesController = new PlacesController();
const quotesController = new QuotesController();

router.get('/', (request, response) => {
    response.send('Welcome to Flykube test');
});

router.get('/places/:queryString', placesController.getPlaces);
router.get('/places', placesController.retrievePlaces);
router.post('/quotes', quotesController.browseQuotes);

export default router;