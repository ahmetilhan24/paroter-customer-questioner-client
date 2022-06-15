import { clientHTTP } from "./default.service";

export const sendFeedback = async (payload) => {
  return clientHTTP.post("/feedback", {
    feedback_data: payload,
  });
};
