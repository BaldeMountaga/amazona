const server = require('./server');
const config = require('./config');
const http = require('http');


const app = http.createServer(server);

const PORT = config.PORT;

app.listen(PORT, ()=> console.log(`Server started on PORT: ${PORT}`))