const { Schema } = requre('mongoose')

const CollectionSchema = new Schema(
  {
    collection_name: { type: String, requierd: true },
    collection_size: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = CollectionSchema
