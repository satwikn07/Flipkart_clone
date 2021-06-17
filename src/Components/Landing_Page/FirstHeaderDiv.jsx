import React from "react";
import data from "./headersPic.json";
import styles from "../../CSS/Landing_page_css/FirstHeaderDiv.module.css";

function FirstHeaderDiv(){

    return <div><div className={styles.linkdiv}>
        
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
              <h6 className={styles.dropbtn}>{data[3].desc}</h6>
              </div>
              </div>
              </div>

              <div className={styles.link} >
              <div>
              <div className={styles.card}>
              <img width="70px" height="70px" src={data[4].src} alt="pic" />
              <h6 className={styles.dropbtn}>{data[4].desc}</h6>
              </div>
              </div>
              </div>

              <div className={styles.link} >
              <div>
              <div className={styles.card}>
              <img width="70px" height="70px" src={data[5].src} alt="pic" />
              <h6 className={styles.dropbtn}>{data[5].desc}</h6>
              </div>
              </div>
              </div>

              <div className={styles.link} >
              <div>
              <div className={styles.card}>
              <img width="70px" height="70px" src={data[6].src} alt="pic" />
              <h6 className={styles.dropbtn}>{data[6].desc}</h6>
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
</div>
}

export {FirstHeaderDiv};