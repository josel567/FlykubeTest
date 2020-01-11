import { IFlightService } from "../services/FlightsService";

class GetPlaces {
    // Passing the service through the constructor facilitates decoupling and subsequent updates of the code.
    constructor(private readonly flightService: IFlightService) {
        this.execute = this.execute.bind(this);
    }

    async execute(queryString: string) {
        const places = await this.flightService.getPlaces(queryString);
        await this.flightService.savePlaces(places);

        return places;
    }
}

export default GetPlaces;