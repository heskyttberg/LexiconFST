insert into orders (orderdate, customerid)
  values (DATE '2015-01-01', (select id from customers where firstname = 'Jonas'));
insert into orders (orderdate, customerid)
  values (DATE '2015-01-15', (select id from customers where firstname = 'Peter'));
insert into orders (orderdate, customerid)
  values (DATE '2014-12-20', (select id from customers where firstname = 'Jonas'));