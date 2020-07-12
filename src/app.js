const Express = require('express')
const App = Express();
const Cors = require('cors')

App.use(Cors());
App.use(Express.json());

App.use('/api/users', require('./routes/users'))

module.exports = App;