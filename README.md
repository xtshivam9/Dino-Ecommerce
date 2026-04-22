
# dj-eCommerce

This is a Django-based eCommerce project aimed at creating an online store. It provides features such as user authentication, product management, cart functionality, checkout, main page , single page , category ,cart, about , contact , 404 process.



## Authors

- [Your Name/Company](https://example.com)



## Badges

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)
[![AGPL License](https://img.shields.io/badge/license-AGPL-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)


## Documentation

[Documentation](https://www.djangoproject.com/)


## Features

- User authentication (registration, login, logout)
- Product management (CRUD operations)
- Shopping cart functionality
- Checkout process
- Responsive design


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`pip install virtualenv`

`virtualenv env`

`env/bin/activate`




## Installation/Prerequisites

- Python 3.x installed on your system
- pip package manager
- virtualenv (optional but recommended)

#### Setup Project
```bash
# Clone or download the project
cd Django-Ecommerce
```
#### Setup Virtual Environment (Optional but Recommended)
```bash
virtualenv env
source env/bin/activate  # for Linux/macOS
env\Scripts\activate  # for Windows
```
#### Install Dependencies
```bash
pip install -r requirements.txt
```
    
## Optimizations
#### Run Migrations
```bash
python manage.py makemigrations
python manage.py migrate
```
#### Create Superuser (Admin)
```bash
admin panel:
dino 
12345678 
OR
python manage.py createsuperuser #also you create own superuser
```

## Screenshots

![Home Page](screenshots/home.png)
![About Us](screenshots/aboutus.png)
![404](screenshots/404.png)
![Cart](screenshots/cart.png)
![Contact Us](screenshots/contact.png)
![Items](screenshots/items.png)


## Tech Stack

**Client:** React, Redux, TailwindCSS, Django

**Server:** AWS

