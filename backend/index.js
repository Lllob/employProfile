const express = require('express') 

const configuration = require('./configuration/configuration')
const routesConfig = require('./configuration/routs')
 

start()
async function start() {
    const app = express()
    
    await configuration(app)
    await routesConfig(app)

    app.listen(5000, () => console.log('Server running on port 5000.'));
}

