import clsx from "clsx";
import React from "react";
import Link from "next/link";
import menuItems from "@root/menu";
import { includes, map } from "lodash";
import { useRouter } from "next/router";
import LogoLink from "@root/common/LogoLink";
import { Stack, Typography } from "@mui/material";

import styles from "./styles.module.scss";

function Sidebar() {
  const router = useRouter();

  const isActive = (key) => {
    return includes(router?.asPath, key)
  }

  return (
    <div className={styles.sidebar}>
      <div className={clsx(styles.sidebar_logo, "us_mb30")}>
        <LogoLink />
      </div>
      <ul className={styles.sidebar_list}>
        {map(menuItems, (item) => {
          return (
            <li
              key={item?.key}
              className={clsx(
                styles.sidebar_item,
                isActive(item?.link) && styles.active
              )}
            >
              <Link href={item?.link} className={styles.sidebar_link}>
                <Stack direction="row" alignItems="center" spacing={2}>
                  {item?.icon}
                  <Typography className={styles.sidebar_text}>
                    {item?.title}
                  </Typography>
                </Stack>
                {item?.chevron}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Sidebar;
