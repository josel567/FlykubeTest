import { IFlightService } from "../services/FlightsService";

class RetrievePlaces {

    constructor(private readonly flightService: IFlightService){
        this.execute = this.execute.bind(this);
    }

    async execute() {
        const places = await this.flightService.retrievePlaces();

        return places;
    }
}

export default RetrievePlaces;