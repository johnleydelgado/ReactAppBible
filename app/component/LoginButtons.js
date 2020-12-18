import { View, StyleSheet, Text, Dimensions } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import React from "react";
import { COLORS } from '../constant/colors'
const LoginButtons = ({ title, goToHome }) => {
	return (
		<TouchableOpacity onPress={() => { goToHome() }}>
			<View style={styles.container}>
				<Text style={{ fontSize: 20, color: 'white', fontFamily: 'OpenSansB', }}  >
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
		backgroundColor: COLORS.mainColor,
		alignItems: "center",
		justifyContent: "center",
		marginVertical: 10,
	},
});
export default LoginButtons;
