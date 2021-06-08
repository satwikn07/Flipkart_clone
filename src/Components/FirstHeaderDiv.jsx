import React from "react";
import data from "./headersPic.json";
import styles from "../CSS/FirstHeaderDiv.module.css";
import { electronics, fashionData1, mtopWears } from "./sub-json";
import {Link} from "react-router-dom";
//console.log(data);
console.log(fashionData1);
console.log(electronics);

function FirstHeaderDiv(){

    return <><div className={styles.linkdiv}>
        
              <div className={styles.link} >
              <div>
              <div className={styles.card}>
              <img width="70px" height="70px" src={data[0].src} alt="pic" />
              <h6>{data[0].desc}</h6>
              </div>
              </div>
              </div>
              
              <div className={styles.link} >
              <div>
              <div className={styles.card}>
              <img width="70px" height="70px" src={data[1].src} alt="pic" />
              <h6>{data[1].desc}</h6>
              </div>
              </div>
              </div>

              <div className={styles.link} >
              <div>
              <div className={styles.card}>
              <img width="70px" height="70px" src={data[2].src} alt="pic" />
              <h6>{data[2].desc}</h6>
              </div>
              </div>
              </div>

              <div className={styles.link} >
              <div>
              <div className={styles.card}>
              <img width="70px" height="70px" src={data[3].src} alt="pic" />
              <div className={styles.dropdown}>
              <h6 className={styles.dropbtn}>{data[3].desc}</h6>
                <div className={styles.dropdowncontent}>
                    <div href="#" className={styles.dropdown}>
                    <label className={styles.dropbtn}>Men's Top Wear</label>
                    <div className={styles.dropdowncontent} style={{left:"335px",marginTop:"-31px"}}>
                      {mtopWears.map(item=>{
                        return <Link>{item}</Link>
                      })}
                    </div>
                    </div><br/>
                    <div href="#" className={styles.dropdown}>
                    <label className={styles.dropbtn}>Men's Bottom Wear</label>
                    <div className={styles.dropdowncontent} style={{left:"335px",marginTop:"-63px"}}>
                    {mtopWears.map(item=>{
                        return <a>{item}</a>
                      })}
                    </div>
                    </div><br />
                    <div href="#" className={styles.dropdown}>
                    <label className={styles.dropbtn}>Woman's Ethnic</label>
                    <div className={styles.dropdowncontent} style={{left:"335px",marginTop:"-95px"}}>
                    {mtopWears.map(item=>{
                        return <a>{item}</a>
                      })}
                    </div>
                    </div><br />
                    <div href="#" className={styles.dropdown}>
                    <label className={styles.dropbtn}>Women's western Wear</label>
                    <div className={styles.dropdowncontent} style={{left:"335px",marginTop:"-127px"}}>
                    {mtopWears.map(item=>{
                        return <a>{item}</a>
                      })}
                    </div>
                    </div><br />
                    <div href="#" className={styles.dropdown}>
                    <label className={styles.dropbtn}>Men Footwear</label>
                    <div className={styles.dropdowncontent} style={{left:"335px",marginTop:"-159px"}}>
                    {mtopWears.map(item=>{
                        return <a>{item}</a>
                      })}
                    </div>
                    </div><br />
                    <div href="#" className={styles.dropdown}>
                    <label className={styles.dropbtn}>Women's Footwear</label>
                    <div className={styles.dropdowncontent} style={{left:"335px",marginTop:"-191px"}}>
                    {mtopWears.map(item=>{
                        return <a>{item}</a>
                      })}
                    </div>
                    </div><br />
                    <div href="#" className={styles.dropdown}>
                    <label className={styles.dropbtn}>Watches and Accessories</label>
                    <div className={styles.dropdowncontent} style={{left:"335px",marginTop:"-223px"}}>
                    {mtopWears.map(item=>{
                        return <a>{item}</a>
                      })}
                    </div>
                    </div><br />
                    <div href="#" className={styles.dropdown}>
                    <label className={styles.dropbtn}>Bags, Suitcases & Luggage</label>
                    <div className={styles.dropdowncontent} style={{left:"335px",marginTop:"-255px"}}>
                    {mtopWears.map(item=>{
                        return <a>{item}</a>
                      })}
                    </div>
                    </div><br />
                    <div href="#" className={styles.dropdown}>
                    <label className={styles.dropbtn}>Kids</label>
                    <div className={styles.dropdowncontent} style={{left:"335px",marginTop:"-287px"}}>
                    {mtopWears.map(item=>{
                        return <a style={{cursor:"pointer"}} href="#">{item}</a>
                      })}
                    </div>
                    </div>

                </div>
              </div>
              </div>
              </div>
              </div>

              <div className={styles.link} >
              <div>
              <div className={styles.card}>
              <img width="70px" height="70px" src={data[4].src} alt="pic" />
              <div className={styles.dropdown}>
              <h6 className={styles.dropbtn}>{data[4].desc}</h6>
              <div className={styles.dropdowncontent}>
                    <div href="#" className={styles.dropdown}>
                    <label className={styles.dropbtn}>Men's Top Wear</label>
                    <div className={styles.dropdowncontent} style={{left:"335px",marginTop:"-31px"}}>
                      {mtopWears.map(item=>{
                        return <Link>{item}</Link>
                      })}
                    </div>
                    </div><br/>
                    <div href="#" className={styles.dropdown}>
                    <label className={styles.dropbtn}>Men's Bottom Wear</label>
                    <div className={styles.dropdowncontent} style={{left:"335px",marginTop:"-63px"}}>
                    {mtopWears.map(item=>{
                        return <a>{item}</a>
                      })}
                    </div>
                    </div><br />
                    <div href="#" className={styles.dropdown}>
                    <label className={styles.dropbtn}>Woman's Ethnic</label>
                    <div className={styles.dropdowncontent} style={{left:"335px",marginTop:"-95px"}}>
                    {mtopWears.map(item=>{
                        return <a>{item}</a>
                      })}
                    </div>
                    </div><br />
                    <div href="#" className={styles.dropdown}>
                    <label className={styles.dropbtn}>Women's western Wear</label>
                    <div className={styles.dropdowncontent} style={{left:"335px",marginTop:"-127px"}}>
                    {mtopWears.map(item=>{
                        return <a>{item}</a>
                      })}
                    </div>
                    </div><br />
                    <div href="#" className={styles.dropdown}>
                    <label className={styles.dropbtn}>Men Footwear</label>
                    <div className={styles.dropdowncontent} style={{left:"335px",marginTop:"-159px"}}>
                    {mtopWears.map(item=>{
                        return <a>{item}</a>
                      })}
                    </div>
                    </div><br />
                    <div href="#" className={styles.dropdown}>
                    <label className={styles.dropbtn}>Women's Footwear</label>
                    <div className={styles.dropdowncontent} style={{left:"335px",marginTop:"-191px"}}>
                    {mtopWears.map(item=>{
                        return <a>{item}</a>
                      })}
                    </div>
                    </div><br />
                    <div href="#" className={styles.dropdown}>
                    <label className={styles.dropbtn}>Watches and Accessories</label>
                    <div className={styles.dropdowncontent} style={{left:"335px",marginTop:"-223px"}}>
                    {mtopWears.map(item=>{
                        return <a>{item}</a>
                      })}
                    </div>
                    </div><br />
                    <div href="#" className={styles.dropdown}>
                    <label className={styles.dropbtn}>Bags, Suitcases & Luggage</label>
                    <div className={styles.dropdowncontent} style={{left:"335px",marginTop:"-255px"}}>
                    {mtopWears.map(item=>{
                        return <a>{item}</a>
                      })}
                    </div>
                    </div><br />
                    <div href="#" className={styles.dropdown}>
                    <label className={styles.dropbtn}>Kids</label>
                    <div className={styles.dropdowncontent} style={{left:"335px",marginTop:"-287px"}}>
                    {mtopWears.map(item=>{
                        return <a style={{cursor:"pointer"}} href="#">{item}</a>
                      })}
                    </div>
                    </div>

                </div>
              </div>
              </div>
              </div>
              </div>

              <div className={styles.link} >
              <div>
              <div className={styles.card}>
              <img width="70px" height="70px" src={data[5].src} alt="pic" />
              <div className={styles.dropdown}>
              <h6 className={styles.dropbtn}>{data[5].desc}</h6>
              <div className={styles.dropdowncontent}>
                    <div href="#" className={styles.dropdown}>
                    <label className={styles.dropbtn}>Men's Top Wear</label>
                    <div className={styles.dropdowncontent} style={{left:"335px",marginTop:"-31px"}}>
                      {mtopWears.map(item=>{
                        return <Link>{item}</Link>
                      })}
                    </div>
                    </div><br/>
                    <div href="#" className={styles.dropdown}>
                    <label className={styles.dropbtn}>Men's Bottom Wear</label>
                    <div className={styles.dropdowncontent} style={{left:"335px",marginTop:"-63px"}}>
                    {mtopWears.map(item=>{
                        return <a>{item}</a>
                      })}
                    </div>
                    </div><br />
                    <div href="#" className={styles.dropdown}>
                    <label className={styles.dropbtn}>Woman's Ethnic</label>
                    <div className={styles.dropdowncontent} style={{left:"335px",marginTop:"-95px"}}>
                    {mtopWears.map(item=>{
                        return <a>{item}</a>
                      })}
                    </div>
                    </div><br />
                    <div href="#" className={styles.dropdown}>
                    <label className={styles.dropbtn}>Women's western Wear</label>
                    <div className={styles.dropdowncontent} style={{left:"335px",marginTop:"-127px"}}>
                    {mtopWears.map(item=>{
                        return <a>{item}</a>
                      })}
                    </div>
                    </div><br />
                    <div href="#" className={styles.dropdown}>
                    <label className={styles.dropbtn}>Men Footwear</label>
                    <div className={styles.dropdowncontent} style={{left:"335px",marginTop:"-159px"}}>
                    {mtopWears.map(item=>{
                        return <a>{item}</a>
                      })}
                    </div>
                    </div><br />
                    <div href="#" className={styles.dropdown}>
                    <label className={styles.dropbtn}>Women's Footwear</label>
                    <div className={styles.dropdowncontent} style={{left:"335px",marginTop:"-191px"}}>
                    {mtopWears.map(item=>{
                        return <a>{item}</a>
                      })}
                    </div>
                    </div><br />
                    <div href="#" className={styles.dropdown}>
                    <label className={styles.dropbtn}>Watches and Accessories</label>
                    <div className={styles.dropdowncontent} style={{left:"335px",marginTop:"-223px"}}>
                    {mtopWears.map(item=>{
                        return <a>{item}</a>
                      })}
                    </div>
                    </div><br />
                    <div href="#" className={styles.dropdown}>
                    <label className={styles.dropbtn}>Bags, Suitcases & Luggage</label>
                    <div className={styles.dropdowncontent} style={{left:"335px",marginTop:"-255px"}}>
                    {mtopWears.map(item=>{
                        return <a>{item}</a>
                      })}
                    </div>
                    </div><br />
                    <div href="#" className={styles.dropdown}>
                    <label className={styles.dropbtn}>Kids</label>
                    <div className={styles.dropdowncontent} style={{left:"335px",marginTop:"-287px"}}>
                    {mtopWears.map(item=>{
                        return <a style={{cursor:"pointer"}} href="#">{item}</a>
                      })}
                    </div>
                    </div>

                </div>
              </div>
              </div>
              </div>
              </div>

              <div className={styles.link} >
              <div>
              <div className={styles.card}>
              <img width="70px" height="70px" src={data[6].src} alt="pic" />
              <div className={styles.dropdown}>
              <h6 className={styles.dropbtn}>{data[6].desc}</h6>
              <div className={styles.dropdowncontent}>
                    <div href="#" className={styles.dropdown}>
                    <label className={styles.dropbtn}>Men's Top Wear</label>
                    <div className={styles.dropdowncontent} style={{left:"335px",marginTop:"-31px"}}>
                      {mtopWears.map(item=>{
                        return <Link>{item}</Link>
                      })}
                    </div>
                    </div><br/>
                    <div href="#" className={styles.dropdown}>
                    <label className={styles.dropbtn}>Men's Bottom Wear</label>
                    <div className={styles.dropdowncontent} style={{left:"335px",marginTop:"-63px"}}>
                    {mtopWears.map(item=>{
                        return <a>{item}</a>
                      })}
                    </div>
                    </div><br />
                    <div href="#" className={styles.dropdown}>
                    <label className={styles.dropbtn}>Woman's Ethnic</label>
                    <div className={styles.dropdowncontent} style={{left:"335px",marginTop:"-95px"}}>
                    {mtopWears.map(item=>{
                        return <a>{item}</a>
                      })}
                    </div>
                    </div><br />
                    <div href="#" className={styles.dropdown}>
                    <label className={styles.dropbtn}>Women's western Wear</label>
                    <div className={styles.dropdowncontent} style={{left:"335px",marginTop:"-127px"}}>
                    {mtopWears.map(item=>{
                        return <a>{item}</a>
                      })}
                    </div>
                    </div><br />
                    <div href="#" className={styles.dropdown}>
                    <label className={styles.dropbtn}>Men Footwear</label>
                    <div className={styles.dropdowncontent} style={{left:"335px",marginTop:"-159px"}}>
                    {mtopWears.map(item=>{
                        return <a>{item}</a>
                      })}
                    </div>
                    </div><br />
                    <div href="#" className={styles.dropdown}>
                    <label className={styles.dropbtn}>Women's Footwear</label>
                    <div className={styles.dropdowncontent} style={{left:"335px",marginTop:"-191px"}}>
                    {mtopWears.map(item=>{
                        return <a>{item}</a>
                      })}
                    </div>
                    </div><br />
                    <div href="#" className={styles.dropdown}>
                    <label className={styles.dropbtn}>Watches and Accessories</label>
                    <div className={styles.dropdowncontent} style={{left:"335px",marginTop:"-223px"}}>
                    {mtopWears.map(item=>{
                        return <a>{item}</a>
                      })}
                    </div>
                    </div><br />
                    <div href="#" className={styles.dropdown}>
                    <label className={styles.dropbtn}>Bags, Suitcases & Luggage</label>
                    <div className={styles.dropdowncontent} style={{left:"335px",marginTop:"-255px"}}>
                    {mtopWears.map(item=>{
                        return <a>{item}</a>
                      })}
                    </div>
                    </div><br />
                    <div href="#" className={styles.dropdown}>
                    <label className={styles.dropbtn}>Kids</label>
                    <div className={styles.dropdowncontent} style={{left:"335px",marginTop:"-287px"}}>
                    {mtopWears.map(item=>{
                        return <a style={{cursor:"pointer"}} href="#">{item}</a>
                      })}
                    </div>
                    </div>

                </div>

              </div>
              </div>
              </div>
              </div>

              <div className={styles.link} >
              <div>
              <div className={styles.card}>
              <img width="70px" height="70px" src={data[7].src} alt="pic" />
              <h6>{data[7].desc}</h6>
              </div>
              </div>
              </div>

              <div className={styles.link} >
              <div>
              <div className={styles.card}>
              <img width="70px" height="70px" src={data[8].src} alt="pic" />
              <h6>{data[8].desc}</h6>
              </div>
              </div>
              </div>

            
        </div>
</>
}

export {FirstHeaderDiv};