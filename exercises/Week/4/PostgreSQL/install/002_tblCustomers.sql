create table customers (
	  id              uuid primary key default gen_random_uuid()
	, firstName       varchar2(32)  not null
	, lastName        varchar2(32)  not null
	, billingAdress   varchar2(512) not null
	, billingZip      varchar2(32)  not null
	, billingCity     varchar2(256) not null
	, deliveryAddress varchar2(512) not null
	, deliveryZip     varchar2(32)  not null
	, deliveryCity    varchar2(256) not null
	, emailAddress    varchar2(MAX) not null
	, phoneNo         varchar2(32)  not null
);

alter table customers 
    add constraint fk_customers_ID_orders_customerID
		foreign key (id) 
		REFERENCES orders (customerID);

CREATE INDEX idx_customer_firstName ON customers (firstName);
CREATE INDEX idx_customer_lastName  ON customers (lastName);
CREATE INDEX idx_customer_fullName  ON customers (firstName, lastName);
CREATE INDEX idx_customer_phoneNo   ON customers (phoneNo);

