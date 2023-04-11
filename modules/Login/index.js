import React, { useState } from "react";
import { useRouter } from "next/router";
import AuthService from "@root/services/auth";
import { Button, TextField } from "@mui/material";

import styles from './styles.module.scss';

function Login() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: 'mrusmanali95@gmail.com',
    password: 'Sp@289bb'
  });

  const onChangeInput = (key, value) => {
    setFormData({...formData, [key]: value});
  }

  const onClickButton = () => {
    AuthService.login(formData?.email, formData?.password)
    .then(() => {
      let backUrl = (router.query.back) ? router.query.back : '/admin';
      router.replace(backUrl);
    })
    .catch(error=>console.log(error));
  }

  return (
    <div className={styles.login}>
      <div className={styles.login_container}>
        <div className="us_row">
          <div className="us_small_24 us_columns us_mb25">
            <TextField 
              fullWidth 
              label="email" 
              value={formData?.email ? formData?.email : ''}
              onChange={(event) => onChangeInput('email', event.target.value)}
            />
          </div>
          <div className="us_small_24 us_columns us_mb25">
            <TextField 
              fullWidth 
              type="password" 
              label="password" 
              value={formData?.password ? formData?.password : ''}
              onChange={(event) => onChangeInput('password', event.target.value)}
            />
          </div>
          <div className="us_small_24 us_columns us_mb25">
            <Button onClick={onClickButton} fullWidth variant="contained">Sign In</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
