creaste table Orders (
	  id uuid primary key default gen_random_uuid()
	, orderDate timestamp default CURRENT_TIMESTAMP
	, customerID uuid not null
);

	