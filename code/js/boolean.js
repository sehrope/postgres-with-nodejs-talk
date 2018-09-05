const result = await client.query(
    'SELECT true AS x'
);

// x === true
// typeof(x) === 'boolean'
const x = result.rows[0].x;
