import React, { Component } from "react";
import { Text, StyleSheet, Image } from "react-native";
import {
  Card,
  CardItem,
  Left,
  Thumbnail,
  Body,
  Button,
  Icon
} from "native-base";

export default class CardComponent extends Component {
  render() {
    const images = {
      "1": require("../assets/feed_images/1.jpg"),
      "2": require("../assets/feed_images/2.jpg"),
      "3": require("../assets/feed_images/3.png")
    };
    return (
      <Card>
        <CardItem>
          <Left>
            <Thumbnail source={require("../assets/me.png")} />
            <Body>
              <Text>André D.</Text>
              <Text note>3 de Dezembro de 2018</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem cardBody>
          <Image
            source={images[this.props.imageSource]}
            style={{ height: 200, width: null, flex: 1 }}
          />
        </CardItem>
        <CardItem style={{ height: 40 }}>
          <Left>
            <Button transparent>
              <Icon name="ios-heart-empty" style={{ color: "black" }} />
            </Button>
            <Button transparent>
              <Icon name="ios-chatbubbles" style={{ color: "black" }} />
            </Button>
            <Button transparent>
              <Icon name="ios-send" style={{ color: "black" }} />
            </Button>
          </Left>
        </CardItem>
        <CardItem style={{ paddingTop: 0 }}>
          <Text style={{ color: "black" }}>{this.props.likes} Likes</Text>
        </CardItem>
        <CardItem>
          <Body>
            <Text>
              <Text style={{ fontWeight: "900" }}>André </Text>
              Lorem Ipsum generator its a cool idea to have that shit on my vs
              code
            </Text>
          </Body>
        </CardItem>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
