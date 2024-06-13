drop table if exists tblUserTags;

create table tblUserTags (
    userID      uuid not null
  , userTagged uuid not null
  , fileID      uuid
  , postID      uuid
  , imgAreaData bytea
  , tagTime     timestamp    default (now() at time zone 'utc')
);

-- FK userID to users table
alter table tblUserTags
  add constraint FK_tblUserTags_userID_tblUsers_userID
        foreign key (userID)
        references tblUsers (userID)
        on delete cascade;
        
-- FK userTagged to users table
alter table tblUserTags
  add constraint FK_tblUserTags_userTagged_tblUsers_userID
        foreign key (userTagged)
        references tblUsers (userID)
        on delete cascade;

-- FK fileID to userFiles table        
alter table tblUserTags
  add constraint FK_tblUserTags_fileID_tblUserFiles_fileID
        foreign key (fileID)
        references tblUserFiles (fileID)
        on delete cascade;
        
-- FK postID to userPosts table
alter table tblUserTags
  add constraint FK_tblUserTags_postID_tblUserPosts_postID
        foreign key (postID)
        references tblUserPosts (postID)
        on delete cascade;
        
-- CHECK that either fileID or postID is not null
 alter table tblUserTags
   add constraint CHK_tblUserTags_fileID_or_postID_not_null
     check ( fileID is not null or
             postID is not null
            ); 
