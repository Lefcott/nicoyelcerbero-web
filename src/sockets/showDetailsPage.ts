import { io } from "socket.io-client";

import { ShowStore, useShowStore } from "@/store/show";
import { ShowInterface } from "@/interfaces/show";

let show: ShowStore;

useShowStore.subscribe((state) => {
  show = state;
});

const showDetailsPageSocket = io(
  `${process.env.API_URL || ""}/showDetailsPage`
);

showDetailsPageSocket.on("showUpdated", (data: Partial<ShowInterface>) => {
  if (data._id === show._id) {
    useShowStore.setState(data);
  }
});
