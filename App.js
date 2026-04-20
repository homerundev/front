import React, { useState } from "react";

import { LoginScreen, SignupScreen } from "./src/screens";

export default function App() {
  const [screen, setScreen] = useState("login");

  if (screen === "signup") {
    return <SignupScreen onBackPress={() => setScreen("login")} />;
  }

  return <LoginScreen onSignupPress={() => setScreen("signup")} />;
}
