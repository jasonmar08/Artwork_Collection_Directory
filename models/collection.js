const { Schema } = require('mongoose')

const CollectionSchema = new Schema(
  {
    collection_name: { type: String, required: true },
    collection_image: { type: String, required: true },
    collection_size: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = CollectionSchema
