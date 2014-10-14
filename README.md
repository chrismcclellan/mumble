#mumble.js
A simple Javascript framework for adding voice commands to a web site using the web speech recognition API.
Supports RegEx command syntax and the CommonJS/node.js/AMD module syntax.

Forked from and inspired by https://github.com/TalAter/annyang.

##Demo
For a demo of the original library (annyang.js), see https://www.talater.com/annyang. The end-user experience is basically the same.

##Usage
- If using node.js with browserify for example you can run `npm install mumble-js` within your app to get the latest version. Then `require('mumble')` depending on your paths.
- If you're using a plain web app include mumble.js or mumble.min.js directly on your site.

Then define some commands and start the device:

````html
// if using node.js
var Mumble = require('./libs/mumble');

// for all options, see the docs
var mumble = new Mumble({
	language: 'en-US',
	debug: false, // set to true to get some detailed information about what's going on

	// define some commands using regex or a simple string
	commands: [{
		name: 'clock',
		command: 'what time is it',

		action: function() {
			console.log(new Date());
		}
	}, {
		name: 'google',
		command: /google (.+)/,

		action: function(query) {
			// google something..
		}
	}]
});

// add a command afterwards, or anytime
mumble.addCommand('youtube', /youtube (.+)/, function(query) {
	// youtube something
});

// start listening
mumble.start();
````

##Microphone permissions and HTTP(S)
Chrome's implementation of SpeechRecognition behaves differently based on the protocol used:

- `https://` Asks for permission once and remembers the choice.
- `http://`  Asks for permission repeatedly **on every page load**. Results are also returned significantly slower in HTTP.

For a great user experience, don't compromise on anything less than HTTPS (an SSL certificate can be as cheap as $5).

While developing, you can use a self-signed SSL certificate described here: https://www.sslshopper.com/article-how-to-create-and-install-an-apache-self-signed-certificate.html.

##API Documentation
Check out [mumble.md in the docs/ folder](https://github.com/swemaniac/mumble/blob/master/docs/mumble.md) for the public API methods and all available options.

##Authors
- Johan Johansson: https://github.com/swemaniac
- Tal Ater: https://github.com/TalAter (the original annyang.js author)

##License
Licensed under [MIT](https://github.com/swemaniac/mumble/blob/master/LICENSE).