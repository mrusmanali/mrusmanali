import React from "react";
import { Grid } from "@mui/material";
import Layout from "@root/common/Layout";

import styles from './styles.module.scss';
import IntroBlock from "./components/IntroBlock";
import CatLinks from "./components/CatLinks";
import ArticleMini from "@root/common/ArticleMini";
import Grid2 from "@mui/material/Unstable_Grid2";

function BlogHome() {
  return (
    <Layout>
      <div className="us_row us_small_p20">
        <div className="us_columns us_xlarge_17 us_large_16">
          <div className="us_row us_small_p20 us_mt40">
            <div className="us_columns us_small_24 us_mb70"><ArticleMini variant="hero" /></div>
            <div className="us_columns us_small_24 us_mb70"><ArticleMini /></div>
            <div className="us_columns us_small_24 us_mb70"><ArticleMini /></div>
          </div>
        </div>
        <div className="us_columns us_xlarge_7 us_large_8">
          <div className="cs_small_24 us_columns us_mt50 us_mb50"><IntroBlock /></div>
          <div className="cs_small_24 us_columns"><CatLinks /></div>
        </div>
      </div>
    </Layout>
  );
}

export default BlogHome;
