import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import LoginStack from "./app/navigations/Stacks/LoginStack";
import { useFonts } from "expo-font";
import BibleList from "./app/component/Home/BibleList";

export default function App() {
	const [isLoadedFont] = useFonts({
		OpenSansR: require("./app/assets/fonts/OpenSans-Regular.ttf"),
		OpenSansL: require("./app/assets/fonts/OpenSans-Light.ttf"),
		OpenSansB: require("./app/assets/fonts/OpenSans-Bold.ttf"),
	});

	if (!isLoadedFont) {
		console.log("font not loaded");
		return null;
	}
	return (
		<NavigationContainer>
			<LoginStack />
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
