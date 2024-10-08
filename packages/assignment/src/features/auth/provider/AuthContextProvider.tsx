import { useState } from "react";
import { type User, AuthContext } from "../store/AuthContext";
import { useNotificationContext } from "../../notification/hook/useNotificationContext";
import { useMemo } from "../../../@lib";

type Props = {
  children: React.ReactNode;
};

export default function AuthContextProvider({ children }: Props) {
  const { addNotification } = useNotificationContext();
  const [user, setUser] = useState<User | null>(null);

  const login = (email: string) => {
    setUser({ id: 1, name: "홍길동", email });
    addNotification("성공적으로 로그인되었습니다", "success");
  };

  const logout = () => {
    setUser(null);
    addNotification("로그아웃되었습니다", "info");
  };

  const authContextValue = useMemo(() => {
    return { user, login, logout };
  }, [user]);

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
}
