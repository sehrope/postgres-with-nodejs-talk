const pg = require('pg');

// Standard URI format:
const client = new pg.Client(
    'postgresql://user:pass@db.example.com:5432/foobar?ssl=true'
);
