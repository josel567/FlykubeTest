import IFlightService from './IFlightService';
import axios from 'axios';
import { PlaceModel } from '../../models/place';
import { QuoteModel } from '../../models/quote';

class SkyScannerService implements IFlightService {

    constructor() {

    }

    public async getPlaces(queryString: string): Promise<any> {
        const response = await axios({
            "method": "GET",
            "url": "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/ES/EUR/es-ES/",
            "headers": {
                "content-type": "application/octet-stream",
                "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
                "x-rapidapi-key": "1162d90d83mshe2d02e099ad691cp13874cjsndf9f62885655"
            }, "params": {
                "query": queryString
            }
        });

        return response.data.Places;
    };

    public async browseQuotes(params: any): Promise<any> {
        const response = await axios({
            "method": "GET",
            "url": `https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/ES/EUR/es-ES/${params.originplace}/${params.destinationplace}/${params.outboundpartialdate}`,
            "headers": {
                "content-type": "application/octet-stream",
                "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
                "x-rapidapi-key": "1162d90d83mshe2d02e099ad691cp13874cjsndf9f62885655"
            }, "params": {
                "inboundpartialdate": params.inboundpartialdate
            }
        })

        return(response.data);

    }

    public async savePlaces(places: [object]): Promise<void> {

        places.forEach(async (placeObject: any) => {
            let place = new PlaceModel({
                placeId: placeObject.PlaceId,
                placeName: placeObject.PlaceName,
                countryId: placeObject.CountryId,
                regionId: placeObject.RegionId,
                cityId: placeObject.CityId,
                countryName: placeObject.CountryName
            });

            await place.save();
        });

    }

    public async saveQuotes (quotesObject: any): Promise<void> {
        let quotes = quotesObject.Quotes;
        let places = quotesObject.Places;

        quotes.forEach(async (quoteObject: any) => {
            let quote = new QuoteModel({
                MinPrice: quoteObject.MinPrice,
                Places: places
            });

            await quote.save();
        });

    }

    public async retrievePlaces(): Promise<any> {
        const places = await PlaceModel.find();

        return places;
    }

}

export default SkyScannerService;
