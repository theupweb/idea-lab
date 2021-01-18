## This server runs at port 3000

# Make sure you start server first before starting client

# Steps to Follow to correctly start Server
- run `npm install` in this directory
- get `service account admin credentials` for Node.js from firebase (for this you need to go and create a firebase 
project)
- save the credentials in `secrets` folder as a file named `serviceKey.json`
- update `cred.js` file in secrets folder with your own email and password. Email will be sent via this account.
- run `npm start` in this directory

### What does server do?
- Adds email to a collection named newsletters.
- Sends email to everyone in collection when a newsletter is published