CREATE TABLE avatar (
	id VARCHAR PRIMARY KEY,
	data VARCHAR, --in the legacy mongo database this is base64 encoded data
	mimetype VARCHAR
);

--in the legacy mongo database all TIMESTAMP's were DATETIME's
CREATE TABLE person (
	id VARCHAR PRIMARY KEY,
	avatar VARCHAR REFERENCES avatar (id),
	created_at TIMESTAMP NOT NULL,
	created_by VARCHAR NOT NULL,
	email_address VARCHAR,
	family_names VARCHAR NOT NULL,
	given_names VARCHAR NOT NULL,
	name_particle VARCHAR,
	name_suffix VARCHAR,
	updated_at TIMESTAMP NOT NULL,
	updated_by VARCHAR NOT NULL
);

