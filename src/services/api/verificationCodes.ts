import axios from "../../utils/axios";

export const createVerificationCode = (email) =>
  axios.post("/verificationCodes", { email });

export const validateCode = (email, code) =>
  axios.post(`/verificationCodes/${encodeURIComponent(email)}/validations`, {
    code,
  });
