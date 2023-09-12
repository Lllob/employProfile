// const homeController = require('../controllers/home.js') 
const catalogController = require('../controllers/catalog.js')
const createController = require('../controllers/create.js')
const detailsController = require('../controllers/details.js')
const editController = require('../controllers/edit.js')
const deleteController = require('../controllers/delete.js')
// const searchController = require('../controllers/search')


module.exports = async (app) => {
    // app.use(homeController) 
    app.use(catalogController)
    app.use(createController)
    app.use(detailsController)
    app.use(editController)
    app.use(deleteController)
    // app.use(searchController)
}