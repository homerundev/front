import React from "react";
import { StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";

import { colors, layout } from "../theme";

export function AppScreen({ children }) {
  return (
    <View style={styles.screen}>
      <StatusBar style="dark" backgroundColor={colors.white} />
      <View style={styles.phone}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.gray03,
  },
  phone: {
    flex: 1,
    alignSelf: "center",
    width: "100%",
    maxWidth: layout.maxPhoneWidth,
    backgroundColor: colors.white,
  },
});
