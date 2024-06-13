drop table if exists tblUserImg;
/*
  might be more info needed
  !! if we would do this for real today we would setup a CDN
  !! CDN = Content Driven Network
*/
create table tblUserImg (
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
alter table tblUserImg 
  add constraint PK_tblUserImg_fileID
  primary key (fileID);
 
-- add our foreign key to user table for userID
alter table tblUserImg
  add constraint FK_tblUserImg_userID_tblUsers_userID
        foreign key (userID)
          references tblUsers (userID)
          on delete cascade;
 
-- create index for user coloumn
create index idx_tblUserImg
  on tblUserImg (userID);