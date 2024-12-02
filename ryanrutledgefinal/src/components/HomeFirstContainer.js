import React from "react";

import { RyanCredentials, RyanSkills } from './RyanRutledge';

const HomeFirstContainer = () => {
    return (
        <div className="First_Container">
            <RyanCredentials/>
            <div className="Image_Container"></div>
            <RyanSkills/>
        </div>
    );
};

export default HomeFirstContainer;