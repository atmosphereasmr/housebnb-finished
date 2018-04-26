(SELECT * FROM properties WHERE property_type = 'House' LIMIT 8)
UNION
(SELECT * FROM properties WHERE property_type = 'Condominium' LIMIT 8)
UNION
(SELECT * FROM properties WHERE property_type = 'Apartment' LIMIT 8)
ORDER BY property_type
