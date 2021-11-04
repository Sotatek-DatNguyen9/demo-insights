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
                      src="https://media.jobslab.io/logo/jobslab_white.png"
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
            <img src="https://media.jobslab.io/logo/jobslab_white.png"></img>
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
