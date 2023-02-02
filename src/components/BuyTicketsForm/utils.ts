import { isEmail } from "@/utils/isEmail";
import sweetAlert from "sweetalert2";

export interface Guest {
  firstName: string;
  lastName: string;
}

export const validateTicketsForm = (email: string, guests: Guest[]) => {
  const validEmail = isEmail(email);

  if (!validEmail) {
    sweetAlert.fire({
      title: "Revisá los datos",
      text: "Por favor, ingresá un email válido",
      icon: "warning",
      confirmButtonColor: "#3085d6",
    });
    return false;
  }

  for (let i = 0; i < guests.length; i += 1) {
    const guest = guests[i];
    if (!guest.firstName) {
      sweetAlert.fire({
        title: "Revisá los datos",
        text: `Por favor, ingresá el nombre de la persona ${
          guests.length > 1 ? i + 1 : ""
        }`,
        icon: "warning",
        confirmButtonColor: "#3085d6",
      });
      return false;
    }
    if (!guest.lastName) {
      sweetAlert.fire({
        title: "Revisá los datos",
        text: `Por favor, ingresá el apellido de la persona ${
          guests.length > 1 ? i + 1 : ""
        }`,
        icon: "warning",
        confirmButtonColor: "#3085d6",
      });
      return false;
    }
  }

  return true;
};
