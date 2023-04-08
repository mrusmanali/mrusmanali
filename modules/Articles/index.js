import React from "react";
import { map } from "lodash";
import Layout from "@root/common/Layout";
import CatLinks from "./components/CatLinks";
import IntroBlock from "./components/IntroBlock";
import ArticleMini from "@root/common/ArticleMini";

import data from './data';
import styles from './styles.module.scss';

function BlogHome() {
  return (
    <Layout>
      <div className="us_row us_small_p20">
        <div className="us_columns us_medium_16">
          <div className="us_row us_small_p15 us_mt40">
            {map(data, (item, index) => {
              return (
                <div key={index} className="us_columns us_small_24 us_mb100">
                  <ArticleMini data={item} />
                </div>
              )
            })}
          </div>
        </div>
        <div className="us_columns us_medium_8">
          <div className="cs_small_24 us_columns us_mt50 us_mb50"><IntroBlock /></div>
          <div className="cs_small_24 us_columns us_mb100"><CatLinks /></div>
        </div>
      </div>
    </Layout>
  );
}

export default BlogHome;
