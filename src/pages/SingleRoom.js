import React, { Component } from "react";
import defaultBcg from "../images/room-1.jpeg";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import { RoomContext } from "../context";
import StyledHero from "../components/StyledHero";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaArrowAltCircleLeft } from "react-icons/fa";

export default class SingleRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg,
      modalArr: [],
    };
  }

  static contextType = RoomContext;

  componentDidMount() {}

  render() {
    const { getRoom } = this.context;
    const room = getRoom(this.state.slug);
    if (!room) {
      return (
        <div className="error">
          <h3>no such room could be found...</h3>
          <Link to="/rooms" className="btn-primary">
            Back to Rooms
          </Link>
        </div>
      );
    }

    const {
      name,
      description,
      capacity,
      price,
      size,
      extras,
      breakfast,
      pets,
      images,
    } = room;
    const [mainImg, ...defaultImg] = images;

    const returnImgSrc = (item) => {
      let img = document.querySelector(".modal-content");
      img.src = item;
      let caption = document.querySelector("#caption");
      caption.innerHTML = name;
    };

    let clicks = 1;

    const moveRight = () => {
      let idx = defaultImg.indexOf(this.state.modalArr[0]);
      let img = document.querySelector(".modal-content");
      let def = defaultImg[idx + 1];
      img.src = def;
      if (defaultImg[idx + 1] === undefined) {
        def = defaultImg[0];
        img.src = def;
      }
      this.setState({
        modalArr: [def],
      });
    };
    const moveLeft = () => {
      let idx = defaultImg.indexOf(this.state.modalArr[0]);
      let img = document.querySelector(".modal-content");
      let def = defaultImg[idx - 1];
      img.src = def;
      if (defaultImg[idx - 1] === undefined) {
        def = defaultImg[defaultImg.length - 1];
        img.src = def;
      }
      this.setState({
        modalArr: [def],
      });
    };

    return (
      <>
        <StyledHero img={mainImg || this.state.defaultBcg}>
          <Banner title={`${name} room`}>
            <Link to="/rooms" className="btn-primary">
              back to rooms
            </Link>
          </Banner>
        </StyledHero>
        <section className="single-room">
          <div className="single-room-images">
            {defaultImg.map((item, index) => {
              return (
                <img
                  className="single-room-img"
                  onClick={() => {
                    returnImgSrc(item);
                    let modal = document.querySelector(".myModal");
                    modal.style.display = "block";
                    this.state.modalArr.push(item);
                  }}
                  key={index}
                  src={item}
                  alt={name}
                />
              );
            })}
          </div>
          <div className="single-room-info">
            <article className="desc">
              <h3>details</h3>
              <p>{description}</p>
            </article>
            <article className="info">
              <h3>info</h3>
              <h6>price: ${price}</h6>
              <h6>size: ${size} SQFT</h6>
              <h6>
                max capacity:{" "}
                {capacity > 1 ? `${capacity} people` : `${capacity} person`}
              </h6>
              <h6>{pets ? "pets allowed" : "no pets allowed"}</h6>
              <h6> {breakfast && "free breakfast included"} </h6>
            </article>
          </div>
        </section>
        <section className="room-extras">
          <h6>extras</h6>
          <ul className="extras">
            {extras.map((item, index) => {
              return <li key={index}>- {item} </li>;
            })}
          </ul>
        </section>
        <section className="myModal">
          <span
            onClick={() => {
              let modal = document.querySelector(".myModal");
              modal.style.display = "none";
              this.setState({
                modalArr: [],
              });
              clicks = 1;
            }}
            class="modal-close"
          >
            &times;
          </span>
          <img class="modal-content" />
          <div id="caption"></div>
          <span onClick={moveRight} className="goRight">
            {" "}
            <FaArrowAltCircleRight />{" "}
          </span>
          <span onClick={moveLeft} className="goLeft">
            {" "}
            <FaArrowAltCircleLeft />{" "}
          </span>
        </section>
      </>
    );
  }
}
