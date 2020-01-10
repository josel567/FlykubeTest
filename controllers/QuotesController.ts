import express from 'express';
import { SkyScannerService } from '../services/FlightsService';
import BrowseQuotes from '../useCases/browseQuotes';


class QuotesController {

    async browseQuotes(req: express.Request, res: express.Response) {
        try {
            const skyScannerService = new SkyScannerService();
            const browseQuotes = new BrowseQuotes(skyScannerService);
            const quotes = await browseQuotes.execute(req.body);

            res.send(quotes);
        } catch (error) {
            console.log(error);
            const code = error.code || 400;

            res.status(code).json(error);
        }
    }

}

export default QuotesController;