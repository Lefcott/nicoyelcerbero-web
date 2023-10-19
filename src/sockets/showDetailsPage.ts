import { io } from "socket.io-client";
import sweetAlert from "sweetalert2";

import { ShowStore, useShowStore } from "@/store/show";
import { ShowInterface } from "@/interfaces/show";
import { fromAd, pageVisitId } from "@/constants";

let show: ShowStore;

useShowStore.subscribe((state) => {
  show = state;
});

const showDetailsPageSocket = io(
  `${process.env.API_URL || ""}/showDetailsPage`,
  { query: { pageVisitId: fromAd ? pageVisitId : "" } }
);

showDetailsPageSocket.on("showUpdated", (data: Partial<ShowInterface>) => {
  if (data._id === show._id) {
    if (data.presalePrice && data.presalePrice !== show.presalePrice) {
      sweetAlert.fire({
        title: "Se actualizó el precio",
        text: `El precio por entrada se actualizó de $${show.presalePrice} a $${data.presalePrice}`,
        icon: data.presalePrice > (show.presalePrice || 0) ? "warning" : "info",
        confirmButtonText: "Entendido",
      });
    }

    useShowStore.setState(data);
  }
});
