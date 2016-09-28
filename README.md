# three-socks-stream

#### With this app you can move a 3D rendered object in the browser using your mobile device like a controller!

Fun!!!

**Tech used:**
Socket.io and Three.js (hence the highly original, stunning title)

-----
## Setup:

Clone to local, `npm install`, then `npm start`

Your console should tell you that the server is listening on port 8080.  
When you go to your `localhost:8080` in your browser, you should see a Three-Socks title and dark background.

### The fun part
Get your phone or tablet out (only tested this on iPhones though-- comment if Android works!).  
Get your IP address from your local server (your computer).  
**tip:** on OSX, an easy way to get your IP address is [opt]-click on your wifi/network icon in the menu bar at the top

On your mobile device browser, navigate to: `[your IP address]:8080/control`.

You'll know it's working if you see "a new client connected".
(It should say that twice in the console. The first one came when you connected with your standard non-mobile browser.)

If all of the above worked, you should see that block-like-device-shaped-thing start to dance and move along with the movements of your mobile device!
