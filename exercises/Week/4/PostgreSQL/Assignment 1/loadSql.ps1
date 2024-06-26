# Connection variables so we may convert to a function later
$dbPass   = 'ronja'
$dbUser   = 'heskyttberg'
$dbserver = 'localhost'
$dbName   = 'MovieStore'

# Read in the SQL files we want to run aginsta the database
$sqlCmd =  Get-Content -Raw .\tables\tblOrders.sql
$sqlCmd += Get-Content -Raw .\tables\tblCustomers.sql
$sqlCmd += Get-Content -Raw .\tables\tblOrderRows.sql
$sqlCmd += Get-Content -Raw .\tables\tblMovies.sql

# Connect to the database
$conn = New-Object System.Data.Odbc.OdbcConnection
$conn.ConnectionString= "DSN=MovieStore"
# Prepare our command to run in DB
$cmd = new-object System.Data.Odbc.OdbcCommand($sqlCmd,$conn)
# Open DB connection
$conn.open()
# Execute our DB command
$cmd.ExecuteNonQuery()
# Close DB connection
$conn.close()
