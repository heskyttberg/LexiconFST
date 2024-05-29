create table tbl_education (
	eduID      uuid DEFAULT gen_random_uuid() PRIMARY KEY,
	educator   VARCHAR(200),
	education  VARCHAR(200),
	startDate  DATE,
	endDate    DATE
)