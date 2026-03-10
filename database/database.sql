CREATE TABLE admin(
    id INTEGER PRIMARY KEY,
    username TEXT,
    passoword TEXT
);


CREATE TABLE contacts(
    fullname TEXT PRIMARY KEY,
    email TEXT,
    message TEXT,
);



CREATE TABLE projects(
    id INTEGER PRIMARY KEY,
    title TEXT,
    description TEXT,
    views INTEGER DEFAULT 0
);

CREATE TABLE analytics(
    IP INTEGER PRIMARY KEY,
    visitors INTEGER,
    views INTEGER,
    total_views INTEGER DEFAULT 0
    dateVisite date
)
