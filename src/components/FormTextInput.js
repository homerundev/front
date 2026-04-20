import React from "react";
import { StyleSheet, TextInput } from "react-native";

import { colors, typography } from "../theme";

export function FormTextInput(props) {
  return (
    <TextInput
      placeholderTextColor={colors.gray06}
      style={styles.input}
      {...props}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    height: 54,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: colors.gray04,
    borderRadius: 8,
    backgroundColor: colors.gray02,
    color: colors.gray09,
    ...typography.body01Sb,
  },
});
