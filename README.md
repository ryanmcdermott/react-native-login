# react-native-login


## What is it?
`react-native-login` is an example React Native project showing how to use a WebView and [react-native-cookies](https://github.com/joeferraro/react-native-cookies) to login to your existing backend.

Using a server-side login template that you have already created, this project wraps it with a WebView and checks authentication status using `react-native-cookies` Once authenticated, a LoggedIn component is rendered showing the user they are authenticated. Cookies are persisted via the WebView so any other component you use that calls `fetch()` to retrieve AJAX data **will also pass on this cookie!**

Furthermore, upon opening the app after closing it, the user will stay signed in. When they touch the logout button, their cookies are cleared and they are subsequently redirected to the login component which lives in `./ReactNativeLogin/App/components/App.js`


## What else?
An example server, using Express and Passport is included within this project under the `./server` folder. You can use any server though, just be sure to change `cookie.remember_me` to whatever the name for your persistent cookie is, within the `./ReactNativeLogin/App/components/App.js` file. Follow the installation instructions to learn more.

Be sure to also change the URLs in `App.js` to reflect the URLs of your production and/or development server. For example, if you are running Android on Genymotion you will need to change this to the appropriate localhost IP address.

**WORKS FOR ANDROID AND IOS :smile: YAY!**


## Requirements
Ensure that you have installed **absolutely everything** listed [here](https://facebook.github.io/react-native/docs/getting-started.html#content)


## Installation
1. `git clone https://github.com/ryanmcdermott/react-native-login.git`
2. `cd react-native-login/ReactNativeLogin`
3. `npm install`
4. `cd ../server`
5. `npm install`
6. `node server.js`
7. To run the iOS version, open another terminal window type `open ../ReactNativeLogin/iOS/ReactNativeLogin.xcodeproj`
8. Click the play icon in Xcode to start the app


## Contributing
Pull requests are much appreciated and accepted.


## License
Released under the [MIT License](http://www.opensource.org/licenses/MIT)


## Credits
Jared Hanson's [excellent passport-remember me example](https://github.com/jaredhanson/passport-remember-me/tree/master/examples/login)
