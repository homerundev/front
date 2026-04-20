import React from "react";
import { Pressable, StyleSheet, View } from "react-native";

import GoogleLogo from "../../assets/images/google.svg";
import KakaoTalkLogo from "../../assets/images/kakaotalk.svg";
import NaverLogo from "../../assets/images/naver.svg";
import { colors } from "../theme";

export function SocialLoginButtons() {
  return (
    <View style={styles.socials}>
      <Pressable accessibilityLabel="구글로 로그인" style={styles.google}>
        <GoogleLogo height={32} width={32} />
      </Pressable>
      <Pressable accessibilityLabel="네이버로 로그인" style={styles.naver}>
        <NaverLogo height={32} width={32} />
      </Pressable>
      <Pressable accessibilityLabel="카카오로 로그인" style={styles.kakao}>
        <KakaoTalkLogo height={34} width={34} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  socials: {
    marginTop: 24,
    flexDirection: "row",
    justifyContent: "center",
    gap: 36,
  },
  google: {
    width: 54,
    height: 54,
    borderRadius: 27,
    borderWidth: 1,
    borderColor: colors.socialBorder,
    backgroundColor: colors.white,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  naver: {
    width: 54,
    height: 54,
    borderRadius: 27,
    backgroundColor: colors.naver,
    alignItems: "center",
    justifyContent: "center",
  },
  kakao: {
    width: 54,
    height: 54,
    borderRadius: 27,
    backgroundColor: colors.kakao,
    alignItems: "center",
    justifyContent: "center",
  },
});
