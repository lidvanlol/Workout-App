import React from "react";
import Constants from "expo-constants";
import {
	Text,
	StyleSheet,
	SafeAreaView,
	Dimensions,
	StatusBar,
	ActivityIndicator,
} from "react-native";
import { Video } from "expo-av";

import { heightPercentageToDP as hp } from "react-native-responsive-screen";
class DetailsScreen extends React.Component {
	constructor() {
		super();
		this.state = {
			loader: true,
		};
	}

	componentDidMount() {
		setTimeout(() => {
			this.setState({ loader: false });
		}, 5000);
	}
	render() {
		const { route } = this.props;
		const { description, video_url } = route.params;

		return (
			<SafeAreaView style={styles.container}>
				<StatusBar backgroundColor="#383d42" barStyle="light-content" />

				{this.state.loader ? (
					<ActivityIndicator color="#fff" size="large" style={{ margin: 30 }} />
				) : (
					<Video
						style={styles.video}
						source={video_url}
						rate={1.0}
						isMuted={true}
						resizeMode="contain"
						shouldPlay
						isLooping
					/>
				)}

				<Text style={styles.description}>{description}</Text>
			</SafeAreaView>
		);
	}
}
const styles = StyleSheet.create({
	video: {
		width: Dimensions.get("window").width,
		height: hp("50%"),
		marginTop: -80,
	},

	container: {
		flex: 1,
		backgroundColor: "#131214",
		paddingTop: Constants.statusBarHeight,
	},

	description: {
		fontSize: 19,
		fontFamily: "opensans-regular",
		marginTop: -20,
		marginLeft: 12,
		marginRight: 12,
		color: "#fff",
		textAlign: "left",
		letterSpacing: 1,
	},
});
export default DetailsScreen;
