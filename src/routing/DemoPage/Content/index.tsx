import React, { useEffect, useState } from "react";
import SearchInput from "./SearchInput";
import useStyles from "./styles";
import axios from "axios";
const MainContent = () => {
  const styles = useStyles();
  const [valueDefaultSearch1, setValueDefaultSearch1] = useState("");
  const [valueDefaultSearch2, setValueDefaultSearch2] = useState("");
  const [idLeft, setIdLeft] = useState(1);
  const [idRight, setIdRight] = useState(2);
  const [items1, setItems1] = useState([]);
  const [items2, setItems2] = useState([]);
  const [selectObject1, setSelectObject1] = useState({

  });
  const [selectObject2, setSelectObject2] = useState({

  });
  const [checkLeft, setCheckLeft] = useState(true);
  const [checkRight, setCheckRight] = useState(true);


  const OnChangeSearch = (value: string, type: string) => {
    console.log("value" , value);
    console.log("type" , type);
    
    if (value && type === "search1") {
      setValueDefaultSearch1(value)
      getItemLeft(value)
      setCheckLeft(true);
    }
    if (value && type === "search2") {
      setValueDefaultSearch2(value)
      getItemRight(value)
      setCheckRight(true);
    }
    if(value.length === 0 && type ==="search1"){
      setCheckLeft(false)
    }
    if(value.length === 0 && type ==="search2"){
      setCheckRight(false)
    }
  };

  // useEffect(() => {
  //   setItems([])
  //   callDI
  // }, [idLeft]);
  const getItemLeft = async (item: string) => {
    const res = await fetch(
      `https://617f96b2055276001774fb44.mockapi.io/api/v2/insights/demo?page=1&limit=5&name=${item}`
    );
    const data = await res.json();
    console.log("data1", data);
    setItems1(data);
  };
  const getItemRight = async (item: string) => {
    const res = await fetch(
      `https://617f96b2055276001774fb44.mockapi.io/api/v2/insights/demo?page=1&limit=4&name=${item}`
    );
    const data = await res.json();
    console.log("data2", data);
    setItems2(data);
  };
  // useEffect(() => {
  //   const getItemLeft = async () => {
  //     const res = await fetch(
  //       `https://617f96b2055276001774fb44.mockapi.io/api/v2/insights/demo?name=${valueDefaultSearch1}`
  //     );
  //     const data = await res.json();
  //     console.log("data1", data);
  //     setValueDefaultSearch1(data);
  //   };
  //   getItemLeft();
  // }, [valueDefaultSearch1]);

  return (
    <div className={styles.headerSearch}>
      <SearchInput
        getOnChange={(value: string) => OnChangeSearch(value, "search1")}
        defaultValue={valueDefaultSearch1}
        items={items1}
        onCheck={(data: any)=>{setCheckLeft(false);setSelectObject1(data)}}
        type="search1"
        check={checkLeft}
        selectObject={selectObject1}
      />
      <SearchInput
        getOnChange={(value: string) => OnChangeSearch(value, "search2")}
        defaultValue={valueDefaultSearch2}
        items={items2}
        onCheck={(data: any)=>{setCheckRight(false);setSelectObject2(data)}}
        type="search2"
        check={checkRight} 
        selectObject={selectObject2}
      />

     
    </div>
  );
};

export default MainContent;
