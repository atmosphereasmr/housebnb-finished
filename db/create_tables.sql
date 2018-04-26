CREATE TABLE
IF NOT EXISTS users
(
	user_id SERIAL PRIMARY KEY,
	username VARCHAR
(200),
	first_name VARCHAR
(200),
	last_name VARCHAR
(200),
	bio VARCHAR
(3000)
)

CREATE TABLE
IF NOT EXISTS properties
(
	property_id SERIAL PRIMARY KEY,
	property_user INTEGER REFERENCES users
(user_id),
	bio VARCHAR
(5000),
	latitude FLOAT,
	longitude FLOAT,
	image1 VARCHAR
(2000),
	property_type VARCHAR
(200),
	address1 VARCHAR
(200),
	address2 VARCHAR
(200),
	city VARCHAR
(200),
	state VARCHAR
(2),
	province VARCHAR
(200),
	postal_code VARCHAR
(200),
	country VARCHAR
(200)
)

CREATE TABLE
IF NOT EXISTS bookings
(
	id SERIAL PRIMARY KEY,
	booking_user INTEGER REFERENCES users
(user_id),
	booking_property INTEGER REFERENCES properties
(property_id),
	start_date TIMESTAMP,
	end_date TIMESTAMP,
	price_per_night INTEGER
) 
