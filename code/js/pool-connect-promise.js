const client = await pool.connect();
// We either have a client or it'll throw an exception for us
try {
    await doStuff(client);
    // Finally release the connection back to the pool
    await client.release();
} catch (err) {
    // If we encounter an error then instruct the pool
    // to discard this connection as it could be broken.
    await client.release(err);
    throw err;
}
