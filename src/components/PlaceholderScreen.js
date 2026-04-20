import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { AppScreen } from "./AppScreen";
import { colors, layout, typography } from "../theme";

export function PlaceholderScreen({ title }) {
  return (
    <AppScreen>
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    marginHorizontal: layout.screenMargin,
    justifyContent: "center",
  },
  title: {
    ...typography.head01Sb,
    color: colors.gray09,
    textAlign: "center",
  },
});
