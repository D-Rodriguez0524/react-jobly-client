import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import JobCardList from "../jobs/JobCardList"
import JoblyApi from "../api/api";


const CompanyDetails = () => {
    const { handle } = useParams();

    const [company, setCompany] = useState(null);

    useEffect(() => {
        async function getCompany() {
            setCompany(await JoblyApi.getCompany(handle));
        }
        getCompany();
    }, [handle]);

    if (!company) return <p>sorry couldnt find company</p>

    return (
        <div>
            <h3>company.name</h3>
            <p>company.description</p>
            <JobCardList jobs={company.jobs} />
        </div>
    )
}

export default CompanyDetails;

