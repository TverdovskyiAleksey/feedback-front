import axios from "axios";

export const feedback = async (name, email, message) => {
  try {
    const response = await axios.post(
      "https://feedback-tverdovskyi-back.herokuapp.com/api/feedback",
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
