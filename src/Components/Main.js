import React from "react";
import Header from './Header/Header';
import StepsBar from './Steps_Bar/Steps_Bar';
const Main = () => {
    return (
        <div className="main-part">
            <Header />
            <StepsBar message="Place your Bid" track="1"/>
        </div>
    )
}
export default Main;