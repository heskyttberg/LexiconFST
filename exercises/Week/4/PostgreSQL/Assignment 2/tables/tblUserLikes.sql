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

-- FK userid to users table
alter table tblUserLikes
  add constraint FK_tblUserLikes_userID_tblUsers_userID
        foreign key (userID)
        references tblUsers (userID)
        on delete cascade;
        
-- FK fileID to user files table
alter table tblUserLikes
  add constraint FK_tblUserLikes_fileID_tblUserFiles_fileID
        foreign key (fileID)
        references tblUserFiles (fileID)
        on delete cascade;
        
-- FK postID to userPosts table
alter table tblUserLikes
  add constraint FK_tblUserLikes_postID_tblUserPosts_postID
        foreign key (postID)
        references tblUserPosts (postID)
        on delete cascade;