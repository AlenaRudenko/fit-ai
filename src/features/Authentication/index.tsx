import { Button, FormControl, TextField } from "@mui/material";
import { useStore } from "../../hooks/useStore";
import { ChangeEvent, useState } from "react";
import { observer } from "mobx-react";
import { useNavigate } from "react-router";
import styles from "./index.module.scss";

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
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.form}>
          <TextField
            value={userLogin}
            helperText="set your login"
            onChange={handleChangeLogin}
          />
          <TextField
            value={password}
            helperText="set your password"
            onChange={handleChangePassword}
          />
          <Button variant="contained" onClick={handleData}>
            Log in
          </Button>{" "}
        </div>
      </div>
    </div>
  );
});

export default AuthenticationPage;
