import React from 'react';
import { StyleSheet, Image } from 'react-native';

export class Hero extends React.Component {
  render() {
    return <Image style={styles.HeroImage} source={require('./img/h3.jpg')} />;
  }
}

const styles = StyleSheet.create({
  HeroImage: {
    width: undefined,
    height: undefined,
    flex: 8,
  },
});
