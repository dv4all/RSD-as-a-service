--in the legacy mongo database all TIMESTAMP's were DATETIME's
CREATE TABLE project (
	id VARCHAR PRIMARY KEY,
	created_at TIMESTAMP NOT NULL,
	created_by VARCHAR,
	image VARCHAR NOT NULL, --uri
	principal_investigator_name VARCHAR NOT NULL, --maybe we have to make a table from these two properties
	principal_investigator_affiliation VARCHAR NOT NULL, 
	subtitle VARCHAR NOT NULL,
	title VARCHAR NOT NULL,
	updated_at TIMESTAMP NOT NULL,
	updated_by VARCHAR,
	url VARCHAR NOT NULL
);

