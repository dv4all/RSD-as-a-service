CREATE TABLE software (
	id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
	slug VARCHAR(100) UNIQUE NOT NULL,
	brand_name VARCHAR(100) NOT NULL,
	bullets VARCHAR(2000) NOT NULL,
	get_started_url VARCHAR NOT NULL,
	is_featured BOOLEAN DEFAULT FALSE NOT NULL,
	is_published  BOOLEAN DEFAULT FALSE NOT NULL,
	read_more VARCHAR,
	short_statement VARCHAR(300) NOT NULL,
	created_at TIMESTAMP NOT NULL,
	updated_at TIMESTAMP NOT NULL
);

CREATE FUNCTION sanitise_insert() RETURNS TRIGGER LANGUAGE plpgsql as
$$
BEGIN
	NEW.id = gen_random_uuid();
	NEW.created_at = LOCALTIMESTAMP;
	NEW.updated_at = NEW.created_at;
	return NEW;
END
$$;

CREATE TRIGGER sanitise_insert BEFORE INSERT ON software FOR EACH ROW EXECUTE PROCEDURE sanitise_insert();


CREATE FUNCTION sanitise_update() RETURNS TRIGGER LANGUAGE plpgsql as
$$
BEGIN
	NEW.id = OLD.id;
	NEW.created_at = OLD.created_at;
	NEW.updated_at = LOCALTIMESTAMP;
	return NEW;
END
$$;

CREATE TRIGGER sanitise_update BEFORE UPDATE ON software FOR EACH ROW EXECUTE PROCEDURE sanitise_update();
