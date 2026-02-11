import Recipe from '../models/Recipe.ts';

export const getRecipes = async (req: any, res: any) => {
  try {
    const { category, search } = req.query;
    let query: any = {};

    if (category && category !== 'Semua') {
      query.category = category;
    }

    if (search) {
      query.$or = [
        { title: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } }
      ];
    }

    const recipes = await Recipe.find(query).sort({ createdAt: -1 });

    res.json({
      success: true,
      count: recipes.length,
      data: recipes
    });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const getRecipe = async (req: any, res: any) => {
  try {
    const recipe = await Recipe.findOne({ id: req.params.id });

    if (!recipe) {
      return res.status(404).json({ message: 'Recipe not found' });
    }

    res.json({
      success: true,
      data: recipe
    });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const createRecipe = async (req: any, res: any) => {
  try {
    req.body.createdBy = req.user.id;
    const recipe = await Recipe.create(req.body);

    res.status(201).json({
      success: true,
      data: recipe
    });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const updateRecipe = async (req: any, res: any) => {
  try {
    let recipe = await Recipe.findOne({ id: req.params.id });

    if (!recipe) {
      return res.status(404).json({ message: 'Recipe not found' });
    }

    recipe = await Recipe.findOneAndUpdate({ id: req.params.id }, req.body, {
      new: true,
      runValidators: true
    });

    res.json({
      success: true,
      data: recipe
    });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteRecipe = async (req: any, res: any) => {
  try {
    const recipe = await Recipe.findOne({ id: req.params.id });

    if (!recipe) {
      return res.status(404).json({ message: 'Recipe not found' });
    }

    await recipe.deleteOne();

    res.json({
      success: true,
      data: {}
    });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
