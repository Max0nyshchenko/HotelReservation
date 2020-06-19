import React from "react";
import RoomsFilter from "./RoomsFilter";
import RoomList from "./RoomList";

export default function RoomsContainer() {
  return (
    <div>
      hello from RoomsContainer
      <RoomList />
      <RoomFilter />
    </div>
  );
}
