# Super Basic API Example

### To Run Locally
- Install Node (this should also install npm - node package manager)
- Clone this repo
- From the root directory run `npm install`
- It should say `Listening on Port 3001`

### To Test that the Server is Running
- Open a browser and go to localhost:3001/amialive
- It should say `{"data":"Yes, I'm alive!"}`

### To Test Posting Data
- Download a tool like Postman or Insomnia
- Send a post message to `localhost:3001/arbitrary` with a `URL Encoded Form`: 
- message: 'some message', action: 'some action'

