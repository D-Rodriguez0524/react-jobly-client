import React from "react";
import { Link } from "react-router-dom";


const CompanyCard = ({ name, description, logUrl, handle }) => {
    return (
        <Link>
            <div>
                <h5>
                    {name}
                    {logUrl && <img src={logUrl} alt={name} />}
                </h5>
                <small>{description}</small>
            </div>
        </Link>
    )
}

export default CompanyCard;

