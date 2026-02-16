February, 15, 2026.
# COLORS LAMP Application

## Description
COLORS is a web application built using the LAMP stack (Linux, Apache, MySQL, PHP) that allows users to log in and manage a personal collection of colors. After logging in, users can add new colors to the database and search existing colors by name.
The frontend is implemented with HTML, CSS, and JavaScript, providing a simple interface for interacting with the application. The backend consists of PHP API endpoints that handle color creation, and color searching, with all data stored in a MySQL database.
This project was developed as part of the COLORS Lab and demonstrates core web development concepts including client server communication, APIs, database integration using the LAMP stack.
This application was deployed on a DigitalOcean LAMP Droplet. Development and testing were performed directly on the server.

## Setup (DigitalOcean LAMP Droplet)
### 1. Create a LAMP Droplet
### 2. SSH into the server and locate the web root
## (Optional) Point a domain to the droplet
If you are using a domain name, point your domain’s A record to the droplet IP using your domain registrar’s DNS manager.

### 3. Database Setup (MySQL)
1. Connect to MySQL:
   - mysql -u root -p
2. Create the database and tables
   - create database
   - Create Users and Colors tables 
3. Create a MySQL user and give permissions
   
## 4. Backend (PHP API Endpoints)
1. The API endpoints live in the `LAMPAPI/` directory on the server (under `/var/www/html`).
2. Endpoints used by this app
   - `Login.php`
   - `AddColor.php`
   - `SearchColors.php`
3. Update the database connection in the PHP files to match your MySQL credentials:
   - `$conn = new mysqli("localhost", "<username>", "<password>", "<database>");

## 5. Frontend (HTML/CSS/JS)
Upload the frontend files/directories into `/var/www/html` (e.g., `css/`, `images/`, `js/`, plus `index.html` and `color.html`).

## 6. Testing / How to Access
- Open the app in a browser:
- http://YourDomainOrIP/index.html

## AI Usage
ChatGPT was used to assist with debugging, documentation, and understanding concepts as permitted by class policy
