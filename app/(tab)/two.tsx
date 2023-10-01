import { View, Text, Button } from "react-native";
import React from "react";
import { Link } from "expo-router";

const Two = () => {
  return (
    <View>
      <Link
        href={"/"}
        //    replace asChild
      >
        <Button title="login" />
      </Link>
    </View>
  );
};

export default Two;
