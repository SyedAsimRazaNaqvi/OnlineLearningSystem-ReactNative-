import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  AlertButton,
  Alert,
} from 'react-native';
import { Header } from '../sections/Header';
import * as Svg from 'react-native-svg';
import { StackNavigator } from 'react-navigation';

export class Contact extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      msg: 'Enter Message',
      name: 'Enter Name',
      email: 'Enter your Email Address',
    };
  }

  clearFields = () => this.setState({ name: '', msg: '', email: '' });

  sendMessage = () => {
    Alert.alert(this.state.name, this.state.msg);
    this.props.navigation.goBack();
  };

  clear1 = () => this.setState({ name: '' });
  clear2 = () => this.setState({ msg: '' });
  clear3 = () => this.setState({ email: '' });

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Header navigate={navigate} message="LOGIN" />
        <Text style={styles.heading}>Contact Us</Text>

        <TextInput
          onFocus={this.clear1}
          style={styles.inputs}
          onChangeText={(text) => this.setState({ name: text })}
          value={this.state.name}
        />

        <TextInput
          onFocus={this.clear2}
          style={styles.multiInput}
          onChangeText={(text) => this.setState({ msg: text })}
          value={this.state.msg}
          multiline={true}
          numberOfLines={4}
        />

        <TextInput
          onFocus={this.clear3}
          style={styles.inputs}
          onChangeText={(text) => this.setState({ email: text })}
          value={this.state.email}
        />

        <TouchableHighlight onPress={this.sendMessage} underlayColor="#31e981">
          <Text style={styles.buttons}>Send Message</Text>
        </TouchableHighlight>

        <TouchableHighlight onPress={this.clearFields} underlayColor="#31e981">
          <Text style={styles.buttons}>Reset Form</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingBottom: '45%',
  },
  heading: {
    fontSize: 16,
    flex: 1,
  },
  inputs: {
    flex: 1,
    width: '80%',
    padding: 10,
    backgroundColor: '#d6f6d1',
  },
  multiInput: {
    flex: 2,
    width: '90%',
    paddingTop: 20,
  },
  buttons: {
    marginTop: 15,
    fontSize: 18,
  },
});
