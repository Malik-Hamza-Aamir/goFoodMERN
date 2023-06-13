import { useState, useEffect } from "react";
import Cards from "../Components/Food_cards/Cards";
import Footer from "../Components/Footer/Footer";
import Navibar from "../Components/Navibar/Navibar";

const Home = () => {
  const [search, setSearch] = useState("");
  const [foodCat, setFoodCat] = useState([]);
  const [foodItem, setFoodItem] = useState([]);

  const loadData = async () => {
    let response = await fetch("http://localhost:4000/api/foodData", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
    });

    response = await response.json();
    // console.log(response[0] , response[1]);
    setFoodItem(response[0]);
    setFoodCat(response[1]);
  };

  useEffect(() => {
    loadData();
  });

  return (
    <>
      <div>
        <div>
          {" "}
          <Navibar />{" "}
        </div>

        <div className="container">
          <div class="d-flex mt-3">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={search}
              onChange={(e) => {setSearch(e.target.value)}}
            />
          </div>

          {foodCat !== []
            ? foodCat.map((data) => {
                return (
                  <div className="row mb-3">
                    <div key={data._id} className="fs-3 m-3">
                      {data.CategoryName}
                    </div>

                    <hr />

                    {foodItem !== [] ? (
                      foodItem
                        .filter(
                          (item) =>
                            (item.CategoryName === data.CategoryName) &&
                            (item.name.toLowerCase().includes(search.toLocaleLowerCase()))
                        )
                        .map((filterItems) => {
                          return (
                            <div
                              key={filterItems._id}
                              className="col-12 col-md-6 col-lg-3"
                            >
                              <Cards
                                foodItem = {filterItems} 
                                options={filterItems.options[0]}
                              />
                            </div>
                          );
                        })
                    ) : (
                      <div> No Such Data Found </div>
                    )}
                  </div>
                );
              })
            : ""}
        </div>

        <div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
