import { useState } from "react";
import { useRouter } from "next/router";
import sweetAlert from "sweetalert2";
import Button from "../Button";
import { createOpinion } from "@/services/api/opinions";

export const FeedbackForm = () => {
  const router = useRouter();
  const [opinion, setOpinion] = useState("");
  const [loading, setLoading] = useState(false);
  const [opinionSent, setOpinionSent] = useState(false);
  const { query } = router;

  const sendOpinion = async () => {
    setLoading(true);

    await createOpinion(opinion).catch((error) => {
      console.error("error sending opinion", error);
    });

    sweetAlert.fire({
      title: "Gracias por tu opinión",
      text: "Recibimos tu opinión. La vamos a considerar para poder mejorar. Muchas gracias!",
      icon: "success",
      confirmButtonColor: "#3085d6",
    });

    setOpinionSent(true);
    setLoading(true);
  };

  if (opinionSent) {
    return <div>Opinión enviada. Muchas gracias!</div>;
  }

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl pt-5">¿Qué te parece la página?</h2>
      <div className="m-5 mt-6 max-w-sm flex flex-col items-center gap-6">
        <p className="text-sm">
          Si ves este mensaje, es porque viste nuestro anuncio en{" "}
          <b>{query.adPlatform}</b> e hiciste click en <b>Reservar</b>.
        </p>
        <p className="text-sm">
          ¿Qué opinas de nuestra página? ¿No te interesa comprar una entrada o
          encontraste algún inconveniente?
        </p>
        <p className="text-sm">
          Dejanos saber para que podamos mejorar. Si tenés alguna consulta, no
          dudes en contactarnos.
        </p>
        <textarea
          className="w-full h-40 md:h-60 rounded-sm text-black p-2"
          placeholder="Compartí tu opinión acá"
          value={opinion}
          onChange={(e) => setOpinion(e.target.value)}
        />
        <Button
          loading={loading}
          disabled={loading || !opinion}
          onClick={sendOpinion}
        >
          Enviar opinión
        </Button>
      </div>
    </div>
  );
};
