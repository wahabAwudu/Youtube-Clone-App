import { HomeScreen } from "./screens";
import AppView from "./components/AppView";
import { Text, View, useWindowDimensions } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  const scale = useWindowDimensions();
  console.log(scale);
  return (
    <SafeAreaProvider>
      <HomeScreen />
    </SafeAreaProvider>
  );
}
