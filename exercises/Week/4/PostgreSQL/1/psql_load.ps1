write-host -foregroundcolor yellow 'Dropping EVERYTHING!'
psql -f tables\clearTables.sql
$fileOrder = @('Customers'
             , 'Movies'
             , 'Orders'
             , 'OrderRows' 
             )

foreach($file in $fileOrder) {
  $msg = 'Creating ' + $file + ' table!'
  write-host -foregroundcolor yellow $msg
  $fn = 'tables\tbl' + $file + '.sql'
  psql -d MovieStore -f $fn
}