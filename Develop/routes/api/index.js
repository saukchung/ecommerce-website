const router = require('express').Router();
const { sequelize } = require('../../models/Product');
const categoryRoutes = require('./category-routes');
const productRoutes = require('./product-routes');
const tagRoutes = require('./tag-routes');

router.use('/categories', categoryRoutes);
router.use('/products', productRoutes);
router.use('/tags', tagRoutes);

const seedDatabase = async () => {
    await sequelize.sync({ force: true })
    

};

module.exports = router;
