create table movies (
	  id       uuid primary key default gen_random_uuid()
	, title    varchar(128) not null
	, director varchar(64)  not null
	, releaseYear date      not null
	, price       real      not null
);

		