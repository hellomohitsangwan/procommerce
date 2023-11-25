import axios from "axios";
import React, { useEffect, useState } from "react";
import CompareWebsites from "../components/CompareWebsites";
import SortPrice from "../components/SortPrice";
import SelectProduct from "../components/SelectProduct";
import Search from "../components/Search";
import "./Screen.css";
import { Button, Col, Table } from "react-bootstrap";
import Loader from "../components/Loader";

function CompareScreen() {
  const [filter, setFilter] = useState("lowestPrice");
  const [comparisonWebsites, setComparisonWebsites] = useState([
    "amazon",
    "flipkart",
    "shopclues",
    "snapdeal",
    "nykaa",
  ]); // Initial state with all websites checked
  const [searchTerm, setSearchTerm] = useState("apple iphone 12");
  const [topN, setTopN] = useState(4);
  const [comparisonResults, setComparisonResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleCompare = async () => {
    try {
      setLoading(true);
      const response = await axios.post("https://procommerce.onrender.com/api/scrape", {
        searchTerm,
        filter,
        topN,
        comparisonWebsites,
      });
      console.log(response.data);
      setComparisonResults(response?.data);
      // console.log
    } catch (error) {
      console.error("Error while fetching comparison data:", error);
    } finally {
      setLoading(false); 
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await handleCompare();
      console.log(comparisonResults);
    };
    fetchData();
    // console.log(comparisonResults);
  }, [filter, comparisonWebsites, topN]);

  const websites = ["amazon", "flipkart", "shopclues", "snapdeal", "nykaa"];

  return (
    <div className="m-wrapper">
      <div className="m-wrapper-left">
        <div className="mwlf d-flex flex-row">
          {" "}
          <Search
            searchTerm={searchTerm}
            onSearchTermChange={(value) => setSearchTerm(value)}
          />
          <Button onClick={handleCompare} className="my-3">
            Search
          </Button>
        </div>

        {comparisonResults && (
          <Table striped bordered hover responsive className="table-sm">
            <thead>
              <tr>
                <th>WEBSITE</th>
                <th>NAME</th>
                <th>PRICE</th>
                <th>RATING</th>
                <th>REVIEWS</th>
                <th>Link</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <Loader />
              ) : (
                comparisonResults.map((product, key) => (
                  <tr key={key}>
                    <td>{product?.website}</td>
                    <td>{product?.title}</td>
                    <td>₹ {product?.currentPrice}</td>
                    <td>{product?.rating}</td>
                    <td>{product?.reviewCount}</td>
                    {/* <td>{product?.url}</td> */}
                    <td>
                      {product?.url && (
                        <Button
                          variant="danger"
                          className="btn-sm"
                          onClick={() => (window.location.href = product?.url)}
                        >
                          Go to Product
                        </Button>
                      )}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </Table>
        )}
      </div>
      <div className="m-wrapper-right">
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
    </div>
  );
}

export default CompareScreen;
