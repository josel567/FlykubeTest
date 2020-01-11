import { IFlightService } from "../services/FlightsService";

class RetrievePlaces {
    // Passing the service through the constructor facilitates decoupling and subsequent updates of the code.
    constructor(private readonly flightService: IFlightService) {
        this.execute = this.execute.bind(this);
    }

    async execute() {
        const places = await this.flightService.retrievePlaces();

        return places;
    }
}

export default RetrievePlaces;