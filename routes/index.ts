import { Router } from 'express';
import PlacesController from '../controllers/PlacesController';
import QuotesController from '../controllers/QuotesController';

const router: Router = Router();

// Controller's instantiation
const placesController = new PlacesController();
const quotesController = new QuotesController();

// Welcome endpoint for test purposes.
router.get('/', (request, response) => {
    response.send('Welcome to Flykube test');
});

// Endpoint to get places from SkyScanner API and save it to DB.
router.get('/places/:queryString', placesController.getPlaces);
// Endpoint to get places from DB.
router.get('/places', placesController.retrievePlaces);
// Endpoint to browse quotes from SkyScanner API and save it to DB.
router.post('/quotes', quotesController.browseQuotes);

export default router;