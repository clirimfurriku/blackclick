import { useState } from "react";
import { Api } from "../apiClient/Api";
import authConfig from "../configs/auth";

const useClient = () => {
  const [client, setClient] = useState<Api | undefined>(() => {
    const storedToken = window.localStorage.getItem(
      authConfig.storageTokenKeyName
    );
    if (storedToken) {
      return new Api({
        baseUrl: authConfig.baseApiUrl,
        baseApiParams: {
          format: "json",
          headers: { Authorization: "Bearer " + storedToken },
        },
      });
    }
  });

  return client;
};

export default useClient;
