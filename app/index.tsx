import { Link, useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";

export default function Page() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Button onPress={() => router.push("/register")} title="open register" />

      <Link href={"/register"} asChild>
        <Button title="open register with link" />
      </Link>
      <Link href={"/one"} replace asChild>
        <Button title="open login" />
      </Link>
    </View>
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
