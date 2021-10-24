import axios from "axios";

export const feedback = async (name, email, message) => {
  try {
    const response = await axios.post(
      "https://arcane-ridge-51475.herokuapp.com/",
      {
        name,
        email,
        message,
      }
    );
    alert(response.data.message);
  } catch (error) {
    alert(error);
  }
};
