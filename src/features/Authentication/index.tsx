import { Button, Input } from "@mui/material";
import { useStore } from "../../hooks/useStore";
import { ChangeEvent, useState } from "react";
import { observer } from "mobx-react";
import { useNavigate } from "react-router";

const AuthenticationPage = observer(() => {
  const [userLogin, setUserLogin] = useState("");
  const [password, setPassword] = useState("");
  const { rootStore } = useStore();
  const {
    authStore: { login },
  } = rootStore;
  const handleChangeLogin = (
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setUserLogin(e.target.value);
  };
  const navigate = useNavigate();

  const handleChangePassword = (
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setPassword(e.target.value);
  };

  const handleData = () => {
    try {
      login({ email: userLogin, password });
      navigate("/chat");
    } catch (error) {
      throw error;
    }
  };
  return (
    <div>
      <Input
        value={userLogin}
        placeholder="set your login"
        onChange={handleChangeLogin}
      />
      <Input
        value={password}
        placeholder="set your login"
        onChange={handleChangePassword}
      />
      <Button onClick={handleData}>Log in</Button>
    </div>
  );
});

export default AuthenticationPage;
