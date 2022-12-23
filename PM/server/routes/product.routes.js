const ProductController = require('../controllers/product.controller');
module.exports = function(app){
 
    app.post('/api/product', ProductController.createProduct);
    app.get('/api/products', ProductController.getAllProducts);
    app.put('/api/product/:id', ProductController.updateProduct);
    app.get('/api/product/:id', ProductController.getProduct);
    app.delete('/api/product/:id', ProductController.deleteProduct);
}
