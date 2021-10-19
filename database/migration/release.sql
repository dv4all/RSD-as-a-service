CREATE TABLE release (
	id VARCHAR PRIMARY KEY,
	concept_doi VARCHAR,
	created_by VARCHAR,
	is_citable BOOLEAN,
	latest_schema_dot_org VARCHAR
);

CREATE TYPE citability as ENUM (
	'doi-only',
	'full'
);

CREATE TABLE release_content ( --they are called releases in mongo, I thought this name was the best solution
	id VARCHAR PRIMARY KEY,
	release_id VARCHAR REFERENCES release (id),
	citability citability NOT NULL,
	date_published TIMESTAMP NOT NULL, --this didn't have a type in the mongodb schema
	doi VARCHAR NOT NULL, --this didn't have a type in the mongodb schema
	tag VARCHAR NOT NULL,
	url VARCHAR NOT NULL
);

CREATE TABLE file ( --in the mongodb schema a release_content must have at least one file
	id VARCHAR PRIMARY KEY,
	release_content_id VARCHAR REFERENCES release_content (id),
	bibtex VARCHAR NOT NULL,
	cff VARCHAR NOT NULL,
	codemeta VARCHAR,
	endnote VARCHAR NOT NULL,
	ris VARCHAR NOT NULL,
	schema_dot_org VARCHAR NOT NULL
);

