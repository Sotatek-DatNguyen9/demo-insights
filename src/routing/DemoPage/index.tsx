import React,{useEffect, useState} from 'react'
import  useStyles from "./styles";
import Header from "./Header";
import Content from "./Content"
import { Container, Grid } from '@material-ui/core';
import axios from 'axios';
import Select from 'react-select'
import makeAnimated from 'react-select/animated';
import "./styles.scss";
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import Footer from './Footer';
import Glassdoor from './Highcharts/Glassdoor';
import Seniority from './Highcharts/Seniority';
import Duration from './Highcharts/Duration';
import Locations from './Highcharts/Locations';
import Diversity from './Highcharts/Diversity';
import Changes from './Highcharts/Changes';
import Funding from './Highcharts/Funding';
import Headcount from './Highcharts/Headcount';
import Hiring from './Highcharts/Hiring';
const DemoPage = ()=>{
    const options1 = {
        chart: {
          type: 'spline'
        },
        title: {
          text: 'My chart'
        },
        series: [
          {
            data: [1, 2, 1, 4, 3, 6]
          }
        ]
      };
    const options = [
        { value: 'chocolate', label: 'Glassdoor', color: <Glassdoor /> },
        { value: 'ocean', label: 'Seniority', color: <Seniority /> },
        { value: 'purple', label: 'Duration', color: <Duration />},
        { value: 'red', label: 'Locations', color: <Locations />,  },
        { value: 'orange', label: 'Diversity', color: <Diversity /> },
        { value: 'yellow', label: 'Changes', color: <Changes /> },
        { value: 'green', label: 'Funding', color: <Funding /> },
        { value: 'forest', label: 'Headcount', color: <Headcount /> },
        { value: 'slate', label: 'Hiring', color: <Hiring /> },
      ]
    const styles = useStyles();
    const [selected, setSelected] = useState<any[]>([])
    const handleChange = (selectedOption: any) => {
        setSelected(selectedOption)
    };
    console.log("selected", selected);
    
    return <div className={styles.wrapper}>
        <Header/>
        <Container>
            <div className={styles.bigTitle}>
            Search and Compare Company Insights
            </div>
            <div className={styles.mainContent}>
            <Content />
            <div className={styles.multi}>
                <Select
                    closeMenuOnSelect={false}
                    isMulti
                    value={selected}
                    options={options}
                    onChange={handleChange}
                    placeholder="Select Comparison..."
                />
            </div>
            <div className="highcharts">
                    {
                        selected && selected?.length > 0 && selected.map((item: any, index: number)=>(
                            <div  className="highcharts-item">{item.color}</div>
                        )) || options.map((item, index) => (
                            <div  className="highcharts-item">{item.color}</div>
                        ))
                    }
            </div>
            <Footer ></Footer>
        </div>
        </Container>
    </div>
}

export default DemoPage;