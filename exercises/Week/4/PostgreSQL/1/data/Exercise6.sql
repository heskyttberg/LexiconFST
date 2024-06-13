-- Add cellphone column to customers table
alter table customers add cellno varchar(25);
-- check we got new column
select phoneno, cellno from customers;

-- copy all phone numbers to cellphone column
update customers set cellno = phoneno;
-- check that phonnumbers are copied
select phoneno, cellno from customers;

-- empty phoneno column
update customers set phoneno = '';
-- check column is empty
select phoneno, cellno from customers;

