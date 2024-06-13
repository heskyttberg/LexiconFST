update movies 
  set price = 169
  where date_part('year', releaseyear) = date_part('year', DATE '2014-01-01');
