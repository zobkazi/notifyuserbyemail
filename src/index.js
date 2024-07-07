const app = require("./app")
const routes = require('./routes')

app.get('/', (req, res) => {
    res.send('Hello World!')
})

