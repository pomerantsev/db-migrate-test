This repo's only intention is to demonstrate an issue in node-db-migrate: regardless of the `silence` call, all SQL is printed in the console.

Steps to reproduce:
* Clone the repo
* Run `npm install`
* Create a database called `db_migrate_test` in local postgres
* Run `node index`
* If two SQL comments are printed out, the issue persists
