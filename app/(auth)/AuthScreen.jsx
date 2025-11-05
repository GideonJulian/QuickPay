import React, { useState, useRef, useEffect, use } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Animated,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import GoogleIcon from "../../components/icon/GoogleIcon";
import { useAuth } from "../../app/_layout";
export default function AuthScreen() {
  const [activeTab, setActiveTab] = useState("login");
  const [showPassword, setShowPassword] = useState(false);
  const { setUser } = useAuth();
  // Fade animation setup
  const fadeAnim = useRef(new Animated.Value(1)).current;

  const handleTabChange = (tab) => {
    if (tab === activeTab) return;
    // Animate fade out, switch tab, then fade in
    Animated.sequence([
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 150,
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 150,
        useNativeDriver: true,
      }),
    ]).start(() => setActiveTab(tab));
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={styles.scrollContainer}
      >
        <View style={styles.container}>
          <Text style={styles.logo}>QuickPay</Text>
          <Text style={styles.welcomeText}>
            {activeTab === "login" ? "Welcome Back" : "Create Account"}
          </Text>

          {/* Tabs */}
          <View style={styles.tabContainer}>
            <TouchableOpacity
              style={[styles.tab, activeTab === "login" && styles.activeTab]}
              onPress={() => handleTabChange("login")}
            >
              <Text
                style={[
                  styles.tabText,
                  activeTab === "login" && styles.activeTabText,
                ]}
              >
                Login
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.tab, activeTab === "signup" && styles.activeTab]}
              onPress={() => handleTabChange("signup")}
            >
              <Text
                style={[
                  styles.tabText,
                  activeTab === "signup" && styles.activeTabText,
                ]}
              >
                Signup
              </Text>
            </TouchableOpacity>
          </View>

          {/* Animated Form */}
          <Animated.View style={[styles.form, { opacity: fadeAnim }]}>
            {activeTab === "signup" && (
              <>
                <Text style={styles.label}>Full Name</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Enter your full name"
                  placeholderTextColor="#888"
                />
              </>
            )}

            <Text style={styles.label}>Email or Phone Number</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your email or phone"
              placeholderTextColor="#888"
            />

            <Text style={styles.label}>Password</Text>
            <View style={styles.passwordContainer}>
              <TextInput
                style={[styles.input, { flex: 1, borderWidth: 0 }]}
                secureTextEntry={!showPassword}
                placeholder="Enter your password"
                placeholderTextColor="#888"
              />
            </View>

            {activeTab === "login" && (
              <TouchableOpacity style={styles.forgotBtn}>
                <Text style={styles.forgotText}>Forgot Password?</Text>
              </TouchableOpacity>
            )}

            <TouchableOpacity
              style={styles.mainButton}
              onPress={() => {
                // Simulate authentication or demo login
                setUser({ name: "Demo User", email: "demo@example.com" });
              }}
            >
              <Text style={styles.mainButtonText}>
                {activeTab === "login" ? "Log In" : "Create Account"}
              </Text>
            </TouchableOpacity>

            <View style={styles.divider}>
              <View style={styles.line} />
              <Text style={styles.orText}>or continue with</Text>
              <View style={styles.line} />
            </View>

            <TouchableOpacity style={styles.googleButton}>
              <GoogleIcon size={20} />
              <Text style={styles.googleText}>Continue with Google</Text>
            </TouchableOpacity>

            <Text style={styles.termsText}>
              By continuing, you agree to QuickPay’s{" "}
              <Text style={styles.link}>Terms of Service</Text> and{" "}
              <Text style={styles.link}>Privacy Policy</Text>.
            </Text>
          </Animated.View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    paddingVertical: 60,
    paddingHorizontal: 24,
    backgroundColor: "#0b0b0b",
  },

  container: {
    flex: 1,
    alignItems: "center",
  },

  logo: {
    fontSize: 36,
    fontWeight: "800",
    color: "#fff",
    textAlign: "center",
    marginBottom: 8,
  },

  welcomeText: {
    color: "#bcbcbc",
    fontSize: 16,
    textAlign: "center",
    marginBottom: 35,
  },

  // Tabs
  tabContainer: {
    flexDirection: "row",
    backgroundColor: "#1a1a1a",
    borderRadius: 12,
    overflow: "hidden",
    marginBottom: 32,
    width: "100%",
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    alignItems: "center",
  },
  activeTab: {
    backgroundColor: "#4f46e5",
  },
  tabText: {
    color: "#aaa",
    fontSize: 16,
    fontWeight: "500",
  },
  activeTabText: {
    color: "#fff",
    fontWeight: "600",
  },

  // Form
  form: {
    width: "100%",
  },
  label: {
    color: "#bcbcbc",
    fontSize: 14,
    marginBottom: 6,
    marginTop: 4,
  },
  input: {
    width: "100%",
    backgroundColor: "#161616",
    borderColor: "#2c2c2c",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 12,
    color: "#fff",
    marginBottom: 16,
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#161616",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#2c2c2c",
    marginBottom: 16,
  },

  forgotBtn: {
    alignSelf: "flex-end",
    marginBottom: 20,
  },
  forgotText: {
    color: "#4f46e5",
    fontWeight: "500",
  },

  // Buttons
  mainButton: {
    backgroundColor: "#4f46e5",
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: "center",
    marginBottom: 24,
    shadowColor: "#4f46e5",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
  },
  mainButtonText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 16,
  },

  // Divider
  divider: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#2c2c2c",
  },
  orText: {
    color: "#888",
    marginHorizontal: 10,
    fontSize: 13,
  },

  // Google button
  googleButton: {
    borderWidth: 1,
    borderColor: "#2c2c2c",
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
    marginBottom: 24,
  },
  googleText: {
    color: "#fff",
    fontWeight: "500",
    fontSize: 15,
  },

  // Terms
  termsText: {
    textAlign: "center",
    color: "#777",
    fontSize: 12,
    marginTop: 4,
    lineHeight: 18,
  },
  link: {
    color: "#4f46e5",
    fontWeight: "500",
  },
});
