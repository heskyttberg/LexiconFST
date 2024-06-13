create table orderRows (
	  id      uuid primary key default gen_random_uuid()
	, orderID uuid not null
	, movieID uuid not null
	, price   real not null
);

alter table orderRows
    add constraint fk_orderRow_orderID_orders_id
		foreign key (orderID) 
		REFERENCES orders (id);

alter table orderRows
    add constraint fk_orderRows_movieID_movies_id
		foreign key (movieID) 
		REFERENCES movies (id);

CREATE INDEX idx_orderRows_orderID ON orderRows (orderID) WITH (fillfactor = 70);
CREATE INDEX idx_orderRows_movieID ON orderRows (movieID);

