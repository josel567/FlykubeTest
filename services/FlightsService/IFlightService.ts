
interface IFlightService {
  getPlaces(queryString: string): any;
  savePlaces(places: [any]): any;
  retrievePlaces(): Promise<any>;
  browseQuotes(params: any): Promise<any>;
  saveQuotes (quotesObject: any): Promise<void>;
}

export default IFlightService;