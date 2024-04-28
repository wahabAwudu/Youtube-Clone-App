import { View, SafeAreaView, Platform, StatusBar } from "react-native";

type Props = {
  style?: Object;
  className?: string;
  children: any;
};
const AppView = (props: Props) => {
  return Platform.OS === "android" ? (
    <View
      style={{ paddingTop: StatusBar.currentHeight, ...props.style }}
      className={props.className}
    >
      {props.children}
    </View>
  ) : Platform.OS === "ios" ? (
    <SafeAreaView style={props.style} className={props.className}>
      {props.children}
    </SafeAreaView>
  ) : null;
};

export default AppView;
