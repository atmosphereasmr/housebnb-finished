UPDATE properties
SET property_user = ${property_user}, property_name = ${property_name}, summary = ${summary}, image_med = ${image_med}, street = ${street}, city = ${city}, state = ${state}, country = ${country}, postal_code = ${postal_code}, latitude = ${latitude}, longitude = ${longitude}, property_type = ${property_type}, room_type = ${room_type}, price = ${price}
WHERE property_id = ${property_id}
