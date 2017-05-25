# three-socks-stream

#### With this app you can move a 3D rendered object in the browser using your mobile device like a controller!

Fun!!!

**Tech used:**
Socket.io and Three.js (hence the highly original, stunning title)

-----
### Setup:

Clone, `npm install`, `npm start`

At `localhost:8080` in your browser, you should see a Three-Socks title and dark background (it gets more interesting at the next part:).

### The fun part
Get your IP address from your local server (your computer).  
  - **tip:** on OSX, an easy way to get your IP address is [opt]-click on your wifi/network icon in the menu bar

On your mobile device browser, navigate to: `[your IP address]:8080/control`.
(only tested this on iPhones but it should work in any browser, please comment if you have issues).  

You'll know it's working if you see "a new client connected".
(It should say that twice in the console. The first one came when you connected with your standard non-mobile browser.)

If all of the above worked, you should see that block-like-device-shaped-thing start to dance and move along with the movements of your mobile device!

  - **Also, fun sidenote:**  Technically this may work on your laptop with just two different browser windows... because some laptops have an orientation sensor! Who woulda thunk it? (I've only tested with a MacBook Pro, and it works, though as you'd imagine, it is less smooth than the one in a mobile device as.)
