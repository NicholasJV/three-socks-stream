# three socks

#### With this app you can move a 3D rendered object in the browser using your mobile device like a controller!

Much Amaze!!!

**Tech used:**
Socket.io and Three.js (hence the highly original, stunning title)

### The quick way to use it:
Using the same wifi network for both,  
[**go here**](https://three-socks.herokuapp.com) in your desktop/laptop browser (standard browser? OG browser? non-mobile browser? Can we do better here people?)  
[**then go here**](https://three-socks.herokuapp.com/control) with your mobile browser  
(only tested with iPhone/Safari thus far--let me know in the comments if Android works!)  
aaand... you'll see!

-----
### The fun way (set it up yourself locally):

Clone, `npm install`, then `npm start`, you know the drill.

Your console should tell you that the server is listening on port 8080.  
When you go to your `localhost:8080` in your browser, you should see a Three-Socks title and dark background.

### The fun part
Get your phone or tablet out and locate your IP address from your local server (your computer).
  - **tip:** on OSX, an easy way to get your IP address is [opt]-click on your wifi/network icon in the menu bar

On your mobile device browser, navigate to: `[your IP address]:8080/control`.

You'll know it's working if you see "a new client connected".
(It should say that twice in the console. The first one came when you connected with your standard non-mobile browser.)

If all of the above worked, you should see that block-like-device-shaped-thing start to dance and move along with the movements of your mobile device!

**Also, fun sidenote:**  Technically this may work on your laptop with just two different browser windows... because some laptops have an orientation sensor! Who woulda thunk it? (I've only tested with a MacBook Pro, and it works, though as you'd imagine, it is less smooth than the one in a mobile device as.)  

-----    
#### Now, go fork and use it to make something cooler-looking!
