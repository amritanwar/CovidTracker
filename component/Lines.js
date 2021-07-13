import React,{useEffect, useState } from 'react';

import { Line } from 'react-chartjs-2';
const Lines = () =>{
   


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
        <Line
            data= {{
                labels: ['recoverd','active','deaths','confirmed'],
                datasets: [{
                    label: '# of votes',
                    data: [Data.recovered,Data.active,Data.deaths,Data.confirmed],
                    
                    backgroundColor: [
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                    ],
               
                    borderColor: [
                    'rgba(54, 162, 235, 1)',
                    'rgba(255,99,132,1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 206, 86, 1)',
                    ],  
                    }]
                    }}
            height= {400}
            width= {400}
            options = {{
                maintainAspectRatio: false,
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }}
            
           
            />
            
        </div>
    )
}
export default Lines;