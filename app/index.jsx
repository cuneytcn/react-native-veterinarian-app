import React from "react";
import { Image } from "expo-image";
import { View, Text, StyleSheet, Dimensions, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Entypo from "@expo/vector-icons/Entypo";
import { router } from "expo-router";

export default function index() {
   return (
      <SafeAreaView style={Styles.SafeArea}>
         <View style={{ position: "absolute", top: 60, left: 40 }}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
               <View>
                  <Text style={{ fontSize: 36, fontWeight: "bold", color: "#fff", lineHeight: 40 }}>Home</Text>
                  <Text style={{ fontSize: 36, fontWeight: "bold", color: "#fff", lineHeight: 40 }}>For Pet</Text>
               </View>
            </View>
         </View>
         <View style={Styles.MainView}>
            <Image
               source={require("../assets/images/app-background.png")}
               contentFit="contain"
               style={Styles.MainImage}
            />
            <View style={Styles.SecondView}>
               <View style={Styles.SecondViewText}>
                  <Text style={{ fontSize: 28, fontWeight: "bold", color: "#464646" }}>Take Care of </Text>
                  <Text style={{ fontSize: 28, fontWeight: "bold", color: "#464646" }}>Your Lovely Pet</Text>
                  <View style={{ marginTop: 16, alignItems: "center" }}>
                     <Text style={{ fontSize: 18, fontWeight: "light", color: "#949494" }}>
                        Make your bonding relationship
                     </Text>
                     <Text style={{ fontSize: 18, fontWeight: "light", color: "#949494" }}>
                        between <Text style={{ color: "#F7924A" }}>pets & humans.</Text>
                     </Text>
                  </View>
               </View>
               <Pressable style={Styles.StartButton} onPress={() => router.push("/(tabs)")}>
                  <View
                     style={{
                        position: "absolute",
                        left: 10,
                        width: 55,
                        height: 55,
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: 55,
                        backgroundColor: "#fff",
                     }}>
                     <Entypo name="chevron-thin-right" size={24} color="#F7924A" />
                  </View>
                  <Text style={{ fontSize: 24, fontWeight: "semibold", color: "#fff" }}>Get Started</Text>
               </Pressable>
            </View>
         </View>
      </SafeAreaView>
   );
}

const Styles = StyleSheet.create({
   SafeArea: {
      flex: 1,
      backgroundColor: "#F7924A",
   },
   MainView: {
      flex: 1,
      justifyContent: "space-between",
      alignItems: "center",
      position: "relative",
      overflow: "hidden",
   },
   MainImage: {
      width: (Dimensions.get("screen").width * 90) / 100,
      height: 400,
      marginTop: 123,
      flex: 1,
   },
   SecondView: {
      flex: 1,
      justifyContent: "space-between",
      alignItems: "center",
      width: "150%",
      backgroundColor: "#fff",
      borderTopStartRadius: 400,
      borderTopEndRadius: 400,
      paddingTop: 50,
      paddingBottom: 50,
   },
   SecondViewText: {
      justifyContent: "center",
      alignItems: "center",
   },
   StartButton: {
      width: 290,
      height: 70,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 50,
      backgroundColor: "#F7924A",
      position: "relative",
   },
});
