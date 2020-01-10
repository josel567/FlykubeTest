
interface IFlightService {
  getPlaces(queryString: string): any;
  savePlaces(places: [any]): any;
  retrievePlaces(): Promise<any>;
  browseQuotes(params: any): Promise<any>;
}

export default IFlightService;