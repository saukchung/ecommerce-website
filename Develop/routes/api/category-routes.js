const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  const categoryData = await Category.findAll(); 
  // be sure to include its associated Products
  res.json(categoryData);
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  const categoryData =  await Category.findByPk(req.params.id);
  // be sure to include its associated Products
  res.json(categoryData);
});

router.post('/', async (req, res) => {
  // create a new category
  const categoryData =  await Category.create(req.body);
  res.send(`Added ${req.body.category_name}`)
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(
    {
      id: req.body.id,
      category_name: req.body.category_name
    },
    {
      where: {
        id: req.params.id
      },
    }
  )
  res.send(`Updated category: ${req.params.id}`)
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.delete({where: { id: req.params.id }})
});

module.exports = router;
