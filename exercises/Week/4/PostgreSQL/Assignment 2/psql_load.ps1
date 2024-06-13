write-host -foregroundcolor yellow 'Dropping EVERYTHING!'
psql -f tables\clearTables.sql
$fileOrder = @('Users'
             , 'UserRelations'
             , 'UserFiles'
             , 'UserPosts'
             , 'UserTags'
             , 'UserLikes'
             )
             
write-host -foregroundcolor red 'Dropping all tables'
psql -d socialPlattform -f tables\dropAll.sql -q

foreach($file in $fileOrder) {
  $msg = 'Creating ' + $file + ' table!'
  write-host -foregroundcolor yellow $msg
  $fn = 'tables\tbl' + $file + '.sql'
  psql -d socialPlattform -f $fn -q
}     