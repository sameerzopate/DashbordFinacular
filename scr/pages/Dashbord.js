import React from 'react';
import {Bar}  from 'react-chartjs-2';
import './Dashbord.css'; 
import { BsThreeDots,BsFillOctagonFill } from "react-icons/bs";
import { DiCodeigniter,DiCoda } from "react-icons/di";

function chart(){ 
  
  return (
   <div className='compound'>
    <div className='home'>
        <div className='Dashbord'>
          <p>Asset Balance in</p>
          <div className='chartbar'>
              <Bar
                  data={{
                    labels: ['1','2','3','4','5', '6', '7', '8', '9', '10'],
                    datasets:[
                      {
                        label: 'Annual Projection',
                        data: [100,150,200,250,300,350,400,450,500,550],
                        backgroundColor: '#0b14b5',
                      }
                    ]
                    }}
                    height={300}
                    width={600}
                    options={{
                      maintainAspectRatio:false,
                      scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                      },
                      legend:{
                        labels:{
                          fontSize:14,
                          fontColor:'black',
                          fontFamily:'Monospace'
                        }
                      },
                      tooltips: {
                        callbacks: {
                          title:function(tooltipItem, data) {
                            return data['labels'][tooltipItem[0]['index']];
                          },
                          label: function(tooltipItem, data) {
                            return data['datasets'][0]['data'][tooltipItem['index']];
                          },
                          afterLabel: function(tooltipItem, data) {
                            var dataset = data['datasets'][0];
                            var percent = Math.round((dataset['data'][tooltipItem['index']] / dataset["_meta"][0]['total']) * 100)+'%'
                            return  percent ;
                          }
                        },
                        backgroundColor: '#1cb4f7',
                        titleFontSize: 16,
                        titleFontColor: '#0066ff',
                        bodyFontColor: '#fafeff',
                        bodyFontSize: 14,
                        displayColors: false
                      }
                    }}
              />
              
          </div>

          <div className='results'>
                <div className='box1'>
                  <div className='top-bar1'>
                    <p>Asset Balance</p>
                    <BsThreeDots/>
                  </div>
                  <div className='boxbody1'>

                      <div className='left-side1'>
                          <p className='p1'>Enter Amount</p>
                          <p className='p2'>1,20,000</p>

                          <div className='lastupdate'>
                              <p>Last Update</p>
                              <p>3pm</p>
                          </div>
                      </div>
                      <div className='rightside1'>
                          <BsFillOctagonFill/>
                      </div>
                  </div>
                </div>

                <div className='box1'>
                  <div className='top-bar1'>
                    <p>Asset Balance</p>
                    <BsThreeDots/>
                  </div>
                  <div className='boxbody1'>

                      <div className='left-side1'>
                          <p className='p1'>Enter Amount</p>
                          <p className='p2'>1,20,000</p>

                          <div className='lastupdate'>
                              <p>Last Update</p>
                              <p>3pm</p>
                          </div>
                      </div>
                      <div className='rightside1'>
                          <BsFillOctagonFill/>
                      </div>
                  </div>
                </div>

          </div>
        </div>        

        <div className='right-corner'>
           
           <div className='right-corner-box1'>
              <DiCodeigniter className='img'/>
              <p>Understanding the power of compounding!!</p>
              <button scr='#' className='Learn-Now'>Learn Now</button>
           </div>

           <div className='right-corner-box2'>
              <DiCoda className='img'/>
              <p>Track all your expenses on a daily basis</p>
              <button scr='#' className='Track-Now'> Track Now</button>
           </div>  

        </div>  
        
        
    </div>

    <div>
      <button className='b1'>10y</button>
      <button className='b2'>20y</button>
      <button className='b3'>30p</button>
    </div>
  </div>
  );
  
}


export default chart;