const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

const handleError = (res, statusCode = 500, message = 'An error occurred') => {
  res.status(statusCode).json({ message });
};

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const categories = await Category.findAll({
      include: [{
        model: Product,
      }],
    });
    res.status(200).json(categories);
  } catch (err) {
    handleError(res, 500, 'Failed to fetch categories');
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const category = await Category.findByPk(req.params.id, {
      include: [{
        model: Product,
      }],
    });
    if (!category) {
      return res.status(404).json({ message: 'Category with the specified ID not found' });
    }
    res.status(200).json(category);
  } catch (err) {
    handleError(res, 500, 'Failed to fetch the category');
  }
});

router.post('/', async (req, res) => {
  // create a new category
  if (!req.body.category_name) {
    handleError(res, 400, 'Category name is required');
    return;
  }
  try {
    const newCategory = await Category.create(req.body);
    res.status(201).json(newCategory); // Use 201 for resource creation
  } catch (err) {
    handleError(res, 400, 'Creation failed'); 
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  if (Object.keys(req.body).length === 0) {
    handleError(res, 400, 'Update data is required');
    return;
  }
  try {
    const [updateCount] = await Category.update(req.body, { where: { id: req.params.id } });

    if (updateCount === 0) {
      handleError(res, 404, 'Category with the specified ID not found');
      return;
    }
    const updatedCategory = await Category.findByPk(req.params.id);
    res.status(200).json(updatedCategory);
  } catch (err) {
    handleError(res, 500, 'Update failed');
  }
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    const deleted = await Category.destroy({ where: { id: req.params.id } });

    if (!deleted) {
      handleError(res, 404, 'Category with the specified ID not found');
      return;
    }
    res.status(200).json({ message: `Category with ID ${req.params.id} successfully deleted.` });
  } catch (err) {
    handleError(res, 500, 'Deletion failed');
  }
});

module.exports = router;
