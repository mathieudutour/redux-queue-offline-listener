import React from 'react'
import { AppState, NetInfo } from 'react-native'
import { ONLINE, OFFLINE } from 'redux-queue-offline'

const NetworkListener = Provider => React.createClass({
  displayName: 'NetworkListener',
  _wasOnline: undefined,
  componentDidMount () {
    AppState.addEventListener('change', this._changeListener)
  },
  componentWillUnmount () {
    AppState.removeEventListener('change', this._changeListener)
  },
  render () {
    return <Provider {...this.props} />
  },
  _changeListener () {
    NetInfo.isConnected.fetch().then((isConnected) => {
      if (this._wasOnline !== isConnected) {
        this._wasOnline = isConnected
        this.props.store.dispatch({
          type: isConnected ? ONLINE : OFFLINE
        })
      }
    })
  }
})

export default NetworkListener
