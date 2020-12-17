import React from "react";
import {
	View,
	StyleSheet,
	Text,
	TextInput,
	TouchableWithoutFeedback,
} from "react-native";
import TextInputFields from "../../component/TextInputFields";
import LoginButtons from "../../component/LoginButtons";
function Login(props) {
	return (
		<TouchableWithoutFeedback>
			<View style={styles.container}>
				<View style={styles.header}>
					<View style={styles.header}>
						<Text style={styles.heade_fontStyle}>Sign In</Text>
					</View>
				</View>
				<View style={styles.content}>
					<View style={styles.content_inputStyle}>
						<TextInputFields placeholder="Username" />
						<TextInputFields placeholder="Password" />
					</View>
					<View style={styles.content_buttonStyle}>
						<LoginButtons title="Submit" />
						<LoginButtons title="Register" />
					</View>
				</View>
			</View>
		</TouchableWithoutFeedback>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "white",
	},
	header: {
		flex: 4,
		backgroundColor: "darkorange",
		borderBottomRightRadius: 75,
		justifyContent: "center",
		alignItems: "center",
	},
	heade_fontStyle: {
		fontSize: 50,
		fontFamily: "Helvetica",
		fontWeight: "bold",
	},
	header_inner: {},
	content: {
		flex: 6,
	},
	content_inputStyle: {
		flex: 0.5,
	},
	content_buttonStyle: {
		flex: 1,
		alignItems: "center",
	},
});

export default Login;
