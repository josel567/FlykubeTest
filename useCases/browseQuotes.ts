import { IFlightService } from "../services/FlightsService";

class BrowseQuotes {
    // Passing the service through the constructor facilitates decoupling and subsequent updates of the code.
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