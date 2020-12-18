import React from "react";
import {
	View,
	StyleSheet,
	Text,
	TextInput,
	TouchableWithoutFeedback,
	Keyboard,
} from "react-native";
import TextInputFields from "../../component/TextInputFields";
import LoginButtons from "../../component/LoginButtons";
import { COLORS } from '../../constant/colors'
import { FontAwesome } from '@expo/vector-icons';

function Login({ navigation }) {

	const loginSuccess = () => {
		navigation.navigate('HomeTab');
	}

	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
			<View style={styles.container}>
				<View style={styles.header}>
					<View style={styles.header}>
						<FontAwesome name='book' size={100} color={COLORS.labelColor} />
						<Text style={styles.heade_fontStyle}>Sign In</Text>
					</View>
				</View>
				<View style={styles.content}>
					<View style={styles.content_inputStyle}>
						<TextInputFields placeholder="Username" />
						<TextInputFields placeholder="Password" />
					</View>
					<View style={styles.content_buttonStyle}>
						<LoginButtons title="Submit" goToHome={loginSuccess} />
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
		backgroundColor: COLORS.mainColor,
		borderBottomRightRadius: 75,
		justifyContent: "center",
		alignItems: "center",
	},
	heade_fontStyle: {
		fontSize: 50,
		fontFamily: "OpenSansB",
		color: 'white'
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
