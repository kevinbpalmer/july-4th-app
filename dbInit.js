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
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    address VARCHAR(150),
    email VARCHAR(60),
    phone VARCHAR(20),
    attending_lunch BOOLEAN,
    num_lunch_adults VARCHAR(10),
    num_lunch_kids VARCHAR(10),
    attending_potluck BOOLEAN,
    num_potluck_adults VARCHAR(10),
    num_potluck_kids VARCHAR(10),
    PRIMARY KEY (id)
  );`,
  `CREATE TABLE potluck_participants (
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    email VARCHAR(60),
    phone VARCHAR(20),
    PRIMARY KEY (id)
  );`,
  `CREATE TABLE potluck_dishes (
    id INT NOT NULL AUTO_INCREMENT,
    potluck_user_id INT,
    category VARCHAR(40),
    type VARCHAR(40),
    other VARCHAR(256),
    PRIMARY KEY (id),
    FOREIGN KEY (potluck_user_id) REFERENCES potluck_participants(id)
  );`,
  `CREATE TABLE cornhole_players (
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    phone VARCHAR(20),
    team_name VARCHAR(128),
    have_partner BOOLEAN,
    partner_first_name VARCHAR(30),
    partner_last_name VARCHAR(30),
    num_boards INT,
    PRIMARY KEY (id)
  );`,
  `CREATE TABLE volunteers (
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    phone VARCHAR(20),
    volunteer_type VARCHAR(30),
    PRIMARY KEY (id)
  );`,
  `CREATE TABLE contact_messages (
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    phone VARCHAR(20),
    email VARCHAR(60),
    message VARCHAR(1500),
    PRIMARY KEY (id)
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

// SELECT * FROM `potluck_dishes` JOIN `potluck_participants` ON potluck_participants.id = potluck_dishes.potluck_user_id
