import mongoose from "mongoose";

let Schema = mongoose.Schema;

const QuoteSchema = new Schema({
    _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
    MinPrice: Number,
    Places: [Object],
});

let QuoteModel = mongoose.model('quote', QuoteSchema);

export { QuoteModel };