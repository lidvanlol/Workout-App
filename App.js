import WelcomeScreen from "./src/screens/WelcomeScreen";
import { useState } from "react";
import * as React from "react";

import { AppLoading } from "expo";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as Font from "expo-font";
import HomeScreen from "./src/screens/HomeScreen";
import DetailsScreen from "./src/screens/DetailsScreenMain";

const Stack = createStackNavigator();

const getFonts = () => {
	return Font.loadAsync({
		"opensans-regular": require("./assets/Fonts/OpenSans-Regular.ttf"),
		"opensans-bold": require("./assets/Fonts/OpenSans-Bold.ttf"),
	});
};
function App() {
	const [fontsLoaded, setFOntsLoaded] = useState(false);
	if (fontsLoaded) {
		return (
			<>
				<NavigationContainer>
					<Stack.Navigator>
						<Stack.Screen
							name="Welcome"
							component={WelcomeScreen}
							options={{
								headerShown: false,
							}}
						/>
						<Stack.Screen
							name="Home"
							component={HomeScreen}
							options={{
								headerShown: false,
							}}
						/>

						<Stack.Screen
							name="Details"
							options={{
								title: "Excersise Details",
								headerStyle: {
									backgroundColor: "#383d42",
								},
								headerTintColor: "#fff",
							}}
							component={DetailsScreen}
						/>
					</Stack.Navigator>
				</NavigationContainer>
			</>
		);
	} else {
		return (
			<AppLoading startAsync={getFonts} onFinish={() => setFOntsLoaded(true)} />
		);
	}
}

export default App;
