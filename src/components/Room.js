import React from "react";
import { Link } from "react-router-dom";
import defaultImg from "../images/room-1.jpeg";
import PropTypes from "prop-types";
import { AiOutlineTag } from "react-icons/ai";
import { RoomContext } from "../context";
import { useContext } from "react";
import RentBtn from "./RentBtn";

export default function Room({ room }) {
  const { name, slug, images, price } = room;
  const context = useContext(RoomContext);
  let { reservedRooms, rent } = context;

  return (
    <article className="room">
      <div className="img-container">
        <img src={images[0] || defaultImg} alt="room image" />
        <div className="price-top">
          <h6>${price}</h6>
          <p>per night</p>
        </div>
        <Link to={`/rooms/${slug}`} className="btn-primary room-link">
          Features
        </Link>
        <RentBtn room={room} />
      </div>

      <p className="room-info">{name}</p>
    </article>
  );
}

Room.propTypes = {
  room: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number.isRequired,
  }),
};
