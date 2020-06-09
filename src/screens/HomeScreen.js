import React, { Component } from "react";

import {
	SafeAreaView,
	View,
	StyleSheet,
	TouchableOpacity,
	Text,
	FlatList,
	Image,
	ScrollView,
	StatusBar,
	ActivityIndicator,
} from "react-native";

import {
	data,
	data2,
	data3,
	data4,
	data5,
	data6,
	data7,
	data8,
} from "../../Api/Api";

class HomeScreen extends Component {
	constructor() {
		super();
		this.state = {
			data: data,
			data2: data2,
			data3: data3,
			data4: data4,
			data5: data5,
			data6: data6,
			data7: data7,
			data8: data8,
			loader: true,
			search: "",
		};
		this.renderItem.bind(this);
	}

	componentDidMount() {
		setTimeout(() => {
			this.setState({ loader: false });
		}, 10000);
	}

	renderItem = (item) => {
		return (
			<View>
				{this.state.loader ? (
					<ActivityIndicator color="#fff" size="large" style={{ margin: 30 }} />
				) : (
					<View key={item.key} style={styles.item}>
						<TouchableOpacity
							onPress={() =>
								this.props.navigation.navigate("Details", {
									id: item.id,

									imageUrl: item.imageUrl,
									description: item.description,
									video_url: item.video_url,
								})
							}
						>
							<Image
								title={item.title}
								style={styles.img}
								source={item.imageUrl}
							></Image>
							<Text style={styles.title}>{item.title}</Text>
						</TouchableOpacity>
					</View>
				)}
			</View>
		);
	};

	render() {
		return (
			<SafeAreaView style={styles.container}>
				<StatusBar backgroundColor="#383d42" barStyle="light-content" />
				<ScrollView>
					<Text style={styles.header}>Stretch</Text>
					<View style={{ backgroundColor: "#131214" }}>
						<FlatList
							style={styles.margins}
							showsHorizontalScrollIndicator={false}
							horizontal={true}
							data={this.state.data}
							renderItem={({ item }) => this.renderItem(item)}
							keyExtractor={(item) => item.key}
						/>

						<Text style={styles.header}>Chest</Text>
						<FlatList
							style={styles.margins}
							ListHeaderComponent={this.HeaderItem}
							showsHorizontalScrollIndicator={false}
							horizontal={true}
							data={this.state.data2}
							renderItem={({ item }) => this.renderItem(item)}
							keyExtractor={(item) => item.key}
						/>
						<Text style={styles.header}>Back</Text>
						<FlatList
							style={styles.margins}
							showsHorizontalScrollIndicator={false}
							horizontal={true}
							data={this.state.data3}
							renderItem={({ item }) => this.renderItem(item)}
							keyExtractor={(item) => item.key}
						/>
						<Text style={styles.header}>Biceps</Text>
						<FlatList
							style={styles.margins}
							showsHorizontalScrollIndicator={false}
							horizontal={true}
							data={this.state.data4}
							renderItem={({ item }) => this.renderItem(item)}
							keyExtractor={(item) => item.key}
						/>
						<Text style={styles.header}>Shoulders</Text>
						<FlatList
							style={styles.margins}
							showsHorizontalScrollIndicator={false}
							horizontal={true}
							data={this.state.data5}
							renderItem={({ item }) => this.renderItem(item)}
							keyExtractor={(item) => item.key}
						/>
						<Text style={styles.header}>Legs</Text>
						<FlatList
							style={styles.margins}
							showsHorizontalScrollIndicator={false}
							horizontal={true}
							data={this.state.data6}
							renderItem={({ item }) => this.renderItem(item)}
							keyExtractor={(item) => item.key}
						/>
						<Text style={styles.header}>Abs</Text>
						<FlatList
							style={styles.margins}
							showsHorizontalScrollIndicator={false}
							horizontal={true}
							data={this.state.data7}
							renderItem={({ item }) => this.renderItem(item)}
							keyExtractor={(item) => item.key}
						/>
						<Text style={styles.header}>Cardio</Text>
						<FlatList
							style={styles.margins}
							showsHorizontalScrollIndicator={false}
							horizontal={true}
							data={this.state.data8}
							renderItem={({ item }) => this.renderItem(item)}
							keyExtractor={(item) => item.key}
						/>
					</View>
				</ScrollView>
			</SafeAreaView>
		);
	}
}
export default HomeScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},

	item: {
		marginBottom: 30,

		marginTop: 30,

		marginLeft: 15,
		marginRight: 15,
	},
	img: {
		width: 220,
		height: 220,

		borderRadius: 30,
	},

	header: {
		color: "#f4f2f4",
		backgroundColor: "#383d42",
		marginTop: 15,
		padding: 10,
		paddingLeft: 15,
		fontSize: 23,
		fontFamily: "opensans-bold",
		letterSpacing: 3,
	},
	title: {
		paddingTop: 10,
		fontSize: 20,
		fontFamily: "opensans-regular",
		textAlign: "center",
		color: "#f4f2f4",
		letterSpacing: 1,
	},
});
