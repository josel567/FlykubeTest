
interface IFlightService {
  getPlaces(queryString: string): any;
  savePlaces(places: [any]): any;
  retrievePlaces(): Promise<any>;
}

export default IFlightService;