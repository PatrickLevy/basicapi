# Basic API Example

### https://patricklevy.github.io/basicapi/

## Getting Started (Local Development)
### To Run Locally
- Install Node (this should also install npm - node package manager)
- Clone this repo
- From the root directory run `npm install`
- Start the server by typing `npm run start-local`
- It should say `Listening on Port 3001`

### To Test that the Server is Running
- Open a browser and go to localhost:3001/amialive
- It should say `{"data":"Yes, I'm alive!"}`

### To Test Posting Data
- Download a tool like Postman or Insomnia
- Send a `POST` message to `localhost:3001/arbitrary` with a `URL Encoded Form`: 
- message: 'some message', action: 'some action'

### To Test Retrieving the Last Posted Data
- Send a `GET` message (or open a browser) to `localhost:3001/arbitrary`

### Next Steps:
- The data that is sent will currently be lost if you server is stopped. A good next step would be to hook up this api to a database for more permanent storage.
- Host this on a remote server so that your front end web application can access it. Use the native JavaScript Fetch api, jQuery, or NPM package axios to make requests to this backend api server.

## Remote Deployment to Cloud Server

### Digital Ocean or Heroku?
- I have used Digital Ocean for a lot of small projects but it can get somewhat complicated to get SSL (to enable https) and automatic deployment of code setup. Digital Ocean is basically just a linux computer with a public ip address for $5 or more dollars per month.
- I recently started experimenting with Heroku and have found it to be much easier to get going
  - They have a free tier
  - Provide a public URL (instead of a raw ip address)
  - They enable SSL by default (https)
  - It pretty easy to integrate into GitHub for automatic deployment of code upon merge.
- They are certainly other cloud hosting providers, these are just that two that I've used

## Depolying your server to Heroku
### From local terminal
- Create a Heroku Account (you won't need a credit card for the free tier)
- Install the heroku command line tool for your computer https://devcenter.heroku.com/articles/heroku-cli
- Commit all of your code changes: `git commit -am "Lots of super great updates and stuff"`
- Deploy to Heroku: `git push heroku master`


Have fun!

