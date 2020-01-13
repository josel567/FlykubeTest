import mongoose from 'mongoose';
import { SkyScannerService } from '../services/FlightsService';
import GetPlaces from '../useCases/getPlaces';
import { PlaceModel } from '../models/place';
import { QuoteModel } from '../models/quote';

describe('Booking integration tests', () => {
  beforeAll(async () => {
    await mongoose.connect('mongodb://localhost:27017/flykubeTest', { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Mongoose conected to Flykube Test DB');
  });


  // Cleaning DB after each test to prevent DuplicateEntry error.
  afterEach(async () => {
    
  })

  afterAll(async () => {
    
  });

  it('Should return places based in QueryString "barajas" from SkyScanner API and save it to DB.', async () => {
    const skyScannerService = new SkyScannerService();
    const getPlaces = new GetPlaces(skyScannerService);

    const places: any = await getPlaces.execute("barajas");

    // Checking the place object properties
    const firstPlace = places[0];

    expect(firstPlace.PlaceId).toBe("MAD-sky");
    expect(firstPlace.PlaceName).toBe("Madrid-Barajas");
    expect(firstPlace.CountryId).toBe("ES-sky");
    expect(firstPlace.RegionId).toBe("");
    expect(firstPlace.CityId).toBe("MADR-sky");
    expect(firstPlace.CountryName).toBe("España");

    // Checking if places are saved in DB
    const placeFromDb: any = await PlaceModel.findOne({ placeId: "MAD-sky" });

    expect(placeFromDb.placeId).toBe("MAD-sky");
    expect(placeFromDb.placeName).toBe("Madrid-Barajas");
    expect(placeFromDb.countryId).toBe("ES-sky");
    expect(placeFromDb.regionId).toBe("");
    expect(placeFromDb.cityId).toBe("MADR-sky");
    expect(placeFromDb.countryName).toBe("España");

  });

});