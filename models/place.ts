import mongoose from "mongoose";
 
const PlaceSchema = new mongoose.Schema({
    id: Number,
    placeId: String,
    placeName: String,
    countryId: String,
    regionId: String,
    cityId: String,
    countryName: String
});
 
const PlaceModel = mongoose.model('Place', PlaceSchema);
 
export default PlaceModel;