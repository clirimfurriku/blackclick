import { createContext, ReactNode, useEffect, useState } from "react";

import axios from "axios";

import authConfig from "./../configs/auth";

import {
  AuthValuesType,
  ErrCallbackType,
  LoginParams,
  UserDataType,
} from "./types";
import { useNavigate } from "react-router-dom";

// ** Defaults
const defaultProvider: AuthValuesType = {
  user: null,
  loading: true,
  setUser: () => null,
  setLoading: () => Boolean,
  isInitialized: false,
  login: () => Promise.resolve(),
  logout: () => Promise.resolve(),
  setIsInitialized: () => Boolean,
};

type Props = {
  children: ReactNode;
};

const AuthProvider = ({ children }: Props) => {
  // ** States
  const [user, setUser] = useState<UserDataType | null>(defaultProvider.user);
  const [loading, setLoading] = useState<boolean>(defaultProvider.loading);
  const [isInitialized, setIsInitialized] = useState<boolean>(
    defaultProvider.isInitialized
  );

  let navigate = useNavigate();

  useEffect(() => {
    const initAuth = async (): Promise<void> => {
      setIsInitialized(true);
      const storedToken = window.localStorage.getItem(
        authConfig.storageTokenKeyName
      )!;
      if (storedToken) {
        setLoading(true);
        await axios
          .get(authConfig.meEndpoint, {
            headers: {
              Authorization: "Bearer " + storedToken,
            },
          })
          .then(async (response) => {
            setLoading(false);
            setUser({ ...response.data });
          })
          .catch(() => {
            // TODO: Try refresh token
            localStorage.removeItem("userData");
            localStorage.removeItem("refreshToken");
            localStorage.removeItem("accessToken");
            setUser(null);
            setLoading(false);
          });
      } else {
        setLoading(false);
      }
    };
    initAuth();
  }, []);

  const handleLogin = (
    params: LoginParams,
    errorCallback?: ErrCallbackType
  ) => {
    axios
      .post(authConfig.loginEndpoint, params)
      .then(async (res) => {
        window.localStorage.setItem(
          authConfig.storageTokenKeyName,
          res.data.access
        );
        window.localStorage.setItem(
          authConfig.storageRefreshTokenKeyName,
          res.data.refresh
        );
      })
      .then(() => {
        axios
          .get(authConfig.meEndpoint, {
            headers: {
              Authorization:
                "Bearer " +
                window.localStorage.getItem(authConfig.storageTokenKeyName)!,
            },
          })
          .then((response) => {
            setUser({ ...response.data });
            window.localStorage.setItem(
              "userData",
              JSON.stringify(response.data)
            );

            const redirectURL = "/";

            navigate(redirectURL);
          })
          .catch((err) => {
            if (errorCallback) errorCallback(err);
          });
      })
      .catch((err) => {
        if (errorCallback) errorCallback(err);
      });
  };

  const handleLogout = () => {
    setUser(null);
    setIsInitialized(false);
    window.localStorage.removeItem("userData");
    window.localStorage.removeItem(authConfig.storageTokenKeyName);
    window.localStorage.removeItem(authConfig.storageRefreshTokenKeyName);
    navigate("/login");
  };

  const values = {
    user,
    loading,
    setUser,
    setLoading,
    isInitialized,
    setIsInitialized,
    login: handleLogin,
    logout: handleLogout,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

const AuthContext = createContext(defaultProvider);

export { AuthContext, AuthProvider };
