/**
 * Created by david on 7/15/17.
 */
import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetails from './AlbumDetails';

class AlbumList extends Component {
  state = { albums: [] };

  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(res => this.setState( { albums: res.data }));
  }

  renderAlbums() {
    return this.state.albums.map(album =>
      // passing the album details down to the child 'AlbumDetails'
      <AlbumDetails key={album.title} album={album}/>
    );
  }

  render() {
    console.log('State: ', this.state);
    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}

export default AlbumList;