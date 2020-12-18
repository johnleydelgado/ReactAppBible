import React, { useState, useEffect } from "react";
import {
	View,
	StyleSheet,
	Text,
	Dimensions,
	ScrollView,
	ActivityIndicator,
} from "react-native";
import SearchBox from "../../component/SearchBox";
import { COLORS } from "../../constant/colors";
import { FontAwesome5 } from "@expo/vector-icons";
import BibleList from "../../component/Home/BibleList";
import reusableApi from "../../constant//ReusableApiRequest";
import getAllBibles from "../../constant/GetAllBiblesApi";
function Home(props) {
	const apiEng = reusableApi(
		"https://api.scripture.api.bible/v1/bibles?name=English"
	);
	const apiSanskrit = reusableApi(
		"https://api.scripture.api.bible/v1/bibles?name=Sanskrit"
	);
	const apiGreek = reusableApi(
		"https://api.scripture.api.bible/v1/bibles?name=Greek"
	);
	const apiKwere = reusableApi(
		"https://api.scripture.api.bible/v1/bibles?name=Greek"
	);

	const getBible = getAllBibles("https://api.scripture.api.bible/v1/bibles");

	// const testApi = reusableApi("https://api.scripture.api.bible/v1/bibles");
	// const [data, setData] = useState([]);
	// const [isLoaded, setIsLoaded] = useState(false);

	// useEffect(() => {
	// 	let sortedVersions = {};

	// 	const versions = testApi.data.map((data) => {
	// 		setIsLoaded(true);
	// 		return {
	// 			name: data.name,
	// 			id: data.id,
	// 			abbreviation: data.abbreviation,
	// 			description: data.description,
	// 			language: data.language.name,
	// 		};
	// 	});
	// 	versions.map((data) => {
	// 		if (!sortedVersions[data.language]) {
	// 			sortedVersions[data.language] = [];
	// 		}
	// 		sortedVersions[data.language].push(data);
	// 	});
	// 	setData(sortedVersions);

	// 	// sortedVersions.map((data) => {
	// 	// 	data.sort(
	// 	// 		(a, b) => a.abbreviation.toUpperCase < b.abbreviation.toUpperCase()
	// 	// 	);
	// 	// const result = sortedVersions.English.map((item) => {
	// 	// 	return item.name;
	// 	// });
	// 	let lastLanguage = "";

	// 	Object.values(sortedVersions).map((item) => {
	// 		item.map((item2) => {
	// 			if (lastLanguage != item2.language) {
	// 				//gagawa sya ng flat list
	// 				//and bagong laguange
	// 				lastLanguage = item2.language;
	// 			} else {
	// 				//mag dadagdag sya sa flatlist
	// 				console.log(item2.language + ": " + lastLanguage);
	// 			}
	// 		});
	// 	});
	// }, [isLoaded]);

	return (
		<View style={styles.container}>
			<SearchBox />
			<ScrollView
				scrollEventThrottle={10}
				showsVerticalScrollIndicator={false}
				decelerationRate="fast"
			>
				<View style={styles.header}>
					<View style={styles.headerBox}>
						<View style={styles.header_items}>
							<FontAwesome5 name="star" size={20} color={COLORS.mainColor} />
							<Text
								style={{
									fontFamily: "OpenSansB",
									color: "darkgrey",
									textAlign: "center",
								}}
							>
								Top Read
							</Text>
						</View>
						<View style={styles.header_items}>
							<FontAwesome5
								name="book-open"
								size={20}
								color={COLORS.thirdColor}
							/>
							<Text style={{ fontFamily: "OpenSansB", color: "darkgrey" }}>
								Verses
							</Text>
						</View>
						<View style={styles.header_items}>
							<FontAwesome5 name="praying-hands" size={20} color="gold" />
							<Text style={{ fontFamily: "OpenSansB", color: "darkgrey" }}>
								Prayers
							</Text>
						</View>
						<View style={styles.header_items}>
							<FontAwesome5 me5 name="newspaper" size={20} color="black" />
							<Text style={{ fontFamily: "OpenSansB", color: "darkgrey" }}>
								News
							</Text>
						</View>
					</View>
				</View>
				<View style={styles.content}>
					<BibleList data={apiEng.data} title="English" />
					<BibleList data={apiSanskrit.data} title="Sanskrit" />
					<BibleList data={apiGreek.data} title="Greek, Ancient" />
					<BibleList data={apiEng.data} title="Kwere" />
				</View>
			</ScrollView>
		</View>
	);
}
const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "white",
	},
	header: {
		flex: 2,
		alignItems: "center",
	},
	headerBox: {
		flexDirection: "row",
		justifyContent: "space-around",
		alignItems: "center",
		marginTop: 20,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5,
		borderRadius: 20,
		width: (width / 2) * 1.5,
		height: 70,
		backgroundColor: "white",
	},
	header_items: {
		alignItems: "center",
	},
	content: {
		flex: 8,
		margin: 20,
	},
	contentHeaderText: {},
});
export default Home;
