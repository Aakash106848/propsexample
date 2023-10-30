import {useState } from "react";
function AboutUs(props) {
    const [CompanyName] = useState(props.CompanyName);
    const [Address] = useState(props.Address);

    return (
        <div>
            <fieldset>
            <h1>Company :{CompanyName} </h1>
            <h1>Location: {Address}</h1>
            </fieldset>
        </div>
    );
}
export default AboutUs;