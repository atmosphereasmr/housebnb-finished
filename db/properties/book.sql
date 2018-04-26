UPDATE properties
SET booked = NOT booked
WHERE property_id = ${propertyId};

SELECT * FROM properties
WHERE property_id = ${propertyId};
