/**
 * Created by david on 7/16/17.
 */
import React from 'react'
import { Text, View, Image } from 'react-native'
import Card from './Card'
import CardSection from './CardSection'

// destructuring off off 'props'
const AlbumDetails = ({ album }) => {

  const { title, artist, thumbnail_image, image } = album;
  const {
    thumbnailStyle,
    thumbnailContainerStyle,
    headerStyle,
    headerTextStyle,
    imageStyle
  } = styles;

  return (
    <Card>
      <CardSection>
        <View style={thumbnailContainerStyle}>
          <Image
            style={thumbnailStyle}
            source={{ uri: thumbnail_image }}
          />
        </View>
        <View style={headerStyle}>
          <Text style={headerTextStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>
      <CardSection>
          <Image
            style={imageStyle}
            source={{ uri: image }}
          />
      </CardSection>
    </Card>
  )
}

const styles = {
  headerStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 18
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  // flex box styling trick here for setting full width when we don't know the width of the device
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
}

export default AlbumDetails