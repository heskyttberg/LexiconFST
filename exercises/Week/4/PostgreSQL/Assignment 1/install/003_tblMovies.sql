create table movies (
	  id       uuid primary key default gen_random_uuid()
	, title    varchar2(128) not null
	, director varchar2(64)  not null
	, releaseYear date       not null
	, price       real       not null
);

alter table movies
    add constraint fk_movies_ID_orderrows_movieID
		foreign key (id) 
		REFERENCES orderrows (movieID);
		