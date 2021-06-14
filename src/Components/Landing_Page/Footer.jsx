import React from "react";
// import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
// import '@fortawesome/fontawesome-free/css/fontawesome.css'
//import "bootstrap-css-only/css/bootstrap.min.css";
// import "mdbreact/dist/css/mdb.css";
import styled from 'styled-components'
const FooterPage = () => {
  
  const Div = styled.div`
    color: #878787;
    font-size: 12px;
    font-weight: 400;
    margin-bottom: 9px;
    font-family: Roboto,Arial,sans-serif;
    letter-spacing: 0;
    text-align:left
    `
    const Ldiv =styled.div`
      margin-left:43px;
      color: #878787;
    font-size: 12px;
    font-weight: 400;
    margin-bottom: 9px;
    font-family: Roboto,Arial,sans-serif;
    letter-spacing: 0;
    ` 
     
  return (
    <div style={{backgroundColor:"rgba(9,14,22,255)"}}> 
    {/* <MDBFooter    className="font-small pt-4 mt-7">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol>
            <Ldiv>ABOUT</Ldiv>
            <ul>
              <li className="list-unstyled">
                <a href="#!">Contact Us</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">About Us</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Careers</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Flipkart Stories</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Press</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Flipkart</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Wholesale</a>
              </li>
            </ul>
          </MDBCol>

          <MDBCol>
            <Ldiv>HELP</Ldiv>
            <ul>
              <li className="list-unstyled">
                <a href="#!">Payments</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Shipping</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Cancellation &</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Returns</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">FAQ</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Report</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Infringement</a>
              </li>
            </ul>
          </MDBCol>

          <MDBCol>
            <Ldiv>Policy</Ldiv>
            <ul>
              <li className="list-unstyled">
                <a href="#!">Return Policy</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Terms of Use</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Security</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Privacy</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Sitemap</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">EPR Compliance</a>
              </li>
            </ul>
          </MDBCol>

          <MDBCol>
            <Ldiv>Social</Ldiv>
            <ul>
              <li className="list-unstyled">
                <a href="#!">Facebook</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Twitter</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">YouTube</a>
              </li>
            </ul>
          </MDBCol>
          <MDBCol>
            <Div>Mail Us</Div>
            <p>
              Flipkart Internet Private Limited, Buildings Alyssa, Begonia &
              Clove Embassy Tech Village, Outer Ring Road, Devarabeesanahalli
              Village, Bengaluru, 560103, Karnataka, India
            </p>
          </MDBCol>
          <MDBCol>
            <Div>Registered Office Address</Div>
            <p>
              Flipkart Internet Private Limited, Buildings Alyssa, Begonia &
              Clove Embassy Tech Village, Outer Ring Road, Devarabeesanahalli
              Village, Bengaluru, 560103, Karnataka, India CIN :
              U51109KA2012PTC066107 Telephone: 1800 202 9898
            </p>
          </MDBCol>
        </MDBRow>
        <hr color="white" />
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          <MDBRow>
            <MDBCol>
              <a href="#!">Sell On Flipkart</a>
            </MDBCol>
            <MDBCol>
              <a href="#!">Advertise</a>
            </MDBCol>
            <MDBCol>
              <a href="#!">Gift Cards</a>
            </MDBCol>
            <MDBCol>
              <a href="#!">Help Center</a>
            </MDBCol>
            <MDBCol>
              <a href="#!">Help Center</a>
            </MDBCol>
            <MDBCol>
              <a href="#!">© 2007-2020 Flipkart.com</a>
            </MDBCol>
            <MDBCol>
              <img
                alt=""
                src="//static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/payment-method_69e7ec.svg"
              />
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    </MDBFooter> */}
    </div>
  );
};

export default FooterPage;
