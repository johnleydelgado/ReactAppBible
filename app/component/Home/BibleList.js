import React from "react";
import {
	View,
	FlatList,
	Text,
	StyleSheet,
	Dimensions,
	ScrollView,
	TouchableOpacity,
	ActivityIndicator,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

const BibleList = ({ data, title }) => {
	return (
		<View style={{ flex: 1 }}>
			<Text style={styles.headerTitle}>{title}</Text>
			{!Object.keys(data).length ? (
				<ActivityIndicator size="large" color="gray" style={{ flex: 1 }} />
			) : (
				<ScrollView horizontal showsHorizontalScrollIndicator="false">
					<FlatList
						data={data}
						numColumns={Object.keys(data).length / 2}
						scrollEnabled={false}
						columnWrapperStyle={{ flex: 1, justifyContent: "space-between" }}
						renderItem={({ item }) => (
							<TouchableOpacity style={styles.content}>
								<Text style={{ fontFamily: "OpenSansR", fontSize: 10 }}>
									{item.name}
								</Text>
								<View style={{ alignSelf: "flex-end" }}>
									<FontAwesome5 name="book-open" size={10} color="darkgrey" />
								</View>
							</TouchableOpacity>
						)}
						keyExtractor={(item) => item.id}
					/>
				</ScrollView>
			)}
		</View>
	);
};

const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
	headerTitle: {
		fontSize: 30,
		fontFamily: "OpenSansB",
	},
	content: {
		backgroundColor: "whitesmoke",
		justifyContent: "space-between",
		width: (width / 2) * 0.4,
		height: 100,
		borderRadius: 20,
		margin: 10,
		padding: 10,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5,
	},
});
export default BibleList;
