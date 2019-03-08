# Super Basic API Example

### To Run Locally
- Install Node (this should also install npm - node package manager)
- Clone this repo
- From the root directory run `npm install`
- Start the server by typing `npm run start`
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
- The data that is sent will currently be lost if you server is stopped. A good next step would be to hook up this api to a database for more permanent storage. Have fun!

