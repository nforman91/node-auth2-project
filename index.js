const server = require('./api/server.js');

const { PORT } = require('./api/secrets/index')

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
