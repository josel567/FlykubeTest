import express from 'express';
import GetPlaces from '../useCases/getPlaces';
import { SkyScannerService } from '../services/FlightsService';
import RetrievePlaces from '../useCases/retrievePlaces';


class PlacesController {

   async getPlaces(req: express.Request, res: express.Response) {
        try {
            const skyScannerService = new SkyScannerService();
            const getPlaces = new GetPlaces(skyScannerService);
            const places = await getPlaces.execute(req.params.queryString);
            
            res.send(places);
        } catch (error) {
            console.log(error);
            
            const code = error.code || 400;
            
            res.status(code).json(error);
        }
    }

    async retrievePlaces(req: express.Request, res: express.Response) {
        try {
            const skyScannerService = new SkyScannerService();
            const retrievePlaces = new RetrievePlaces(skyScannerService);
            const places = await retrievePlaces.execute();
            
            res.send(places);
        } catch (error) {
            console.log(error);
            
            const code = error.code || 400;
            
            res.status(code).json(error);
        }
    }
}

export default PlacesController;