import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { FaStar } from "react-icons/fa";
import StarRating from "./StarRating";
import RatingBar from "./BarRating";
import "./Comments.css";
import {
  TextField,
  Container,
  FormControl,
  InputLabel,
  Input,
  Button,
} from "@material-ui/core";

import { useLocation } from "react-router-dom";
const axios = require("axios").default;

const Comments = () => {
  const { state } = useLocation();
  const id = state._id;
  const URL = `http://localhost:4000/api/houses/${id}`;
 /*  console.log("id is:", state._id); */
 
  const [formName, setFormName] = useState("");
  const [formText, setFormText] = useState("");
  const [comments, setComments] = useState([]);
  const [ratings, setRatings] = useState([]);
  const [averageRatings, setAverageRatings] = useState({});
  const [wohnungRating, setWohnungRating] = useState(0);

  //Get comments from server and render it to DOM
  useEffect(() => {
    async function getComments() {
      try {
        const response = await axios.get(URL);
        //console.log("comments from server: ", response.data.comments);
        setComments(response.data.comments);
        const allgemeineRating = response.data.comments.map(
          (comment) =>
            Object.values(comment.ratings).reduce((prev, curr) => prev + curr) /
            6
        );
        //console.log("allgemeinerating",allgemeineRating)
        let sum = 0;
        for (var key in allgemeineRating) {
          sum += allgemeineRating[key];
        }
        //console.log("sum",(sum/ allgemeineRating.length).toFixed(0));
        setWohnungRating((sum / allgemeineRating.length).toFixed(1));
        const averageRatingSauberkeit = response.data.comments.map(
          (comment) => comment.ratings.Sauberkeit
        );
        let sumSauberkeit = 0;
        for (key in averageRatingSauberkeit) {
          sumSauberkeit += averageRatingSauberkeit[key];
        }
        const averageRatingKommunikation = response.data.comments.map(
          (comment) => comment.ratings.Kommunikation
        );
        let sumKommunikation = 0;
        for (key in averageRatingKommunikation) {
          sumKommunikation += averageRatingKommunikation[key];
        }
        const averageRatingCheck = response.data.comments.map(
          (comment) => comment.ratings.Check
        );
        let sumCheck = 0;
        for (key in averageRatingCheck) {
          sumCheck += averageRatingCheck[key];
        }
        const averageRatingGenauigkeit = response.data.comments.map(
          (comment) => comment.ratings.Genauigkeit
        );
        let sumGenauigkeit = 0;
        for (key in averageRatingGenauigkeit) {
          sumGenauigkeit += averageRatingGenauigkeit[key];
        }
        const averageRatingStandort = response.data.comments.map(
          (comment) => comment.ratings.Standort
        );
        let sumStandort = 0;
        for (key in averageRatingStandort) {
          sumStandort += averageRatingStandort[key];
        }
        const averageRatingPreis = response.data.comments.map(
          (comment) => comment.ratings.Preis
        );
        let sumPreis = 0;
        for (key in averageRatingPreis) {
          sumPreis += averageRatingPreis[key];
        }
        let averageCalculatedRatings = {
          Sauberkeit: Number(
            (sumSauberkeit / response.data.comments.length).toFixed(1)
          ),
          Kommunikation: Number(
            (sumKommunikation / response.data.comments.length).toFixed(1)
          ),
          Check: Number((sumCheck / response.data.comments.length).toFixed(1)),
          Genauigkeit: Number(
            (sumGenauigkeit / response.data.comments.length).toFixed(1)
          ),
          Standort: Number(
            (sumStandort / response.data.comments.length).toFixed(1)
          ),
          Preis: Number((sumPreis / response.data.comments.length).toFixed(1)),
        };
        setAverageRatings(averageCalculatedRatings);
      } catch (error) {
        console.error(error);
      }
    }
    getComments();
  }, [URL]);

  const getDate = () => {
    const dateObj = new Date();
    const monthName = dateObj.toLocaleString("de-DE", {
      month: "long",
      year: "numeric",
      day: "numeric",
    });
    /*  const hours = dateObj.getHours();
    const minutes =
      dateObj.getMinutes().length === 1
        ? "0" + dateObj.getMinutes()
        : dateObj.getMinutes(); */
    const date = `${monthName}`;
    return date;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newComment = {
      name: formName,
      text: formText,
      date: getDate(),
      ratings: ratings,
    };

    if (Object.keys(newComment.ratings).length !== 6) {
      alert("you must provide all rating fields");
      return;
    }
    if (!formName || !formText) return;
    // if (comments.length > 0 /*  || (!ratings) */) {
    /* durchschnitt-sauberkeit */
    let sauberkeitTotal = 0;
    comments.forEach(function (comment) {
      sauberkeitTotal += comment.ratings.Sauberkeit
        ? comment.ratings.Sauberkeit
        : 0;
    });
    let commentsCount = comments.length + 1;
    sauberkeitTotal += newComment.ratings.Sauberkeit
      ? newComment.ratings.Sauberkeit
      : 0;
    let averageSauberkeit = sauberkeitTotal / commentsCount;
    /* durchschnitt-kommunikation */

    let kommunikationTotal = 0;
    comments.forEach(function (comment) {
      kommunikationTotal += comment.ratings.Kommunikation
        ? comment.ratings.Kommunikation
        : 0;
    });

    kommunikationTotal += newComment.ratings.Kommunikation
      ? newComment.ratings.Kommunikation
      : 0;
    let averageKommunikation = kommunikationTotal / commentsCount;

    /* durchschnitt-check-in */

    let checkTotal = 0;
    comments.forEach(function (comment) {
      checkTotal += comment.ratings.Check ? comment.ratings.Check : 0;
    });

    checkTotal += newComment.ratings.Check ? newComment.ratings.Check : 0;
    let averageCheck = checkTotal / commentsCount;

    /* durchschnitt-Genauigkeit der Angaben */

    let genauigkeitTotal = 0;
    comments.forEach(function (comment) {
      genauigkeitTotal += comment.ratings.Genauigkeit
        ? comment.ratings.Genauigkeit
        : 0;
    });

    genauigkeitTotal += newComment.ratings.Genauigkeit
      ? newComment.ratings.Genauigkeit
      : 0;
    let averageGenauigkeit = genauigkeitTotal / commentsCount;

    /* durchschnitt-Standort */

    let standortTotal = 0;
    comments.forEach(function (comment) {
      standortTotal += comment.ratings.Standort ? comment.ratings.Standort : 0;
    });

    standortTotal += newComment.ratings.Standort
      ? newComment.ratings.Standort
      : 0;
    let averageStandort = standortTotal / commentsCount;

    /* durchschnitt-preis-leistung-verhältnis */

    let preisLeistungTotal = 0;
    comments.forEach(function (comment) {
      preisLeistungTotal += comment.ratings.Preis ? comment.ratings.Preis : 0;
    });

    preisLeistungTotal += newComment.ratings.Preis
      ? newComment.ratings.Preis
      : 0;

    let averagePreisLeistung = preisLeistungTotal / commentsCount;

    /* object mit allen durschnitten */
    let averageCalculatedRatings = {
      Sauberkeit: Number(averageSauberkeit.toFixed(1)),
      Kommunikation: Number(averageKommunikation.toFixed(1)),
      Check: Number(averageCheck.toFixed(1)),
      Genauigkeit: Number(averageGenauigkeit.toFixed(1)),
      Standort: Number(averageStandort.toFixed(1)),
      Preis: Number(averagePreisLeistung.toFixed(1)),
    };
    setAverageRatings(averageCalculatedRatings);

    /* allgemeine bewertung der Wohnung */

    const allgemeineRating = (
      Object.keys(averageCalculatedRatings).length > 0
        ? parseInt(
            Object.values(averageCalculatedRatings).reduce(
              (prev, curr) => prev + curr
            )
          ) / Object.keys(averageCalculatedRatings).length
        : 0
    ).toFixed(2);

    setWohnungRating(allgemeineRating);
    //}

    //console.log("newComment:", newComment);

    setComments([newComment, ...comments]);
    setFormText("");
    setFormName("");
    setRatings(0);

    //Update comments in server
    const updatedComments = { comments: [newComment, ...comments] };
    /* console.log("updatedComments: ", updatedComments); */
    axios
      .put(URL, updatedComments)
      .then(function (response) {
       /*  console.log("server.comments", response.data); */
        /* const data = response.data; */
        /* setComments(data) */
      })
      .catch(function (error) {
        console.log("fehler", error);
      });
  };

  const setTheRating = (newRating) => {
    setRatings({ ...ratings, [newRating.name]: newRating.value });
  };
  const ratingsArray = [
    { name: "Sauberkeit" },
    { name: "Kommunikation" },
    { name: "Check" },
    { name: "Genauigkeit" },
    { name: "Standort" },
    { name: "Preis" },
  ];
  return (
    <Container>
      <h2
      className="bewertungH2">
        {wohnungRating} <FaStar color={"gold"} /> von 5{" "}
        <FaStar color={"gold"} /> - aus {comments.length} Bewertungen
      </h2>

      <br />
      <TableContainer 
      className="tableContainerBarRatings"
      component={Paper}
      style={{display:"flex"}}
      >
        <Table  aria-label="simple table"  xs={6}>
          <TableBody>
            {ratingsArray.slice(0, 3).map((r) => (
              <TableRow
                key={r.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                
              >
                <TableCell component="th" scope="row" style={{
                  fontWeight:"bold",
                  fontSize:"15px",
                  }}>
                  {r.name}:
                </TableCell>
                <TableCell align="left">
                  <RatingBar value={averageRatings[r.name]} max={5} />
                  <span className="ratingBar">{averageRatings[r.name]}</span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody >
        </Table>
        <Table  aria-label="simple table" xs={6}>
          <TableBody>
            {ratingsArray.slice(3, 6).map((r) => (
              <TableRow
                key={r.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row" style={{
                  fontWeight:"bold",
                  fontSize:"15px",
                  }}>
                  {r.name}:
                </TableCell>
                <TableCell align="left">
                  <RatingBar value={averageRatings[r.name]} max={5} />
                  <span className="ratingBar">{averageRatings[r.name]}</span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {/* durschnitt-bewertungen */}
      {/* <h2>Durchsnitt-Bewertungen</h2> */}
     {/*  <div className="bar-ratings">
        <div className="bar-links">
          <li className="item-bewertung">
            Sauberkeit:
            <RatingBar value={averageRatings.Sauberkeit} max={5} />
            <span className="ratingBar">{averageRatings.Sauberkeit}</span>
          </li>
          <li className="item-bewertung">
            Kommunikation:
            <RatingBar value={averageRatings.Kommunikation} max={5} />
            <span className="ratingBar"> {averageRatings.Kommunikation}</span>
          </li>
          <li className="item-bewertung">
            Check-in:
            <RatingBar value={averageRatings.Check} max={5} />
            <span className="ratingBar">{averageRatings.Check}</span>
          </li>
        </div>
        <div className="bar-rechts">
          <li className="item-bewertung">
            Genauigkeit der Angaben:
            <RatingBar value={averageRatings.Genauigkeit} max={5} />
            <span className="ratingBar">{averageRatings.Genauigkeit}</span>
          </li>
          <li className="item-bewertung">
            Standort:
            <RatingBar value={averageRatings.Standort} max={5} />
            <span className="ratingBar">{averageRatings.Standort}</span>
          </li>
          <li className="item-bewertung">
            Preis-Leistung-Verhältnis:
            <RatingBar value={averageRatings.Preis} max={5} />
            <span className="ratingBar">{averageRatings.Preis}</span>
          </li>
        </div>
      </div> */}

      {/* formular: FomControl, Input,InputLabel, TextField */}
      <form
        style={{
          display: "flex",
          flexDirection: "column",
        }}
        onSubmit={handleSubmit}
        className="form"
      >
        <h3
          style={{
            margin: "50px auto",
            fontSize:"20px"
          }}
        >
          Machen Sie Ihre Bewertung!
        </h3>
        <div className="bwt">
          <ul className="bwt-links">
            <li className="item-bewertung">
              Sauberkeit:{" "}
              <StarRating
                name="Sauberkeit"
                rating={ratings["Sauberkeit"]}
                setRatings={setTheRating}
                isClickable={true}
              />
            </li>
            <li className="item-bewertung">
              Kommunikation:{" "}
              <StarRating
                name="Kommunikation"
                rating={ratings["Kommunikation"]}
                setRatings={setTheRating}
                isClickable={true}
              />
            </li>
            <li className="item-bewertung">
              Check-in:{" "}
              <StarRating
                name="Check"
                rating={ratings["Check"]}
                setRatings={setTheRating}
                isClickable={true}
              />
            </li>
          </ul>
          <ul className="bwt-rechts">
            <li className="item-bewertung">
              Genauigkeit der Angaben:{" "}
              <StarRating
                name="Genauigkeit"
                rating={ratings["Genauigkeit"]}
                setRatings={setTheRating}
                isClickable={true}
              />
            </li>
            <li className="item-bewertung">
              Standort:{" "}
              <StarRating
                name="Standort"
                rating={ratings["Standort"]}
                setRatings={setTheRating}
                isClickable={true}
              />
            </li>
            <li className="item-bewertung">
              Preis-Leistung-Verhältnis:{" "}
              <StarRating
                name="Preis"
                rating={ratings["Preis"]}
                setRatings={setTheRating}
                isClickable={true}
              />
            </li>
          </ul>
        </div>

        <FormControl className="form-control" size="small">
          <div className="input-label">
            {/* input label */}
            <InputLabel
              style={{
                marginTop:"25px",
                position: "relative",
                width: "25vw",
                display:"flex",
                justifyContent:"center",


              }}
              htmlFor=""
              variant="standard"
            >
              Name
            </InputLabel>

            {/* input */}
            <Input
              
              style={{
                
                margin: "0 auto",
                width: "20vw",
                
              }}
              /*  variant="outlined" */
              value={formName}
              onChange={(e) => {
                setFormName(e.target.value);
              }}
            />
          </div>

          {/* textfield */}
          <TextField
            className="text-field"
            style={{
              margin: "20px auto",
              width: "40vw",
            }}
            value={formText}
            onChange={(e) => {
              setFormText(e.target.value);
            }}
            variant="outlined"
            placeholder="Schreiben Sie Ihren Kommentar"
            multiline
            rows={5}
            
          />

          {/* button */}
          <Button
            style={{
              backgroundColor: "turquoise",
              width: "200px",
              margin: "50px auto",
            }}
            type="submit"
            variant="contained"
          >
            Senden
          </Button>
        </FormControl>
      </form>

      {/* ende form */}

      {/* comments struktur */}

      <div className="comments-container">
        {comments.map((comment, i) => (
          <div className="comments" key={i}>
            <div>
              <div className="title-bwt">
                <h3>
                  {comment.name}
                  {/* bewertung sterchen */}
                </h3>
                <h3 className="bwt-user">
                  {<FaStar color={"gold"} />} {/*   durschnitt value*/}
                  {/* durchschnittliche Bewertung jedes Nutzers */}
                  {(Object.keys(comment.ratings).length > 0
                    ? parseInt(
                        Object.values(comment.ratings).reduce(
                          (prev, curr) => prev + curr
                        )
                      ) / Object.keys(comment.ratings).length
                    : 0
                  ).toFixed(1)}{" "}
                </h3>
              </div>
              <p
                
                style={{
                  position: "relative",
                  margin: 0,
                }}
              >
                {comment.date}
              </p>
            </div>

            
            <p>{comment.text}</p>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Comments;
