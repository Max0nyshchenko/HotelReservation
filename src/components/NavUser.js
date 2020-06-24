import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import { useContext } from "react";
import { RoomContext } from "../context";

export default function NavUser() {
  const context = useContext(RoomContext);
  let { reservedRooms, reservedRoomsCount } = context;
  let count = reservedRooms.length;

  function reconstructAlert() {
    alert("Account experience closed for reconstruction, sorry...");
  }

  return (
    <>
      <AiOutlineUser onClick={reconstructAlert} className="user-icon" />
      {/* show count of reserved rooms */}
      <span
        className={
          reservedRooms.length > 0
            ? "reserved-count-show  reserved-count"
            : "reserved-count "
        }
      >
        <p className="tooltip">
          {reservedRoomsCount}
          <span className="tooltiptext">Rooms reserved</span>
        </p>
      </span>
    </>
  );
}
