drop table if exists tblUserFiles;
/*
  might be more info needed
  !! if we would do this for real today we would setup a CDN
  !! CDN = Content Driven Network
*/
create table tblUserFiles (
    fileID      uuid default gen_random_uuid()
  , userID      uuid
  , userFile    bytea
  , verticalS   int
  , horizontalS int
  , SizeMB      bigint
  , location    varchar(64)
  , shortDesc   varchar(512)
  , longDesc    text
 );

-- add primary key on image id
alter table tblUserFiles 
  add constraint PK_tblUserFiles_fileID
  primary key (fileID);
 
-- add our foreign key to user table for userID
alter table tblUserFiles
  add constraint FK_tblUserFiles_userID_tblUsers_userID
        foreign key (userID)
          references tblUsers (userID)
          on delete cascade;
 
-- create index for user coloumn
create index idx_tblUserFiles
  on tblUserFiles (userID);
 