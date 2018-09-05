const result = await client.query(
    `SELECT pgcrypto.gen_random_uuid() AS x`
);

// x === 'be31e6f2-f82b-408a-bdb5-0602862c6e3c'
// typeof(x) === 'string'
const x = result.rows[0].x;
