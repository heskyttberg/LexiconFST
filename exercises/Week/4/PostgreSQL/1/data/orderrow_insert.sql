insert into orderrows (orderid, movieid, price)
  values (
    (select id from orders 
      where customerid = (select id from customers where firstname = 'Jonas')
        and orderdate = DATE '2015-01-01')
   , (select id from movies where title = 'Interstellar')
   , (select price from movies where title = 'Interstellar'));

insert into orderrows (orderid, movieid, price)
  values (
    (select id from orders 
      where customerid = (select id from customers where firstname = 'Jonas')
        and orderdate = DATE '2015-01-01')
   , (select id from movies where title = 'Pulp Fiction')
   , (select price from movies where title = 'Pulp Fiction'));
    
insert into orderrows (orderid, movieid, price)
  values (
    (select id from orders 
      where customerid = (select id from customers where firstname = 'Jonas')
        and orderdate = DATE '2014-12-20')
   , (select id from movies where title = 'The Wolf of Wall Street')
   , (select price from movies where title = 'The Wolf of Wall Street'));
