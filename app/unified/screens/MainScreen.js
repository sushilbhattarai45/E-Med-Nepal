import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";

export default function HomeScreen() {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{}}>
      <View
        style={{
          flex: 1,
        }}
      >
        <StatusBar style="auto" />
        <View
          style={{
            flex: 1,
            margin: 20,
          }}
        >
          <View
            style={{
              display: "flex",
              flex: 0.6,

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
                marginTop: 10,
                display: "flex",
                flexDirection: "row",
              }}
            >
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                <View
                  style={{
                    backgroundColor: "#F5F5F9",
                    height: 100,
                    width: 250,
                    borderRadius: 10,
                  }}
                >
                  <View
                    style={{
                      marginTop: 10,
                      display: "flex",
                      flexDirection: "row",
                    }}
                  >
                    <Text
                      style={{
                        position: "absolute",
                        left: 20,
                        fontWeight: "bold",
                        fontSize: 16,
                      }}
                    >
                      Citamol
                    </Text>
                    <Text
                      style={{
                        position: "absolute",
                        right: 20,
                        fontSize: 14,
                        fontColor: "gray",
                      }}
                    >
                      20 May 2022
                    </Text>
                  </View>
                  <View
                    style={{
                      display: "flex",
                      flex: 1,

                      flexDirection: "column",
                    }}
                  >
                    <View
                      style={{
                        flex: 0.5,
                        position: "absolute",
                        bottom: 35,
                        left: 15,
                        width: 70,
                        height: 25,
                        borderRadius: 15,
                        alignContent: "center",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: "#0197f6",
                      }}
                    >
                      <Text style={{ color: "white", fontWeight: "bold" }}>
                        24 Days
                      </Text>
                    </View>
                    <Text
                      style={{
                        fontWeight: "bold",
                        fontSize: 13,
                        position: "absolute",
                        bottom: 10,
                        left: 18,
                      }}
                    >
                      2 times after meal
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    backgroundColor: "#F5F5F9",
                    height: 80,
                    width: 250,
                    marginLeft: 8,
                    paddingHorizontal: 8,
                    paddingVertical: 4,
                    borderRadius: 10,
                  }}
                >
                  <Text>Hello</Text>
                </View>
                <View
                  style={{
                    backgroundColor: "#F5F5F9",
                    height: 80,
                    width: 250,
                    marginLeft: 8,
                    paddingHorizontal: 8,
                    paddingVertical: 4,
                    borderRadius: 10,
                  }}
                >
                  <Text>Hello</Text>
                </View>
              </ScrollView>
            </View>
            <View style={{ marginTop: 10 }}>
              <Text
                style={{
                  marginTop: 10,
                  fontSize: 15,
                  fontWeight: "bold",
                  color: "gray",
                }}
              >
                Medical History
              </Text>

              <View style={{ marginTop: 20 }}>
                <View
                  style={{
                    display: "flex",
                    alignSelf: "center",
                    justifyContent: "center",
                    backgroundColor: "#F5F5F9",
                    height: 100,
                    width: "100%",
                    borderRadius: 10,
                  }}
                >
                  <View
                    style={{
                      marginTop: 10,
                      display: "flex",
                      flexDirection: "row",
                    }}
                  >
                    <Text
                      style={{
                        position: "absolute",
                        left: 20,
                        fontWeight: "bold",
                        fontSize: 16,
                      }}
                    >
                      Citamol
                    </Text>
                    <Text
                      style={{
                        position: "absolute",
                        right: 20,
                        fontSize: 14,
                        fontColor: "gray",
                      }}
                    >
                      20 May 2022
                    </Text>
                  </View>
                  <View
                    style={{
                      display: "flex",
                      flex: 1,

                      flexDirection: "column",
                    }}
                  >
                    <View
                      style={{
                        flex: 0.5,
                        position: "absolute",
                        bottom: 35,
                        left: 15,
                        width: 70,
                        height: 25,
                        borderRadius: 15,
                        alignContent: "center",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: "#0197f6",
                      }}
                    >
                      <Text style={{ color: "white", fontWeight: "bold" }}>
                        24 Days
                      </Text>
                    </View>
                    <Text
                      style={{
                        fontWeight: "bold",
                        fontSize: 13,
                        position: "absolute",
                        bottom: 10,
                        left: 18,
                      }}
                    >
                      2 times after meal
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
