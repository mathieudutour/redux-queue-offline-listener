import React from 'react'
import { ONLINE, OFFLINE } from 'redux-queue-offline'

const NetworkListener = Provider => React.createClass({
  displayName: 'NetworkListener',
  componentDidMount () {
    if (window && window.addEventListener) {
      window.addEventListener('online', this._onlineListener)
      window.addEventListener('offline', this._offlineListener)
    }
  },
  componentWillUnmount () {
    if (window && window.removeEventListener) {
      window.removeEventListener('online', this._onlineListener)
      window.removeEventListener('offline', this._offlineListener)
    }
  },
  render () {
    return <Provider {...this.props} />
  },
  _onlineListener () {
    this.props.store.dispatch({
      type: ONLINE
    })
  },
  _offlineListener () {
    this.props.store.dispatch({
      type: OFFLINE
    })
  }
})

export default NetworkListener
