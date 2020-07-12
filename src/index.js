const App = require('./app.js')
require('./database')

async function startServer() {
    await App.listen(4000);
    console.log("Server running on port 4000");
}

startServer();