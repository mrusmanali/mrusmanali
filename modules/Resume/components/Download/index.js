import React from 'react';
import { jsPDF } from "jspdf";
import { IconDownload } from '@tabler/icons-react';

import styles from './styles.module.scss';

function Download() {
  
  const onClickHandle = () => {
    const doc = new jsPDF();
    var elementHTML = document.querySelector("#printable");
    doc.html(elementHTML, {
      callback: (pdf) => {
        pdf.save('Usman Ali Resume.pdf')
      },
      x: 10,
      y: 10,
      width: 1152,
      windowWidth: 1536
    });
  }

  return (
    <div onClick={onClickHandle} className={styles.download}>
      <IconDownload className={styles.download_icon} size={20} stroke={2} />
      <span className={styles.download_text}>Download</span>
    </div>
  )
}

export default Download