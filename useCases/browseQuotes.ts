import { IFlightService } from "../services/FlightsService";

class BrowseQuotes {

    constructor(private readonly flightService: IFlightService){
        this.execute = this.execute.bind(this);
    }

    async execute(params: any) {
        const places = await this.flightService.browseQuotes(params);

        return places;
    }
}

export default BrowseQuotes;