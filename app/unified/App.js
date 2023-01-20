import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View
        style={{
          flex: 1,
        }}
      >
        <View
          style={{
            display: "flex",
            flex: 0.26,
            flexDirection: "row",
            backgroundColor: "white",
          }}
        >
          <View
            style={{
              flex: 0.3,
              marginTop: 60,
              // backgroundColor: "blue",
              alignItems: "center",
              marginLeft: 30,
              marginRight: 30,
              alignContent: "center",
              justifyContent: "center",
            }}
          >
            <Image
              source={{
                height: 120,
                width: 120,

                uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",
              }}
              style={{
                position: "absolute",
                bottom: 0,
                borderRadius: 20,
              }}
            />
          </View>
          <View
            style={{
              marginRight: 10,
              marginLeft: 10,
              flex: 0.65,
              backgroundColor: "#0197f6",
              display: "flex",
              borderBottomLeftRadius: 30,
              borderBottomRightRadius: 30,
            }}
          >
            <View
              style={{
                flex: 1,
                alignContent: "center",
                margin: 10,
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: 20,
                  marginBottom: 5,
                  fontWeight: "bold",
                }}
              >
                Sanskar Lamsal
              </Text>
              <Text
                style={{
                  color: "white",
                }}
              >
                24 Years old
              </Text>
              <Text
                style={{
                  color: "white",
                }}
              >
                Butwal Rupandehi
              </Text>
              <Text
                style={{
                  color: "white",
                }}
              >
                Blood Group : B+
              </Text>
              <Text
                style={{
                  color: "white",
                }}
              >
                Gender : Male
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            flex: 0.74,
            margin: 15,
            // backgroundColor: "red",
          }}
        >
          <Text
            style={{
              marginTop: 10,
              fontSize: 15,
              fontWeight: "bold",
              color: "gray",
            }}
          >
            Current Prescriptions
          </Text>

          <View
            style={{
              backgroundColor: "gray",
              heifht: 200,
              width: 400,
            }}
          >
            <Text>Hello</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
