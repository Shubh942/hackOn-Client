/* eslint-disable react/prop-types */
/* eslint-disable no-inner-declarations */

import { useEffect, useState } from "react";
import HTTP from "../../../services/axios";
import { BASE_IMAGE_URL } from "../../../constants/urls";
import FeatureModal from "../featureModal/FeatureModal";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import "./row.scss";
import axios from "axios";

function Row({ rowId, category, type, url }) {
  const [movies, setMovies] = useState([]);
  const [show, setShow] = useState(false);

  const [featureDetails, setFeatureDetails] = useState([]);
  const [mediaType, setMediaType] = useState("");

  const handleFeatureModal = (m) => {
    if (!show) {
      setShow(true);
      setFeatureDetails(m);
      setMediaType(type);
    } else {
      setShow(false);
      setFeatureDetails([]);
      setMediaType("");
    }
  };

  useEffect(() => {
    async function fetchData() {
      if (rowId == 2) {
        const arr2 = JSON.parse(localStorage.getItem("userInfo"));
        // console.log("-----");
        console.log(arr2);
        // console.log("-----");
        const data = await axios.post(
          "http://192.168.137.185:8080/predict",
          { movie: arr2.movies }
          // { movie: "Avatar" }
          //    config
        );
        // console.log("---");
        // console.log(data.data.movies);
        let arr = [];

        const urls = [];
        data.data.movies.forEach((ele) => {
          urls.push(
            `https://api.themoviedb.org/3/search/movie?query=${ele}&api_key=a6cb561e9fb0bf81d331032d3b9deb15`
          );
        });

        async function makeRequests() {
          for (const url of urls) {
            try {
              const response = await axios.get(url);
              // console.log(response);
              response.data.results.forEach((element) => {
                arr.push(element);
              });
              // arr.push(response.data.results);
              // console.log(arr);
              setMovies(arr);

              // console.log(
              //   `Request to ${url} completed with status: ${response.status}`
              // );
              // Process the response data here
            } catch (error) {
              console.error(
                `Request to ${url} failed with error: ${error.message}`
              );
            }
          }
        }

        makeRequests().then(console.log(arr));
      } else if (rowId == 3) {
        const arr2 = JSON.parse(localStorage.getItem("keyword"));
        console.log("--hello---");
        console.log(arr2);
        console.log("--hello---");
        const data = await axios.post(
          "http://192.168.137.185:8082/predict",
          { keyword: arr2.keyword }
          // { movie: "Avatar" }
          //    config
        );
        console.log("---");
        console.log(data);
        let arr = [];

        const urls = [];
        data.data.movies.forEach((ele) => {
          // console.log(ele);
          urls.push(
            `https://api.themoviedb.org/3/search/movie?query=${ele}&api_key=a6cb561e9fb0bf81d331032d3b9deb15`
          );
        });

        async function makeRequests() {
          for (const url of urls) {
            try {
              const response = await axios.get(url);
              // console.log(response);
              response.data.results.forEach((element) => {
                arr.push(element);
              });
              // arr.push(response.data.results);
              // console.log(arr);
              setMovies(arr);

              // console.log(
              //   `Request to ${url} completed with status: ${response.status}`
              // );
              // Process the response data here
            } catch (error) {
              console.error(
                `Request to ${url} failed with error: ${error.message}`
              );
            }
          }
        }

        makeRequests().then(console.log(arr));
      } else {
        const request = (await HTTP.get(url)).data.results;
        // console.log(request);
        setMovies(request);
      }
    }

    fetchData();
  }, [url]);

  const slideLeft = () => {
    let slider = document.getElementById("slider" + rowId);
    let viewportWidth = window.innerWidth;

    if (rowId === 1) {
      slider.scrollLeft = slider.scrollLeft + viewportWidth;
    } else {
      slider.scrollLeft = slider.scrollLeft + viewportWidth;
    }
  };

  const slideRight = () => {
    let slider = document.getElementById("slider" + rowId);
    let viewportWidth = window.innerWidth;

    if (rowId === 1) {
      slider.scrollLeft = slider.scrollLeft - viewportWidth;
    } else {
      slider.scrollLeft = slider.scrollLeft - viewportWidth;
    }
  };

  return (
    <>
      <h3 style={{ marginTop: "10px" }}>{category}</h3>
      <div className="moviesContainer d-flex" id={"slider" + rowId}>
        <div className="arrow-container-left" onClick={slideRight}>
          <BsChevronLeft />
        </div>
        {movies.map(
          (movie) =>
            movie?.poster_path && (
              <div
                key={movie.id}
                className={`posterContainer ${show}`}
                onClick={() => handleFeatureModal(movie)}
              >
                <img
                  className="posterLarge"
                  src={`${BASE_IMAGE_URL}${movie?.poster_path}`}
                  alt={movie?.title || movie?.name || movie?.original_title}
                />
              </div>
            )
        )}
        <div className="arrow-container-right" onClick={slideLeft}>
          <BsChevronRight />
        </div>
      </div>
      {show && (
        <FeatureModal
          show={show}
          setShow={setShow}
          closeFeatureModal={setShow}
          details={featureDetails}
          mediaType={mediaType}
        />
      )}
    </>
  );
}

export default Row;
