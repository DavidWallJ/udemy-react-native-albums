import React, { Component } from 'react'
import { AppRegistry, View } from 'react-native'
import Header from './src/components/Header'
import AlbumList from './src/components/AlbumList'

export default class App extends Component {
  render () {
    return (
      <View>
        <Header headerText={'Albums'}/>
        <AlbumList/>
      </View>
    )
  }
}

// only use AppRegistry on the parent root component
AppRegistry.registerComponent
('albums', () => App)