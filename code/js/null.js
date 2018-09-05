const result = await client.query(
    'SELECT NULL AS x'
);

// x === null
const x = result.rows[0].x;
