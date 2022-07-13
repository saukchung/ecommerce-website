ˇconst router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  const data = await Tag.findAll(); 
  // be sure to include its associated Product data
  res.json(data);
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  const data = await Tag.findByPk(req.params.id);
  // be sure to include its associated Product data
  res.json(data);
});

router.post('/', (req, res) => {
  // create a new tag
  const data =  await Tag.create(req.body);
  res.send(`Added ${req.body.category_name}`)
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update(
    {
     name: req.body.name
    },
    {
      where: {
        id: req.params.id
      },
    }
  )
  res.send(`Updated tag: ${req.params.id}`)
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag.delete({where: { id: req.params.id }})
});

module.exports = router;
