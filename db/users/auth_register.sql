INSERT INTO users
(username, password, first_name, last_name, bio)
VALUES(${username}, ${password}, ${first_name}, ${last_name}, ${bio});

SELECT user_id FROM users
WHERE username = ${username} AND
password = ${password};
