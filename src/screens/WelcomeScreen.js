import React from "react";
import {
	View,
	StyleSheet,
	SafeAreaView,
	TouchableOpacity,
	Image,
	StatusBar,
} from "react-native";
import { Text } from "react-native-elements";
import Constants from "expo-constants";

const WelcomeScreen = function ({ navigation }) {
	return (
		<SafeAreaView style={styles.container}>
			<StatusBar backgroundColor="#131214" barStyle="light-content" />
			<Text style={styles.WelcomeText} h4>
				Welcome To FilipJ Studios{"\n"} Home Workout App
			</Text>

			<View style={styles.imageContainer}>
				<Image style={styles.icon} source={require("../../assets/icon.png")} />
			</View>

			<TouchableOpacity
				title="CONTINUE"
				style={styles.WelcomeButton}
				onPress={() => navigation.navigate("Home")}
			>
				<Text style={{ color: "#fff", letterSpacing: 6, fontSize: 24 }}>
					CONTINUE
				</Text>
			</TouchableOpacity>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#131214",
		paddingTop: Constants.statusBarHeight,
	},

	WelcomeText: {
		textAlign: "center",
		fontFamily: "opensans-bold",

		color: "#fff",
		fontSize: 10,
		marginTop: -30,
		paddingLeft: 12,
		paddingRight: 12,
		letterSpacing: 1,
	},

	WelcomeButton: {
		fontFamily: "opensans-bold",

		textTransform: "uppercase",
		borderRadius: 15,
		backgroundColor: "#383d42",

		padding: 10,
		marginTop: -40,
	},
	icon: {
		marginTop: 20,
		marginBottom: 80,
		width: 250,
		height: 250,
	},
});

export default WelcomeScreen;
