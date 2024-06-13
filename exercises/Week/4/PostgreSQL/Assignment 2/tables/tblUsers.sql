drop table if exists tblUsers;
/* 
  name is to make it more generic for all DB if and when you might need to 
  start with cte's and dynamic executed SQL, updating triggers, events 
  for all tables
*/
create table tblUsers (
    userID         uuid default gen_random_uuid()
  , fName          varchar(256) not null
  , lName          varchar(256) not null
  , age            int
  , gender         int                       -- we use inte to accomodate all todays different gender identifications
  , aStreet        varchar(256)              -- Street address
  , aName          varchar(64)               -- Area in address
  , aCode          varchar(25)               -- Code for area
  , aCountry       varchar(32)               -- Country for surface mail address
  , addAddress1    varchar(64)               -- Might be needed in other countries, later use
  , addAddress2    varchar(64)               -- Might be needed in other countries, later use
  , otherAddresses boolean                  -- to easily check if user has other addresses or not
  , countryOrigin  varchar(64)
  , countryLiving  varchar(64)
  , bDay           date
  , civilStatus    int                       -- We use int to represent married, divorced, deceased and so on
  , partnerID      uuid
  , haveKids       boolean                   -- check if they have kids
  , title          int                       -- Honorifics, represented as an integer i.e. Dr, Mr, Miss ....
  , workTitle      varchar(32)
  , workCompany    varchar(32)
  , joinDate       timestamp default now()
 );
 -- we end there there is more things you could add
 
 alter table tblUsers 
   add constraint PK_tblUsers_userID
   primary key (userID);
 
-- WE only create the obvius index, needs more indexes here 
 create index idx_tblUsers_fName_lName
   on tblUsers (fName, lName);
 
 
  
