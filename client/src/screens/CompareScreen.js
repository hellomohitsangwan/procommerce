import axios from "axios";
import React, { useEffect, useState } from "react";
import CompareWebsites from "../components/CompareWebsites";
import SortPrice from "../components/SortPrice";
import SelectProduct from "../components/SelectProduct";
import Search from "../components/Search";

function CompareScreen() {
  const [obj, setObj] = useState({});
  const [filter, setFilter] = useState("highest");
  const [comparisonWebsites, setComparisonWebsites] = useState([
    "amazon",
    "flipkart",
    "shopclues",
    "snapdeal",
    "nykaa",
  ]); // Initial state with all websites checked
  const [searchTerm, setSearchTerm] = useState("appe");
  const [topN, setTopN] = useState(4);
  const [comparisonResults, setComparisonResults] = useState([]);

  const handleCompare = async () => {
    try {
      const response = await axios.post("/api/scrape", {
        searchTerm,
        filter,
        topN,
        comparisonWebsites,
      });
      setComparisonResults(response.data);
    } catch (error) {
      console.error("Error while fetching comparison data:", error);
    }
  };

  useEffect(() => {
    handleCompare();
    console.log(comparisonResults);
  }, [filter, comparisonWebsites, topN]);

  const websites = ["amazon", "flipkart", "shopclues", "snapdeal", "nykaa"];


  return (
    <div className="containeer">
      <div className="d-flex flex-row">
        {" "}
        <Search
          searchTerm={searchTerm}
          onSearchTermChange={(value) => setSearchTerm(value)}
        />
        <button onClick={handleCompare} className="btn-block1">
          Search
        </button>
      </div>

      <SortPrice
        selectedFilter={filter}
        onSelectFilter={(selectedFilter) => setFilter(selectedFilter)}
      />
      <CompareWebsites
        cw={websites}
        filterGenre={comparisonWebsites}
        setFilterGenre={(genre) => setComparisonWebsites(genre)}
      />
      <SelectProduct
        selectedValue={topN}
        onSelectValue={(value) => setTopN(value)}
      />
    </div>
  );
}

export default CompareScreen;
