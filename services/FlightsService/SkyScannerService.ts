import IFlightService from './IFlightService';
import axios from 'axios';
import { PlaceModel } from '../../models/place';

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

    public async savePlaces(places: any): Promise<void> {
        
        places.forEach(async (placeObject: any) => {
            try {
                let place = new PlaceModel({
                    placeId: placeObject.placeId,
                    placeName: placeObject.placeName,
                    countryId: placeObject.countryId,
                    regionId: placeObject.regionId,
                    cityId: placeObject.cityId,
                    countryName: placeObject.countryName
                });

                await place.save();
            } catch (error) {
                console.log(error);
            }

        });
        
    }

}

export default SkyScannerService;