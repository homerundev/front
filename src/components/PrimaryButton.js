import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";

import { colors, typography } from "../theme";

export function PrimaryButton({ children, style, textStyle, ...props }) {
  return (
    <Pressable style={[styles.button, style]} {...props}>
      <Text style={[styles.text, textStyle]}>{children}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 58,
    borderRadius: 29,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.main,
  },
  text: {
    ...typography.head01Sb,
    color: colors.white,
  },
});
