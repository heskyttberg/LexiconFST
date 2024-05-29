create table tbl_exercises (
	exerciseID uuid DEFAULT gen_random_uuid() PRIMARY KEY,
	eduID      uuid,
	devLang    uuid,
    name       VARCHAR(200),
    givenDate  DATE,
	dueDate    DATE,
    startDate  DATE,
    finishDate DATE,
    runLink    VARCHAR(1024),
	srcLink    VARCHAR(1024),
	gitLink    VARCHAR(1024)
)