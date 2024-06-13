drop table if exists tblUserPosts;

create table tblUserPosts (
    postID      uuid         default gen_random_uuid()
  , userID      uuid         not null
  , refID       uuid         default null
  , userPost    text         default null
  , userComment varchar(512) default null
  , postTime    timestamp    default (now() at time zone 'utc')
);

alter table tblUserPosts
  add constraint PK_tblUserPosts
    primary key (postID);
    
alter table tblUserPosts
  add constraint FK_tblUserPosts_userID_tblUsers_userID
    foreign key (userID) 
      references tblUsers(userID)
      on delete cascade;
      
alter table tblUserPosts
  add constraint FK_tblUserPosts_refID_tblUserPosts_userID
    foreign key (refID) 
      references tblUserPosts(postID)
      on delete cascade;
