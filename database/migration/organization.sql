CREATE TABLE logo (
	id VARCHAR PRIMARY KEY,
	data VARCHAR, --in the legacy mongo database this is base64 encoded data
	mimetype VARCHAR
);

--in the legacy mongo database all TIMESTAMP's were DATETIME's
CREATE TABLE organization (
	id VARCHAR PRIMARY KEY,
	created_at TIMESTAMP NOT NULL,
	created_by VARCHAR,
	logo VARCHAR REFERENCES logo (id) NOT NULL,
	name VARCHAR NOT NULL,
	updated_at TIMESTAMP NOT NULL,
	updated_by VARCHAR,
	url VARCHAR NOT NULL
);

