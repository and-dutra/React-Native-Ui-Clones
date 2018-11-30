import React, { Component } from "react";
import { Text, StyleSheet, View, ScrollView } from "react-native";
import { Icon, Container, Content, Thumbnail } from "native-base";
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
          <View style={{ height: 100 }}>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingHorizontal: 7
              }}
            >
              <Text style={{ fontWeight: "bold" }}>Stories</Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Icon style={{ fontSize: 14 }} name="ios-play" />
                <Text style={{ fontWeight: "bold", marginLeft: 3 }}>
                  Watch All
                </Text>
              </View>
            </View>
            <View style={{ flex: 3 }}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                  alignItems: "center",
                  paddingStart: 5,
                  paddingEnd: 5
                }}
              >
                <Thumbnail
                  style={{
                    borderColor: "pink",
                    borderWidth: 2,
                    marginHorizontal: 5
                  }}
                  source={require("../assets/StoriesHeaderThumbnails/1.jpg")}
                />
                <Thumbnail
                  style={{
                    borderColor: "pink",
                    borderWidth: 2,
                    marginHorizontal: 5
                  }}
                  source={require("../assets/StoriesHeaderThumbnails/2.jpg")}
                />
                <Thumbnail
                  style={{
                    borderColor: "pink",
                    borderWidth: 2,
                    marginHorizontal: 5
                  }}
                  source={require("../assets/StoriesHeaderThumbnails/3.jpg")}
                />
                <Thumbnail
                  style={{
                    borderColor: "pink",
                    borderWidth: 2,
                    marginHorizontal: 5
                  }}
                  source={require("../assets/StoriesHeaderThumbnails/4.jpg")}
                />
                <Thumbnail
                  style={{
                    borderColor: "pink",
                    borderWidth: 2,
                    marginHorizontal: 5
                  }}
                  source={require("../assets/StoriesHeaderThumbnails/5.jpg")}
                />
                <Thumbnail
                  style={{
                    borderColor: "pink",
                    borderWidth: 2,
                    marginHorizontal: 5
                  }}
                  source={require("../assets/StoriesHeaderThumbnails/6.jpg")}
                />
                <Thumbnail
                  style={{
                    borderColor: "pink",
                    borderWidth: 2,
                    marginHorizontal: 5
                  }}
                  source={require("../assets/StoriesHeaderThumbnails/7.jpg")}
                />
              </ScrollView>
            </View>
          </View>
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
