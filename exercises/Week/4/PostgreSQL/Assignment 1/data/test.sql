drop table Test
create table Test (
	myId int
	, myName varchar(100)
)

-- Works
insert into Test values (100, 'Hasse');
insert into test (myId) values (10);
insert into TeSt (myID) values (100);
insert into TeSt (myId) values (100);
insert into Test (myId) values (100);
