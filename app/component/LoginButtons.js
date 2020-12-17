import { View, StyleSheet, Text, Dimensions } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import React from "react";
const LoginButtons = ({ title }) => {
	return (
		<TouchableOpacity>
			<View style={styles.container}>
				<Text style={{ fontSize: 20, color: "white", fontWeight: "bold" }}>
					{title}
				</Text>
			</View>
		</TouchableOpacity>
	);
};
const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
	container: {
		backgroundColor: "white",
		borderRadius: 50,
		height: 70,
		width: width / 2,
		backgroundColor: "darkorange",
		alignItems: "center",
		justifyContent: "center",
		marginVertical: 10,
	},
});
export default LoginButtons;
