/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import {
  TextField,
  CircularProgress,
  TableContainer,
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import usingStyle from "./styles";
import "./styles.scss";
import StarRatings from "react-star-ratings";
const SearchInput = (props: any) => {
  const styles = usingStyle();
  const { getOnChange, defaultValue, items, type, onCheck, check,  selectObject } = props;
  console.log(items);
  return (
    <div className={styles.inputWrap}>
      <div className={styles.wrap}>
        <input
          type="text"
          placeholder="Search Company"
          className={styles.inputSearch1}
          onChange={(e) => {
            getOnChange(e.target.value, type);
          }}
        />
        {items?.length > 0 && check && (
          <div className={styles.suggestionWrap}>
            {items.map((item: any) => {
              return (
                <div className={styles.itemSearch} onClick={() => onCheck(item)}>
                  <div className={styles.imageContent}>
                    <img
                      className={styles.image}
                      src="https://nodeflair.s3.ap-southeast-1.amazonaws.com/hxhp8yPWQKDJYLD7gWJvtNvN?response-content-disposition=inline%3B%20filename%3D%22Shopee.png%22%3B%20filename%2A%3DUTF-8%27%27Shopee.png&response-content-type=image%2Fpng&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIGSW3555BNQE5HKA%2F20211102%2Fap-southeast-1%2Fs3%2Faws4_request&X-Amz-Date=20211102T112153Z&X-Amz-Expires=300&X-Amz-SignedHeaders=host&X-Amz-Signature=a8662a4d0e7a56f0c6b3aa1717d0f10e4ba0ef2f42879d71cd8b48bf776acef3"
                    ></img>
                  </div>
                  <div className={styles.content}>
                    <div className={styles.text}> {item.name}</div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
        <div className="d-flex select-item align-items-center">
          <div className="image">
            <img src="https://nodeflair.s3.ap-southeast-1.amazonaws.com/hxhp8yPWQKDJYLD7gWJvtNvN?response-content-disposition=inline%3B%20filename%3D%22Shopee.png%22%3B%20filename%2A%3DUTF-8%27%27Shopee.png&response-content-type=image%2Fpng&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIGSW3555BNQE5HKA%2F20211102%2Fap-southeast-1%2Fs3%2Faws4_request&X-Amz-Date=20211102T112153Z&X-Amz-Expires=300&X-Amz-SignedHeaders=host&X-Amz-Signature=a8662a4d0e7a56f0c6b3aa1717d0f10e4ba0ef2f42879d71cd8b48bf776acef3"></img>
          </div>
          <div className="select-content">
            <h3 className="title-name">{selectObject?.name || "Shopee"}</h3>
            <div className="start">
              {" "}
              {selectObject?.glassdoorRating/20 || "4.0"}
              <StarRatings
                rating={selectObject?.glassdoorRating/20 || 4}
                starDimension="13px"
                starSpacing="0px"
                starRatedColor="#ffe03c"
              />
              <span>(Glassdoor)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SearchInput;
