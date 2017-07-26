# IMAPConnect

A simple full-stack application written in React on the front-end, and Ruby On Rails on the back-end. The application allows a user to visit the home page and enter their IMAP credentials (currently only supports Gmail); the app then uses the credentials to retrieve the email subjects of a particular email address via a search form.

## Requirements
* Ruby
* Ruby On Rails
* Foreman
* NPM
* Yarn

## Additional Technologies Include:
* ES6
* React Router
* React Loading
* Materialize
* Karma
* Mocha

## Build Steps

1. Clone Repo
2. Run: ```bundle && yarn```
3. Run Migrations: ```bin/rails db:migrate```
4. Start Server: ```foreman start -f Procfile.dev```
5. Visit: ```http://localhost:3000/#/```
6. Have Fun!!!


## Ideas for Future Versions:
* More Tests
* Add Security (e.g. encrypt/decrypt IMAP password)
* Add Better Front-End Validation
* Include Better Error Handling
* Make Back-End RESTful
* Redesign Backend (e.g. create more models/controllers and associations)
* Add a User model with authentication
* Make it compatible with other email servers (currently only supports Gmail)
