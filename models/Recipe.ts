import mongoose from 'mongoose';

const RecipeSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true
  },
  title: {
    type: String,
    required: [true, 'Please add a title'],
    trim: true
  },
  category: {
    type: String,
    required: [true, 'Please add a category'],
    enum: ['Masakan Utama', 'Masakan Berkuah', 'Sayuran', 'Kue dan Camilan']
  },
  difficulty: {
    type: String,
    required: [true, 'Please add difficulty level'],
    enum: ['Mudah', 'Sedang', 'Sulit']
  },
  time: {
    type: String,
    required: [true, 'Please add cooking time']
  },
  servings: {
    type: String,
    required: [true, 'Please add servings']
  },
  image: {
    type: String,
    required: [true, 'Please add an image URL']
  },
  description: {
    type: String,
    required: [true, 'Please add a description']
  },
  ingredients: [{
    type: String,
    required: true
  }],
  steps: [{
    type: String,
    required: true
  }],
  videoUrl: {
    type: String
  },
  tips: [{
    type: String
  }],
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model('Recipe', RecipeSchema);
