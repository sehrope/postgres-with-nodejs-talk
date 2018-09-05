const pg = require('pg');

// Defaults to same environment vars as libpq
// i.e. PGHOST, PGPORT, PGUSER, ...
const client = new pg.Client();
