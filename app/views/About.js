import React from 'react';
import { StyleSheet, Text, ScrollView, Image } from 'react-native';

const aboutGlobo = `We are React Native developers. Group members of this project are Asim Raza, Kumail Ali, Haseeb Ahmed. We are IU students.`;

const whatGlobo = `Green Courses (Online Learning App) is our project for Mobile Application Development course. The concept of this app is to build online learning environment for students where they can learn. In this app, Students have account to watch full course videos and give online Quizes, and get result on time.`;

export class About extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Image
          style={styles.pics}
          source={require('../sections/img/about2.jpg')}
        />

        <Text style={styles.aboutTitle}>Who We Are</Text>
        <Text style={styles.aboutText}>{aboutGlobo}</Text>

        <Image
          style={styles.pics}
          source={require('../sections/img/about1.jpg')}
        />
        <Text style={styles.aboutTitle}>What We Do</Text>
        <Text style={styles.aboutText}>{whatGlobo}</Text>
        <Text
          onPress={() => this.props.navigation.goBack()}
          style={styles.backButton}>
          GO BACK
        </Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingBottom: 30,
    backgroundColor: '#ffffff',
  },
  pics: {
    width: '100%',
    height: 300,
  },
  aboutTitle: {
    paddingTop: 10,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  aboutText: {
    paddingBottom: 20,
  },
  backButton: {
    paddingBottom: 50,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
