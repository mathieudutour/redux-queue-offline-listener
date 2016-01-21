redux-queue-offline-listener
=============

[![build status](https://img.shields.io/travis/mathieudutour/redux-queue-offline-listener/master.svg?style=flat-square)](https://travis-ci.org/mathieudutour/redux-queue-offline-listener)
[![npm version](https://img.shields.io/npm/v/redux-queue-offline-listener.svg?style=flat-square)](https://www.npmjs.com/package/redux-queue-offline-listener)

You can use the NetworkListener [high order component](https://gist.github.com/sebmarkbage/ef0bf1f338a7182b6775) to wrap the redux Provider and automatically dispatch the ONLINE and OFFLINE action when listening to `window.on('online')` and `window.on('online')`.

```js
import NetworkListener from 'redux-queue-offline-listener';
import { Provider } from 'react-redux';

const NetworkListenerProvider = NetworkListener(Provider);

ReactDOM.render(
  <NetworkListenerProvider store={store}>
    <MyRootComponent />
  </NetworkListenerProvider>,
  rootEl
)
```

## License

  MIT
