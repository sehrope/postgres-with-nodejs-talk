const pg = require('pg');

const client = new pg.Client({
    host: 'db.exampe.com',
    port: 5432,
    user: 'app',
    password: 't0ps3cret',
    database: 'test',
    ssl: true,
});
