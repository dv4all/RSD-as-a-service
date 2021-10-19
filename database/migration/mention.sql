CREATE TYPE mention_type as ENUM (
	'attachment',
	'blogPost',
	'book',
	'bookSection',
	'computerProgram',
	'conferencePaper',
	'document',
	'interview',
	'journalArticle',
	'magazineArticle',
	'manuscript',
	'newspaperArticle',
	'note',
	'presentation',
	'radioBroadcast',
	'report',
	'thesis',
	'videoRecording',
	'webpage'
);

--in the legacy mongo database all TIMESTAMP's were DATETIME's
CREATE TABLE mention (
	id VARCHAR PRIMARY KEY,
	author VARCHAR,
	created_at TIMESTAMP NOT NULL,
	created_by VARCHAR,
	date TIMESTAMP,
	image VARCHAR,
	is_corporate_blog BOOLEAN NOT NULL,
	title VARCHAR NOT NULL,
	type mention_type NOT NULL,
	updated_at TIMESTAMP NOT NULL,
	updated_by VARCHAR,
	url VARCHAR,
	version INTEGER,
	zotero_key VARCHAR
);

