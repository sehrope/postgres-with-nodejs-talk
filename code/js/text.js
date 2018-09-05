const result = await client.query(
    `SELECT 'test' AS x`
);

// x === 'test'
// typeof(x) === 'string'
const x = result.rows[0].x;
