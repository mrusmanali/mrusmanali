import clsx from "clsx";
import WithAuth from "@root/common/WithAuth";
import { Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import ArticlesService from "@root/services/articles";

import styles from './styles.module.scss';

function Admin() {
  const [formData, setFormData] = useState({});

  const onChangeInput = (key, data) => {
    setFormData({...formData, [key]: data});
  }

  const onPressSubmit = () => {

    ArticlesService.createArticle(formData)
    .then(result => {
      console.log(result);
    })
    .catch(error => {
      console.log(error)
    })
  }

  return (
    <div className={clsx(styles.admin, "us_pt20", "us_pb20")}>
      <div className="us_row us_small_p10">
        <div className="us_small_24 us_columns us_mb25">
          <TextField 
            fullWidth
            label="Title" 
            value={formData?.title ? formData?.title : ''} 
            onChange={(event) => onChangeInput('title', event.target.value)}
          />
        </div>
        <div className="us_small_14 us_columns us_mb25">
          <TextField 
            fullWidth
            label="Banner" 
            value={formData?.banner ? formData?.banner : ''} 
            onChange={(event) => onChangeInput('banner', event.target.value)}
          />
        </div>
        <div className="us_small_5 us_columns us_mb25">
          <TextField 
            fullWidth
            label="Author" 
            value={formData?.author ? formData?.author : ''} 
            onChange={(event) => onChangeInput('author', event.target.value)}
          />
        </div>
        
        <div className="us_small_5 us_columns us_mb25">
          <TextField 
            fullWidth
            label="Category" 
            value={formData?.category ? formData?.category : ''} 
            onChange={(event) => onChangeInput('category', event.target.value)}
          />
        </div>
        <div className="us_small_24 us_columns us_mb25">
          <TextField 
            fullWidth
            multiline
            rows={9}
            label="Content" 
            value={formData?.content ? formData?.content : ''} 
            onChange={(event) => onChangeInput('content', event.target.value)}
          />
        </div>
        <div className="us_small_24 us_columns">
          <Button onClick={onPressSubmit} fullWidth variant="contained">Submit</Button>
        </div>
      </div>
    </div>
  );
}

export default WithAuth(Admin);
