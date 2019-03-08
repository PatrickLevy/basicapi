# workerbeeEndpoint

Workerbee is going to be the node server endpoint that I use whenever I need to do stuff with external applications. The first thing that I am going to do is use it to make a rubber rat's eyes light up when there is a pull request.

- It should be able to distinguish between an open and closed pr now
- Test whether the server is alive: http://104.236.192.112:3001/amialive
- Polling for the last action (open or closed) can now be peformed by performing a GET request at: http://104.236.192.112:3001/github-webhooks
- POST and GET arbitrary data: http://104.236.192.112:3001/arbitrary


- Store an average time that PR's are open, and indicate somehow
- Lights turn on for 5 minutes when there is an open pr
- Lights turn flash when a pr is merged

- here's a change

- another

- it's coming together

_ yeah

- blah
