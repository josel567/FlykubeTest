import { IFlightService } from "../services/FlightsService";

class GetPlaces {

    constructor(private readonly flightService: IFlightService){
        this.execute = this.execute.bind(this);
    }

    async execute(queryString: string) {
        const places = await this.flightService.getPlaces(queryString);
        await this.flightService.savePlaces(places);
        console.log("save places done");

        return places;
    }
}

export default GetPlaces;