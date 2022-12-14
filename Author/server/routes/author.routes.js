const AuthorController = require('../controllers/author.controller');
module.exports = function(app){
 
    app.post('/api/author', AuthorController.createAuthor);
    app.get('/api/authors', AuthorController.getAllAuthors);
    app.put('/api/author/:id', AuthorController.updateAuthor);
    app.get('/api/author/:id', AuthorController.getAuthor);
    app.delete('/api/author/:id', AuthorController.deleteAuthor);
}
