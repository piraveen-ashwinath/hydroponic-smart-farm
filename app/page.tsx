//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
"use client";
import {Routes, Route, BrowserRouter as Router, useNavigate} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import { db, database } from "./firebase";
//import { database } from "./firebase";
import { getDatabase, onValue, ref, get } from "firebase/database";
import {
  getDocs,
  collection,
  addDoc,
  deleteDoc,
  updateDoc,
  doc,
  onSnapshot,
  query,
  getDoc,
  orderBy,
} from "firebase/firestore";
import { useEffect, useState } from 'react';
//import Routes from './routes';
import ReactDOM from 'react-dom';
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { CategoryScale, Chart, registerables, LinearScale, PointElement, Tooltip, Legend, TimeScale } from "chart.js";
import Link from 'next/link'
//import { Chart } from "react-google-charts";
import React from "react";
import { object } from '@angular/fire/database';
//import { LineChart, PieChart } from 'react-chartkick'
import 'chartkick/chart.js'
//mport { render } from "react-dom";
//import * as React from 'react';
//import { LineChart } from '@mui/x-charts/LineChart';
//import {Line, LineChart,  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
// Import the functions you need from the SDKs you need
Chart.register(LinearScale, PointElement, Tooltip, Legend, TimeScale);

function App() {
  
  const ph:any=[];
  const ec:any=[];
  const temp:any=[];
  const time:any=[];
  const [valList, setValList] = useState([] as any);
  const valListRef=collection(db, "sensorvalues");
  const docRef = doc(database, "sensorreadings", "SensorReadings");
  const docSnap = getDoc(docRef);
  const q = query(valListRef, orderBy("name", "asc"));
  const [valData, setValData]:any = useState([]);
/*
  useEffect(() => {
    const query = ref(database, "sensorreadings");
    return onValue(query, (snapshot) => {
      const data = snapshot.val();

      if (snapshot.exists()) {
        Object.values(data).map((sense) => {
          setUserData((userData:any) => [...userData, sense]);
        });
      }
    });
  }, []);
*/
/*
  const data = [
    ["Date", "pH values", "EC values", "Temperature"],
    [time, ph, ec, temp],
    //["2005", 4.8, 3.4, 19],
    //["2006", 6.7, 1.8, 20],
    //["2007", 7.1, 0.9, 21],
  ];
  
  const options = {
    title: "Sensor Reading Values",
    curveType: "function",
    legend: { position: "bottom" },
  };*/
/*
useEffect(()=>{
  const valListRef= ref(database,'sensorreadings');
  get(valListRef).then((snapshot)=>{
    if (snapshot.exists()){
      const valArray=Object.entries(snapshot.val()).map(([id,data])=>({
        id,
        ...data,
      }));
      setValList(valArray);
    }else{

    }
  })
})
*/


useEffect(() => {
  // Set up the onQuerySnapshot listener on a collection
  // for more info https://firebase.google.com/docs/firestore/query-data/listen#listen_to_multiple_documents_in_a_collection
  const unsubscribe = onSnapshot(query(collection(database, "sensorreadings")), (snapshot) => {
              const updatedData = snapshot.docs.map((snapshot:any) => ({
                  id: snapshot.id,
                  ...snapshot.data(),
              }));
              setValData(updatedData);
          });

      // Cleanup listener
      return () => unsubscribe();
}, []);


  useEffect(() => {
    // Set up the onQuerySnapshot listener on a collection
    // for more info https://firebase.google.com/docs/firestore/query-data/listen#listen_to_multiple_documents_in_a_collection
    const unsubscribe = onSnapshot(query(valListRef), (snapshot) => {
                const updatedValues = snapshot.docs.map((snapshot:any) => ({
                    id: snapshot.id,
                    ...snapshot.data(),
                }));
                setValList(updatedValues);
            });

        // Cleanup listener
        return () => unsubscribe();
  }, []);

  const dataPh = {
    labels: valList.map((value:any)=>(value.date)),
    datasets: [{
      label: 'pH Values',
      //data: valList.map((value:any)=>(value.phValues)),
      data: valList.map((value:any)=>(value.phValues)),
      //data:[6.5,8.9,2.3],
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1
    }],
    options: {
      scales: {
        x: {
          type: 'time',
          time:{
            unit:'day'
          }
          //distribution: 'linear',
        },
        title: {
          display: false,
        }
      }
    }
  };

  const dataEc = {
    labels: valList.map((value:any)=>(value.date)),
    datasets: [{
      label: 'EC Values',
      data: valList.map((value:any)=>(value.ecValues)),
      //data:[6.5,8.9,2.3],
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1
    }],
    options: {
      scales: {
        x: {
          type: 'time',
          time:{
            unit:'day'
          }
          //distribution: 'linear',
        },
        title: {
          display: false,
        }
      }
    }
  };

  const dataTemp = {
    //type:'line',
    labels: valList.map((value:any)=>(value.date)),
    datasets: [{
      label: 'Temperature Readings',
      data: valList.map((value:any)=>(value.tempValues)),
      //data:temp,
      //data:[6.5,8.9,2.3],
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1,
    }],
    options: {
      scales: {
        x: {
          type: 'time',
          time:{
            unit:'day'
          }
          //distribution: 'linear',
        },
        title: {
          display: false,
        }
      }
    }
  };

  const config = {
    type: 'line',
    data: dataPh,
  };

  return (
    <>
    {time.push(valList.map((value:any)=>(value.date)))}
    {ph.push(valList.map((value:any)=>(value.phValues)))}
    {ec.push(valList.map((value:any)=>(value.ecValues)))}
    {temp.push(valList.map((value:any)=>(value.tempValues)))}
    <div className='flex-cont'>
    <img src='/3d-casual-life-ecology-hand.png' alt="" width="40" height="34" className="d-inline-block align-text-top"/> 
      <h1 className='titleDashboard'>Smart Farm Dashboard</h1>
    </div>
    
      <div className='flex-container'>
      <div className="card" style={{backgroundColor:"#292928"}}>
  <img src="/levels-pipette.png" className="card-img-top-ph" alt="..." />

  <div className="card-body">
  <h3 className="card-title" style={{color:"whitesmoke"}}>pH levels</h3>
  {valData.map((data:any) => (<h1 className="phValue" style={{color:"whitesmoke"}}>{data.phread}</h1>))}
    
    <p className="card-textPH" style={{color:"whitesmoke"}}></p>
    <a href="/ph" className="btn btn-primary" style={{backgroundColor:"teal"}}>View Data Log</a>
  </div>
</div>

<div className="card" style={{backgroundColor:"#292928"}}>
  <img src='/3d-casual-life-green-leaf-and-energy.png' className="card-img-top-ec" alt="..."/>
  <div className="card-body">
  <h3 className="card-title" style={{color:"whitesmoke"}}>EC values</h3>
  {valData.map((data:any) => (<h1 className="ecValue" style={{color:"whitesmoke"}}>{data.ecread}</h1>))}
  
  <p className="card-textEC" style={{color:"whitesmoke"}}></p>
    <Link href="/ec" className="btn btn-primary" style={{backgroundColor:"teal"}}>View Data Log</Link>
  </div>
</div>

<div className="card" style={{backgroundColor:"#292928"}}>
  <img src='/morphis-glass-thermometer.png' className="card-img-top-temp" alt="..."/>
  <div className="card-body">
  <h3 className="card-title" style={{color:"whitesmoke"}}>Temperature</h3>
    {valData.map((data:any) => (<h1 className='tempValue' style={{color:"whitesmoke"}}>{data.tempread} °C</h1>))}
    
    <p className="card-textTemp" style={{color:"whitesmoke"}}></p>
    <Link href="/temp" className="btn btn-primary" style={{backgroundColor:"teal"}}>View Data Log</Link>
  </div>
</div>
</div>

<div className='flexi1'>
<div className="card1" style={{backgroundColor:"whitesmoke"}}>
<div className="card-body">
  <h3 className="card-title" style={{color:"#292928"}}>pH Values Trend Analysis</h3>
  <div className="chart1">
<Line data={dataPh}></Line>

  {/*<Chart
      chartType="LineChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
  />*/}
      
    </div>
</div>
</div>
</div>


<div className='flexi2'>
<div className="card2" style={{backgroundColor:"whitesmoke"}}>
<div className="card-body">
  <h3 className="card-title" style={{color:"#292928"}}>EC Values Trend Analysis</h3>
  <div className="chart2">
<Line data={dataEc}></Line>

  {/*<Chart
      chartType="LineChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
  />*/}
      
    </div>
</div>
</div>
</div>

<div className='flexi3'>
<div className="card3" style={{backgroundColor:"whitesmoke"}}>
<div className="card-body">
  <h3 className="card-title" style={{color:"#292928"}}>Temperature Readings Trend Analysis</h3>
  <div className="chart3">
<Line data={dataTemp}></Line>

  {/*<Chart
      chartType="LineChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
  />*/}
      
    </div>
</div>
</div>
</div>

    </>
  )
}

export default App
