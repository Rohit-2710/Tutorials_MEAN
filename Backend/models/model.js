const mongoose = require("mongoose");
const fileSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    description: { type: String, required: true },
    published: { type: Boolean, required: true },
  },
  { timestamp: true },
  {
    toJSON: {
      transform: (doc, ret) => {
        (ret.id = ret._id), delete ret._id, delete ret.__v;
      },
    },
  }
);

module.exports = mongoose.model("Tutorials", fileSchema);
