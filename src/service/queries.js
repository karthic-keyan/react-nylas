import { useQuery } from "react-query";

export const fetchMessages = async () => {
  const response = await fetch(
    `https://api.us.nylas.com/v3/grants/${process.env.REACT_APP_USER_ID}/messages`,
    {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`,
      },
    }
  );
  return response.json();
};

const getCategory = (folders) => {
  const category = folders.find((folder) => folder.includes("CATEGORY"));
  switch (category) {
    case "CATEGORY_PERSONAL":
      return "Personal";
    case "CATEGORY_UPDATES":
      return "Update";
    case "CATEGORY_PROMOTIONS":
      return "Promotion";
    default:
      return "No Category";
  }
};

export const useFetchMessages = () => {
  return useQuery("message", fetchMessages, {
    select: (data) => {
      return data.map((message) => ({
        category: getCategory(message.folders),
        subject: message.subject,
      }));
    },
  });
};
