import React from "react";
import { map } from "lodash";
import ExpBlock from "./components/ExpBlock";

import styles from './styles.module.scss';
import data from './data';
import Heading from "../Heading";

function Experience() {
  return (
    <div className={styles.experience}>
      <Heading value="Experience" />
      <div className={styles.experience_content}>
        {map(data, item => {
          return <div key={item?.key} className={styles.experience_block}><ExpBlock data={item} /></div>
        })}
      </div>
    </div>
  );
}

export default Experience;
