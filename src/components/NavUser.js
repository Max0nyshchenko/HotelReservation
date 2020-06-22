import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import { useContext } from "react";
import { RoomContext } from "../context";

export default function NavUser() {
  const context = useContext(RoomContext);
  let { reservedRooms } = context;

  return (
    <>
      <AiOutlineUser className="user-icon" />
      {/* show count of reserved rooms */}
      <span
        className={
          reservedRooms > 0
            ? "reserved-count-show reserved-count"
            : "reserved-count"
        }
      >
        <p>{reservedRooms}</p>
      </span>
    </>
  );
}
