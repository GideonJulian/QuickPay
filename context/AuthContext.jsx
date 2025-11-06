import { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadUser = async () => {
      try {
        const storedUser = await AsyncStorage.getItem("user");
        if (storedUser) {
          setUser(JSON.parse(storedUser));
        }
      } catch (err) {
        throw err;
      } finally {
        setIsLoading(false);
      }
    };
    loadUser();
  }, []);

  const registerNewUser = async (userData) => {
    try {
      await AsyncStorage.setItem("user", JSON.stringify(userData));
      setUser(userData);
    } catch (err) {
      throw err;
    }
  };

  const loginUser = async (email, password) => {
    try {
      const storedUser = await AsyncStorage.getItem("user");
      if (!storedUser) return { success: false, message: "User Not Found " };

      const parsed = JSON.parse(storedUser);
      if (parsed.email === email && parsed.password === password) {
        setUser(parsed);
        return { success: true, message: "Login Successful" };
      } else {
        return { success: false, message: "Invalid Credentials" };
      }
    } catch {}
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
