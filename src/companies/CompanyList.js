import React, { useEffect, useState } from "react";
import JoblyApi from "../api/api";
import CompanyCard from "./CompanyCard";
import Search from "../search/Search";

const CompanyList = () => {
  const [companies, setCompanies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getCompanies = async () => {
      try {
        const companiesData = await JoblyApi.request("companies");
        setCompanies(companiesData.companies);
      } catch (error) {
        console.error("Error fetching companies:", error);
      } finally {
        setIsLoading(false);
      }
    };

    getCompanies();
  }, []);

  const search = async (name) => {
    try {
      setIsLoading(true);
      const params = name ? { name } : {};
      const companiesData = await JoblyApi.request("companies", params);
      setCompanies(companiesData.companies);
    } catch (e) {
      console.error("Error searching companies: ", e);
    } finally {
      setIsLoading(false);
    }
  };

  if (!companies) {
    setIsLoading(true);
  }

  return (
    <div>
      <h2>List of Companies</h2>
      <Search onSearch={search} />
      {isLoading ? (
        <p>Loading....</p>
      ) : (
        <div>
          {companies.map((c) => {
            <CompanyCard
              key={c.handle}
              handle={c.handle}
              name={c.name}
              description={c.description}
              logoUrl={c.logoUrl}
            />;
          })}
        </div>
      )}
    </div>
  );
};

export default CompanyList;
