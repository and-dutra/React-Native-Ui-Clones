import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Icon, Container, Content } from "native-base";
import CardComponent from "./CardComponent";

export default class MainScreen extends Component {
  static navigationOptions = {
    headerLeft: <Icon name="ios-camera" style={{ paddingLeft: 10 }} />,
    headerRight: <Icon name="ios-send" style={{ paddingRight: 10 }} />,
    title: "Instagram"
  };
  render() {
    return (
      <Container style={styles.container}>
        <Content>
          <CardComponent imageSource="1" likes="101" />
          <CardComponent imageSource="2" likes="300" />
          <CardComponent imageSource="3" likes="101" />
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
