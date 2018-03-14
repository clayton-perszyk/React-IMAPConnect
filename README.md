# IMAPConnect

A full-stack application written in React and Ruby On Rails, IMAPConnect allows users to connect to their email accounts via their IMAP credentials (currently only supports Gmail), and search for emails from their contacts.

![iimapgif](https://user-images.githubusercontent.com/7948430/28897304-eb1e615e-7794-11e7-8c41-282380a68452.gif)

## Requirements:
* Ruby
* Ruby On Rails
* Foreman
* NPM
* Yarn

## Build Steps:

1. Clone Repo: ```git clone https://github.com/clayton-perszyk/React-IMAPConnect.git```
2. Execute: ```cd React-IMAPConnect```
3. Run: ```bundle && yarn```
4. Run Migrations: ```bin/rails db:migrate```
5. Start Server: ```foreman start -f Procfile.dev```
6. Visit: ```http://localhost:3000/#/```
7. Have Fun!!!

## Additional Technologies Include:
* ES6
* React Router
* React Loading
* Materialize
* Karma
* Mocha


## Ideas for Future Versions:
* More tests
* Rewrite tests, using Enzyme and Jest
* Add security (e.g. encrypt/decrypt IMAP password)
* Include better error handling
* Make back-end RESTful
* Redesign backend (e.g. create more models/controllers and associations)
* Add a User model with authentication
* Make it compatible with other email servers (currently only supports Gmail)
* Add better validations (both front-end and back-end)
* Make search faster
* Work on refactoring code
