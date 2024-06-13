-- some session parameters 
SET client_min_messages TO WARNING;

-- dropping all tables in correct order
drop table if exists tblUserLikes;
drop table if exists tblUserTags;
drop table if exists tblUserPosts;
drop table if exists tblUserFiles;
drop table if exists tblUserRelations;
drop table if exists tblUsers;
