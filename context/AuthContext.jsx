import { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUser = async () => {
      try {
        const storedUser = await AsyncStorage.getItem("user");
        if (storedUser) {
          setUser(JSON.parse(storedUser));
        }
      } catch (err) {
        console.error("Error loading user:", err);
      } finally {
        setLoading(false);
      }
    };
    loadUser();
  }, []);

  const registerNewUser = async (userData) => {
    try {
      const existingUser = await AsyncStorage.getItem("user");
      if (existingUser) {
        return { success: false, message: "User already exists" };
      }
      await AsyncStorage.setItem("user", JSON.stringify(userData));
      setUser(userData);
      return { success: true, message: "Registration successful" };
    } catch (err) {
      console.error("Register error:", err);
      return { success: false, message: "Error registering user" };
    }
  };

  const loginUser = async (email, password) => {
    try {
      const storedUser = await AsyncStorage.getItem("user");
      if (!storedUser) return { success: false, message: "User not found" };

      const parsed = JSON.parse(storedUser);
      if (parsed.email === email && parsed.password === password) {
        setUser(parsed);
        return { success: true, message: "Login successful" };
      } else {
        return { success: false, message: "Invalid credentials" };
      }
    } catch (err) {
      console.error("Login error:", err);
      return { success: false, message: "Something went wrong" };
    }
  };

  const logoutUser = async () => {
    await AsyncStorage.removeItem("user");
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ user, setUser, logoutUser, loginUser, registerNewUser, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
};
