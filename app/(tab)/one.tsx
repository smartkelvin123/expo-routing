import { View, Text, Button } from "react-native";
import React from "react";
import { Link } from "expo-router";

const One = () => {
  return (
    <View>
      <Link href={"/"} replace asChild>
        <Button title="Logout" />
      </Link>
    </View>
  );
};

export default One;
