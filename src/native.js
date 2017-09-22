import React from 'react'
import { NetInfo } from 'react-native'
import { ONLINE, OFFLINE } from 'redux-queue-offline'

const NetworkListener = Provider => React.createClass({
  displayName: 'NetworkListener',
  _wasOnline: undefined,
  componentDidMount () {
    NetInfo.isConnected.addEventListener('change', this._changeListener)
  },
  componentWillUnmount () {
    NetInfo.isConnected.removeEventListener('change', this._changeListener)
  },
  render () {
    return <Provider {...this.props} />
  },
  _changeListener (isConnected) {
    if (this._wasOnline !== isConnected) {
      this._wasOnline = isConnected
      this.props.store.dispatch({
        type: isConnected ? ONLINE : OFFLINE
      })
    }
  }
})

export default NetworkListener
