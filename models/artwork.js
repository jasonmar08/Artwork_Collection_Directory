const { Schema } = require('mongoose')

const ArtworkSchema = new Schema(
  {
    piece_name: { type: String, required: true },
    image: { type: String, required: true },
    artist_name: { type: String, required: true },
    price: { type: String, required: true },
    collection_name: { type: Schema.Types.ObjectId, ref: 'Collection' }
    // review: [
    //   {
    //     rating: { type: String, required: false },
    //     artID: { type: String, required: false }
    //   }
    // ]
  },
  { timestamps: true }
)

module.exports = ArtworkSchema
