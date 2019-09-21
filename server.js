const app = require('./app');
const db = require('./db');

const port = process.env.PORT || 3000;

db.syncAndSeed()
.then(() => {
  app.listen(port, ()=> console.log(`listening on port ${port}`));
});
