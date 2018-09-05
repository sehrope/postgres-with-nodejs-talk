=> SELECT COUNT(*)::int;
 count 
-------
     1
(1 row)

=> SELECT pg_typeof(COUNT(*)::int);
 pg_typeof 
-----------
 integer
(1 row)
