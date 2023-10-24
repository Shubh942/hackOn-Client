import React, { useEffect, useState } from "react";
import axios from "axios";
import HTTP from "../../../services/axios";
import { API_KEY, BASE_IMAGE_URL } from "../../../constants/urls";

const Personal_Recommendation = ({ id, mediaType, name }) => {
  const [recommendedData, setRecommendedData] = useState([]);

  useEffect(() => {
    console.log(name);
    const arr = JSON.parse(localStorage.getItem("userInfo"));
    arr.movies = name;
    console.log(arr);
    localStorage.setItem("userInfo", JSON.stringify(arr));
    async function fetchData() {
      //   const recommendedMediaRequest = (
      //     await HTTP.get(
      //       `/${mediaType}/${id}/recommendations?api_key=${API_KEY}&language=en-US`
      //     )
      //   )?.data.results.slice(0, 15);
      const data = await axios.post(
        "http://192.168.137.185:8081/predict",
        { movie: name }
        //    config
      );
      console.log(data.data.movies);
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
            setRecommendedData(arr);

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
      //   console.log(arr);

      //   if (recommendedMediaRequest.length === 0) {
      //     const similarMediaRequest = (
      //       await HTTP.get(
      //         `/${mediaType}/${id}/similar?api_key=${API_KEY}&language=en-US`
      //       )
      //     )?.data.results.slice(0, 15);
      //     setRecommendedData(similarMediaRequest);
      //   } else {
      //     setRecommendedData(recommendedMediaRequest);
      //   }
    }

    fetchData();
  }, [id, mediaType]);

  return (
    <div className="content similar-movies ">
      {recommendedData.map(
        (rec) =>
          rec?.poster_path && (
            <div key={rec?.id} className="rec-container">
              <img
                className="detailsPoster"
                src={`${BASE_IMAGE_URL}${rec?.poster_path}`}
                alt={rec?.title || rec?.original_title}
              />
            </div>
          )
      )}
    </div>
  );
};

export default Personal_Recommendation;
