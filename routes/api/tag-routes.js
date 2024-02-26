const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

const handleError = (res, statusCode = 500, message = 'An error occurred') => {
  res.status(statusCode).json({ message });
};

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const tagData = await Tag.findAll({
      include: [{ model: Product }],
    });
    if (tagData.length === 0) {
      return res.status(404).json({ message: "No tags found" });
    }
    res.status(200).json(tagData);
  } catch (err) {
    handleError(res, 500, "Failed to fetch tags");
  }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const tagData = await Tag.findByPk(req.params.id, {
      include: [{ model: Product }],
    });
    if (!tagData) {
      handleError(res, 404, "No tag found with this id");
      return;
    }
    res.status(200).json(tagData);
  } catch (err) {
    console.error(err); 
    handleError(res, 500, "Failed to fetch the tag"); 
  }
});

router.post('/', async (req, res) => {
  // create a new tag
  if (!req.body.name) { 
    handleError(res, 400, "Tag name is required");
    return;
  }
  try {
    const tagData = await Tag.create(req.body);
    res.status(201).json(tagData); 
  } catch (err) {
    console.error(err); 
    handleError(res, 400, "Tag creation failed"); 
  }
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  if (Object.keys(req.body).length === 0) {
    handleError(res, 400, "Update data is required");
    return;
  }
  try {
    const [updateCount] = await Tag.update(req.body, { where: { id: req.params.id } });
    if (updateCount === 0) {
      handleError(res, 404, "No tag found with this id");
      return;
    }
    const updatedTag = await Tag.findByPk(req.params.id);
    res.status(200).json(updatedTag); 
  } catch (err) {
    handleError(res, 500, "Tag update failed"); 
  }
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  try {
    const deleted = await Tag.destroy({ where: { id: req.params.id } });
    if (!deleted) {
      handleError(res, 404, "No tag found with this id");
      return;
    }
    // Return a confirmation message instead of the deletion count
    res.status(200).json({ message: `Tag with ID ${req.params.id} successfully deleted.` });
  } catch (err) {
    handleError(res, 500, "Tag deletion failed"); 
  }
});

module.exports = router;
