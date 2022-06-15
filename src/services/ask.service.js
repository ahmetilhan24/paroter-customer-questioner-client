import { clientHTTP } from "./default.service";

export const sendAsk = async (ask_data) => {
  return clientHTTP.post("/ask", {
    ask_data: ask_data,
  });
};
