const DBMigrate = require('db-migrate');
const dbMigrate = DBMigrate.getInstance(true);
dbMigrate.silence(true);

dbMigrate.up().then(() => {
  dbMigrate.reset();
});
