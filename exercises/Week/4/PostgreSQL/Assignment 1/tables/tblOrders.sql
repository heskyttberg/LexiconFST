create table orders (
	  id uuid primary key default gen_random_uuid()
	, orderDate timestamp default CURRENT_TIMESTAMP
	, customerID uuid not null
);

alter table orders
    add constraint fk_orders_id_customer_id
		foreign key (customerID) 
		REFERENCES customers (id);