import { IFlightService } from "../services/FlightsService";

class BrowseQuotes {

    constructor(private readonly flightService: IFlightService){
        this.execute = this.execute.bind(this);
    }

    async execute(params: any) {
        const quotes = await this.flightService.browseQuotes(params);
        await this.flightService.saveQuotes(quotes);
        return quotes;
    }
}

export default BrowseQuotes;