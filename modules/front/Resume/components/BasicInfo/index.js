import { IconAt, IconCalendarEvent, IconMapPin, IconPhone } from "@tabler/icons-react";
import clsx from "clsx";
import React from "react";
import Heading from "../Heading";

import styles from './styles.module.scss';

function BasicInfo() {
  return (
    <div className={styles.address}>
      <Heading value="Details" />

      <div className={clsx(styles.infoblock, 'br_mb12')}>
        <IconCalendarEvent size={20} stroke={1.8} className={styles.infoblock_icon} />
        <p className={styles.infoblock_text}>04/05/1989</p>
      </div>

      <div className={clsx(styles.infoblock, 'br_mb12')}>
        <IconPhone size={20} stroke={1.8} className={styles.infoblock_icon} />
        <span className={styles.infoblock_text}>+971 55 8863814</span>
      </div>

      <div className={clsx(styles.infoblock, 'br_mb12')}>
        <IconAt size={20} stroke={1.8} className={styles.infoblock_icon} />
        <a className={styles.infoblock_link} href="mailto:mrusmanali95@gmail.com" >mrusmanali95@gmail.com</a>
      </div>

      <div className={clsx(styles.infoblock, 'br_mb12')}>
        <IconMapPin size={20} stroke={1.8} className={styles.infoblock_icon} />
        <p className={styles.infoblock_text}>Apt 805, Hassani 23, Nad Al Hamar</p>
      </div>
    </div>
  );
}

export default BasicInfo;
