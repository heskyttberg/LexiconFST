drop table if exists tblUserRelations;
--
create table tblUserRelations (
    user1        uuid not null
  , user2        uuid not null
  , relation     int default 1  -- what is their relation, (friend, living togehter, married, child ... )
  , relationDate timestamp default (now() at time zone 'utc')
);

-- create our composite primary key with specific name
alter table tblUserRelations
  add constraint PK_tblUserRelations_user1_user2
        primary key (user1, user2);
  
-- add our foreign key to user table for user1
alter table tblUserRelations
  add constraint FK_tblUserRelations_user1_tblUsers_userID
        foreign key (user1)
          references tblUsers (userID)
          on delete cascade;

-- add our foreign key to user table for user2          
alter table tblUserRelations
  add constraint FK_tblUserRelations_user2_tblUsers_userID
        foreign key (user1)
          references tblUsers (userID)
          on delete cascade;
          

          
         