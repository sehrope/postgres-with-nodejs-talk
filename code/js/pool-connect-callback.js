pool.connect(function(err, client, done) {
    if (err) { return next(err); }
    // Successfully retrieved a connection from pool
    doStuff(client, function (err) {
        if (err) {
            // We had an error somewhere so instruct the
            // pool to discard the connnection
            done(err);
            return next(err);
        }
        // Success so return the connection to the pool
        done();
        return next();
    });
});
