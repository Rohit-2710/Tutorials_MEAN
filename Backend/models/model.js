const mongoose = require("mongoose");
const fileSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    description: { type: String, required: true },
    published: { type: Boolean, required: true },
  },
  { timestamp: true }
);
fileSchema.method("toJSON", () => {
  const { _id, __v, ...object } = this.toObject();
  object.id = _id;
  return object;
});
module.exports = mongoose.model("Tutorials", fileSchema);
