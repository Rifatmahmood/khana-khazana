import mongoose from 'mongoose';

const recipeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  activeTime: String,
  totalTime: String,
  thumbnail: String,
  image: String,
  category: {
    type: String,
    required: true
  },
  serves: Number,
  rating: {
    type: Number,
    min: 0,
    max: 5
  },
  steps: {
    type: [String],
    required: true
  }
});

const recipeModel = mongoose.models.recipes ?? mongoose.model('recipes', recipeSchema);

export { recipeModel };
