import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
const TextInputFields = ({ placeholder }) => {
	return <TextInput style={styles.textInputStyle} placeholder={placeholder} />;
};

const styles = StyleSheet.create({
	textInputStyle: {
		padding: 10,
		paddingLeft: 20,
		paddingRight: 20,
		borderRadius: 10,
		borderWidth: 1,
		borderColor: "darkorange",
		backgroundColor: "white",
		margin: 10,
		marginLeft: 30,
		marginRight: 30,
		height: 60,
	},
});

export default TextInputFields;
