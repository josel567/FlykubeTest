
interface IFlightService {
  getPlaces(queryString: string): any;
  savePlaces(places: [any]): any;
}

export default IFlightService;