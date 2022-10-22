DROP TABLE Report;

CREATE TABLE IF NOT EXISTS Report(
  id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
  latitude VARCHAR(20) NOT NULL,
  longitude VARCHAR(20) NOT NULL,
  time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  who VARCHAR(20),
  description TEXT,
  gender VARCHAR(10),
  name VARCHAR(30)
)


INSERT INTO Report (latitude,longitude,who,description,gender,name)
VALUES ("12.4","45.67","me","whaoejsbvbjvjksbv akbgjbaf","female","name1")

INSERT INTO Report (latitude,longitude,who,description,gender,name)
VALUES ("-1.3030868", "36.81425", "me","whaoejsbvbjvjksbv akbgjbaf","female","name1")