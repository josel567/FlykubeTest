import mongoose from "mongoose";
let Schema = mongoose.Schema;
 
const PlaceSchema = new Schema({
    _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
    placeId: { type: String, unique: true},
    placeName: String,
    countryId: String,
    regionId: String,
    cityId: String,
    countryName: String
});
 
let PlaceModel = mongoose.model('place', PlaceSchema);
 
export {PlaceModel};