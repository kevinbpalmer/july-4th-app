createTablesArray = [
  'CREATE TABLE payments (
    id int NOT NULL AUTO_INCREMENT,
    amount VARCHAR(10),
    created VARCHAR(40),
    transaction_id VARCHAR(100),
    name VARCHAR(60),
    PRIMARY KEY (id)
  );',
  'CREATE TABLE rsvps (
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
  );'
]
