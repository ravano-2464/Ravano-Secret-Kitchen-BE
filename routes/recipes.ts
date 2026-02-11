import express from 'express';
const router = express.Router();
import {
  getRecipes,
  getRecipe,
  createRecipe,
  updateRecipe,
  deleteRecipe
} from '../controllers/recipeController.ts';
import { protect } from '../middleware/auth.ts';

router.route('/')
  .get(getRecipes)
  .post(protect, createRecipe);

router.route('/:id')
  .get(getRecipe)
  .put(protect, updateRecipe)
  .delete(protect, deleteRecipe);

export default router;
