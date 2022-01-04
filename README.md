This is a fork of [WBO](https://wbo.ophir.dev) customized for the purpose of our [math sessions](http://mathsessions.klusik.cz/).

## Added features

- Pushup counter (click to increase by 10, shift-click to decrease by 10)
- LaTeX math tool

## Running

First, download the sources:

```
git clone https://github.com/xigoi/whitebophir.git
cd whitebophir
```

Then [install node.js](https://nodejs.org/en/download/) (v10.0 or superior)
if you don't have it already, then install WBO's dependencies:

```
npm install --production
```

Finally, you can start the server:

```
PORT=5001 npm start
```

This will run WBO directly on your machine, on port 5001, without any isolation from the other services. You can also use an invokation like

```
PORT=5001 HOST=127.0.0.1 npm start
```

to make whitebophir only listen on the loopback device. This is useful if you want to put whitebophir behind a reverse proxy.

### Running WBO on a subfolder

By default, WBO launches its own web server and serves all of its content at the root of the server (on `/`).
If you want to make the server accessible with a different path like `https://your.domain.com/wbo/` you have to setup a reverse proxy.
See instructions on our Wiki about [how to setup a reverse proxy for WBO](https://github.com/lovasoa/whitebophir/wiki/Setup-behind-Reverse-Proxies).

## Configuration

When you start a WBO server, it loads its configuration from several environment variables.
You can see a list of these variables in [`configuration.js`](./server/configuration.js).
Some important environment variables are :

- `WBO_HISTORY_DIR` : configures the directory where the boards are saved. Defaults to `./server-data/`.
- `WBO_MAX_EMIT_COUNT` : the maximum number of messages that a client can send per unit of time. Increase this value if you want smoother drawings, at the expense of being susceptible to denial of service attacks if your server does not have enough processing power. By default, the units of this quantity are messages per 4 seconds, and the default value is `192`.
