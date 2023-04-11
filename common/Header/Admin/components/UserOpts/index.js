import React from "react";
import { useRouter } from "next/router";
import AuthService from "@root/services/auth";
import { IconPower } from "@tabler/icons-react";

import styles from './styles.module.scss';

function UserOpts() {
  const router = useRouter();

  const onClickLogout = () => {
    AuthService.logout()
  }

  return (
    <div className={styles.useropts}>
      <div className={styles.useropts_content}>
        <span className={styles.useropts_greet}>Welcome</span>
        <span className={styles.useropts_name}>Usman Ali (Admin)</span>
      </div>
      <a onClick={onClickLogout} className={styles.useropts_thumb}>
        <IconPower className={styles.useropts_icon} />
      </a>
    </div>
  );
}

export default UserOpts;
