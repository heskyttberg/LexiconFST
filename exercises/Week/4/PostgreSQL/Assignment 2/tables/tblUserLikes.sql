-- some session parameters 
SET client_min_messages TO WARNING;

drop table if exists tblUserLikes;
/*
  now since we have posts and comments and all files in same tables
  it is very easy to like posts, comments and all kindof files not just images 
*/
create table tblUserLikes (
    userID uuid
  , fileID uuid
  , postID uuid
  , tagTime     timestamp    default (now() at time zone 'utc')
);

-- fk userid to users table
alter table tblUserLikes
  add constraint fk_tblUserLikes_userID_tblUsers_userID
        foreign key (userID)
        references tblUsers (userID)
        on delete cascade;
        
-- fk fileID to user files table
alter table tblUserLikes
  add constraint fk_tblUserLikes_fileID_tblUserFiles_fileID
        foreign key (fileID)
        references tblUserFiles (fileID)
        on delete cascade;
        
-- fk postID to userPosts table
alter table tblUserLikes
  add constraint fk_tblUserLikes_postID_tblUserPosts_postID
        foreign key (postID)
        references tblUserPosts (postID)
        on delete cascade;

-- add some obvious indexes
create index idx_tblUserLikes_userID
  on tblUserLikes (userID);

create index idx_tblUserLikes_fileID
  on tblUserLikes (fileID);

create index idx_tblUserLikes_postID
  on tblUserLikes (postID);

create index idx_tblUserLikes_userID_tagTime
  on tblUserLikes (userID, tagTime);

create index idx_tblUserLikes_postID_tagTime
  on tblUserLikes (postID, tagTime);

/*
create index idx_tblUserLikes_
  on tblUserLikes ();
*/