import React from "react";
import PropTypes from "prop-types";
import { AiOutlineTag } from "react-icons/ai";
import { RoomContext } from "../context";
import { useContext } from "react";

export default function RentBtn({ room }) {
  const { name } = room;
  const context = useContext(RoomContext);
  const { rent, reservedRooms } = context;

  return (
    <>
      <button
        onClick={() => {
          if (reservedRooms.indexOf(name) === -1) {
            reservedRooms.push(room.name);
          }
          rent();
        }}
        id={name}
        className="rent-btn"
      >
        <div className="room-icon rent-btn-item">
          <AiOutlineTag />
        </div>
        <div className="room-txt rent-btn-item">
          {(reservedRooms) => {
            if (reservedRooms.indexOf(name) === -1) {
              return "Reserve";
            }
          }}
        </div>
      </button>
    </>
  );
}
