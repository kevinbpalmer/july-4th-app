var db = require('./db')

var createTablesArray = [
  `CREATE TABLE payments (
    id int NOT NULL AUTO_INCREMENT,
    amount VARCHAR(10),
    created VARCHAR(40),
    transaction_id VARCHAR(100),
    name VARCHAR(60),
    PRIMARY KEY (id)
  );`,
  `CREATE TABLE rsvps (
    id int NOT NULL AUTO_INCREMENT,
    firstName VARCHAR(30),
    lastName VARCHAR(30),
    address VARCHAR(150),
    preferredComm VARCHAR(20),
    email VARCHAR(60),
    phone VARCHAR(60),
    attendingLunch BOOLEAN,
    lunchNumAdults VARCHAR(10),
    lunchNumKids VARCHAR(10),
    attendingPotluck BOOLEAN,
    potluckNumAdults VARCHAR(10),
    potluckNumKids VARCHAR(10),
    PRIMARY KEY (id)
  );`,
  `CREATE TABLE potluck_participants (
    id int NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    email VARCHAR(60),
    phone VARCHAR(60),
    PRIMARY KEY (id)
  );`,
  `CREATE TABLE potluck_dishes (
    id int NOT NULL AUTO_INCREMENT,
    potluck_user_id INT,
    category VARCHAR(40),
    type VARCHAR(40),
    other VARCHAR(256),
    PRIMARY KEY (id),
    FOREIGN KEY (potluck_user_id) REFERENCES potluck_participants(id)
  );`
]

for (var i = 0; i < createTablesArray.length; i++) {
  console.log(createTablesArray[i])
  db.query(createTablesArray[i], function (err, rows, fields) {
    if (err) {
      console.error(err)
    }
    else {
      console.log('New table created')
    }
  })
}