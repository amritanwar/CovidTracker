import React,{useEffect, useState } from 'react';

import Card from './Card';
import './Card.css';

const Cards = () =>{
    const [Data,setData] = useState([]);
    const getcoviddata = async()=>{
        try{
            const res =  await fetch(' https://api.covid19india.org/data.json');
            console.log(res);
          const actualdata =  await res.json();
          console.log(actualdata.statewise[0]);
          setData(actualdata.statewise[0]);
        } catch (err){
            console.log(err);
        }
     
    }
    useEffect(()=>{
        getcoviddata();
       },[]);
   
    return(
        <div>
        <div className = 'container' spacing={3} justify="center">
        

        
        <Card small='our' large = 'Country' value = 'INDIA'  />
        <Card small='total' large = 'Recovered' value = {Data.recovered}  />
        <Card small='total' large = 'Confirmed' value = {Data.confirmed}  />
        <Card small='total' large = 'Deaths' value = {Data.deaths}  />
        <Card small='total' large = 'Active' value = {Data.active}  />
        <Card small='last' large = 'Update' value = {Data.lastupdatedtime}  />

        </div>
        </div>
    )
}
 
export default Cards;