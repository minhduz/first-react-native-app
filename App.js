import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import { UserContext } from "./UserContext";
import StackNavigation from "./StackNavigation";

export default function App() {
  return (
    <>
      <UserContext>
        <StackNavigation />
      </UserContext>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
