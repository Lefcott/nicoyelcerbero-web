import React, { useEffect, useState } from "react";
import sweetAlert from "sweetalert2";
import { validateCode } from "@/services/api/verificationCodes";
import Button from "../Button";

const EmailVerificationModal = ({ email, open, onClose, onPass }) => {
  const [codes, setCodes] = useState(Array(6).fill(""));
  const [submitting, setSubmitting] = useState(false);

  const setDigit = (index, digit) => {
    setCodes([...codes.slice(0, index), digit, ...codes.slice(index + 1)]);
  };

  const handleChangeDigit = (e, index) => {
    if (
      e.target.value.charCodeAt(0) < 48 ||
      e.target.value.charCodeAt(0) > 57
    ) {
      return setDigit(index, codes[index]);
    }
    if (e.target.value.length > 0) {
      e.target.nextElementSibling?.focus();
      e.target.nextElementSibling?.select();
    }
    setCodes([
      ...codes.slice(0, index),
      e.target.value,
      ...codes.slice(index + 1),
    ]);
  };

  const submitCode = async () => {
    const completeCode = codes.join("");

    setSubmitting(true);

    try {
      const validation = await validateCode(email, completeCode);
      if (validation.data) {
        onPass();
      } else {
        sweetAlert.fire({
          title: "Código inválido",
          text: `El código ingresado no es el que te mandamos por email a ${email}.`,
          icon: "warning",
          confirmButtonColor: "#3085d6",
        });
        setCodes(Array(6).fill(""));
      }
    } catch (error) {
      sweetAlert.fire({
        title: "Error",
        text: "Hubo un error al verificar el código.",
        icon: "error",
        confirmButtonColor: "#3085d6",
      });
      console.error(error);
    }
    setSubmitting(false);
  };

  useEffect(() => {
    if (!open) {
      setCodes(Array(6).fill(""));
    }
  }, [open]);

  return (
    <>
      {open && (
        <div className="fixed top-0 left-0 h-screen w-screen bg-gray-900 bg-opacity-75 flex items-center justify-center">
          <div className="bg-white p-10 rounded">
            <h3 className="text-xl text-black font-bold mb-5">
              Verificación de email
            </h3>
            <p className="text-gray-700 mb-5 max-w-md">
              Se ha enviado un código de verificación a {email}. Por favor,
              ingresalo a continuación. (También revisá la carpeta de Spam)
            </p>
            <div className="mb-5 flex justify-start space-x-4">
              {codes.map((code, index) => (
                <input
                  key={index}
                  type="text"
                  className="border-2 border-gray-300 text-black px-2 py-1 rounded-lg text-center w-12 h-12"
                  maxLength={1}
                  value={code}
                  onChange={(e) => handleChangeDigit(e, index)}
                  autoFocus={index === 0}
                />
              ))}
            </div>
            <div className="flex space-x-4">
              <button
                className="bg-red-500 text-white py-2 px-4 rounded"
                onClick={onClose}
              >
                Cancelar
              </button>
              <Button
                onClick={submitCode}
                disabled={codes.join("").length < 6}
                loading={submitting}
              >
                Continuar
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EmailVerificationModal;
