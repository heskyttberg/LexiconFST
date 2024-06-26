-- some session parameters 
SET client_min_messages TO WARNING;

drop table if exists tblUserPosts;

-- one table for all posts to save on space and avoiding additonal joins 
create table tblUserPosts (
    postID      uuid         default gen_random_uuid()
  , userID      uuid         not null
  , refID       uuid         default null
  , userPost    text         not null
  , userComment boolean      default false
  , postTime    timestamp    default (now() at time zone 'utc')
);

alter table tblUserPosts
  add constraint pk_tblUserPosts
    primary key (postID);
    
alter table tblUserPosts
  add constraint fk_tblUserPosts_userID_tblUsers_userID
    foreign key (userID) 
      references tblUsers(userID)
      on delete cascade;
      
-- circular references to make sure no orphan comments
alter table tblUserPosts
  add constraint fk_tblUserPosts_refID_tblUserPosts_userID
    foreign key (refID) 
      references tblUserPosts(postID)
      on delete cascade;

-- adding a check constraint to make sure that if comment is true there is reference to a post
alter table tblUserPosts
  add constraint CHK_tblUserPosts_refID_is_not_null_if_userComment_true
    check ( refID is not null and userComment );
    
-- adding some indexes
create index idx_tblUserPosts_userID
  on tblUserPosts (userID);
  
create index idx_tblUserPosts_refID
  on tblUserPosts (refID);
  
create index idx_tblUserPosts_postTime
  on tblUserPosts (postTime);
  




  