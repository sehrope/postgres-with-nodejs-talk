// Some result with a foobar bigint field represented as text
const result = await client.query(
    'SELECT COUNT(*) AS foobar FROM some_table'
);
const row = result.rows[0];

// If we know it fits in a Number and is not NULL:
const value = +row.foobar;

// If we know it fits in a Number and *may* be NULL:
const value = !row.foobar ? null : +row.foobar;
