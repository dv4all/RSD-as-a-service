--in the legacy mongo database all TIMESTAMP's were DATETIME's
CREATE TABLE commit (
	id VARCHAR PRIMARY KEY,
	date TIMESTAMP NOT NULL,
	repository_url VARCHAR NOT NULL
);

