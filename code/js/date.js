const result = await client.query(
    'SELECT now() AS x'
);

// (x instanceof Date) === true
const x = result.rows[0].x;
