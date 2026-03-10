CREATE DATABASE portfolio_db;

USE portfolio_db;

CREATE TABLE projects (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    image_url VARCHAR(500),
    project_url VARCHAR(500),
    github_url VARCHAR(500),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE contacts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(150) NOT NULL,
    email VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE analytics (
    id INT AUTO_INCREMENT PRIMARY KEY,
    ip_address VARCHAR(100),
    user_agent TEXT,
    page_visited VARCHAR(255),
    visit_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE project_views (
    id INT AUTO_INCREMENT PRIMARY KEY,
    project_id INT,
    views INT DEFAULT 0,
    FOREIGN KEY (project_id) REFERENCES projects(id)
);

CREATE TABLE admins (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO admins (username, password)
VALUES ("", "");

INSERT INTO projects (title, description, project_url, github_url)
VALUES (
    "Portfolio Website",
    "My personal developer portfolio",
    "https://github.com/dieudonnelungu-cmd/portfolio-dieudonnelungu",
    "https://github.com/dieudonnelungu-cmd"
);
