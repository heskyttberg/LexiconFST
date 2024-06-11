create table customers (
	  id              uuid primary key default gen_random_uuid()
	, firstName       varchar(32)  not null
	, lastName        varchar(32)  not null
	, billingAddress  varchar(512) not null
	, billingZip      varchar(32)  not null
	, billingCity     varchar(256) not null
	, deliveryAddress varchar(512) not null
	, deliveryZip     varchar(32)  not null
	, deliveryCity    varchar(256) not null
	, emailAddress    varchar(512) not null
	, phoneNo         varchar(32)  not null
);

CREATE INDEX idx_customer_firstName ON customers (firstName);
CREATE INDEX idx_customer_lastName  ON customers (lastName);
CREATE INDEX idx_customer_fullName  ON customers (firstName, lastName);
CREATE INDEX idx_customer_phoneNo   ON customers (phoneNo);

