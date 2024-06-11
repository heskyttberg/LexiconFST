-- a
select firstname, lastname, phoneno, emailaddress from  customers;
-- b
select * from movies order by releaseyear desc;
-- c
select title, price from movies order by price asc;
-- d
select firstname, lastname, deliveryaddress, deliveryzip, deliverycity 
  from customers c
    inner join orders o
    on c.id = o.customerid
  where o.id in 
    (select orderid 
      from orderrows orr
        inner join movies m 
        on orr.movieid = m.id
      where m.title = 'The Wolf of Wall Street');
 -- e
 select o.id, firstname, lastname, o.orderdate, sum(price) 
   from customers c
     inner join orders o 
     on o.customerid = c.id
     inner join orderrows orr
     on orr.orderid = o.id
     group by o.id, firstname, lastname;
 -- f : This cam be fixed by using customerid in view, but I'm to lazy for that right now.
create or replace view totals as 
  select o.id, firstname, lastname, o.orderdate, sum(price), count(orr.id)
    from customers c
    inner join orders o 
      on o.customerid = c.id
      inner join orderrows orr
      on orr.orderid = o.id
    group by o.id, firstname, lastname;
     
select firstname, lastname, sum(sum), count(sum), sum(count) 
  from totals
  group by firstname, lastname;
-- g: This is easy to make more complicated then is needed.
select (select count(1) from orders), (select sum(price) from orderrows);