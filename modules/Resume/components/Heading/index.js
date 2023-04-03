import React from "react";

import styles from './styles.module.scss';

function Heading({value}) {
  return <h3 className={styles.heading}>{value}</h3>;
}

export default Heading;
