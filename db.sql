CREATE TABLE IF NOT EXISTS Report(
  id INT AUTO_INCREMENT PRIMARY KEY,
  latitude VARCHAR(20) NOT NULL,
  longitude VARCHAR(20) NOT NULL,
  time DATE NOT NULL,
  who VARCHAR(20),
  description TEXT,
  gender VARCHAR(10),
  name VARCHAR(30)
)