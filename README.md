# whateverhook

A stupid network listener that outputs whatever it receives.

Context: you have a service that sends webhooks that you need to listen to (& process),
but you don't want to setup a full-fledged listener application yet, and instead just
need to see whatever gets sent to you from the webhook producer. Then `whateverhook`
is your quick and dirty solution.

## How to install

```
npm install whateverhook
```

## How to use

Create a file, e.g. `index.js`
```
// in your index.js file
require('whateverhook/lib/webhook');
// or
require('whateverhook/lib/tcphook');
// depending on whatever type of protocol you need
```

Then run it with `node`
```
PORT=9999 node index.js
```

The hook will now listen at the given `PORT`. You can then use e.g. [`ngrok`](https://ngrok.com/) to
make it available to the public and point your webhooks to it. When the data arrives, it will be spewed out from the `console`.

## How NOT to use

if you do this
```
const wrongUsage = require('whateverhook');
```
you will get an error message such as this:
```
Error: Please `require` specific libraries from `whateverhook/lib/*`. available choices are: tcphook.js, webhook.js
```
Pro-tip: the above error message will tell you which actual values you can `require`.
