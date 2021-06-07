import React from "react";
import {Link} from "react-router-dom";
import data from "./headersPic.json";
import styles from "../CSS/FirstHeaderDiv.module.css";
//console.log(data);

function FirstHeaderDiv(){

    return <div className={styles.linkdiv}>
        {data.map((e,id)=>{
      return  <Link key={id} to="/" className={styles.link} >
               <div style={{width:"100px"}}>
               <img width="90%" height="90px" src={e.src} alt="pic" />
               <h4 className={styles.desc}>{e.desc}</h4>
               </div>
               </Link>
            })}
        </div>
}

export {FirstHeaderDiv};