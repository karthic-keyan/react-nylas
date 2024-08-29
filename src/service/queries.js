import { useQuery } from "react-query";

export const fetchMessages = () => {
  const response = fetch(
    `https://api.us.nylas.com/v3/grants/${process.env.REACT_APP_USER_ID}/messages`,
    {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`,
      },
    }
  ).then((res) => {
    return res.json();
  });

  return response;
};

const getCategory = (data) => {
  const cat = data.filter((e) => e.includes("CATEGORY"));
  console.log("cat", cat);
  if (cat[0] === "CATEGORY_PERSONAL") return "Personal";
  if (cat[0] === "CATEGORY_UPDATES") return "Update";
  if (cat[0] === "CATEGORY_PROMOTIONS") return "Promotion";
  else return "No Category";
};

export const useFetchMessages = () => {
  return useQuery("message", fetchMessages, {
    select: (res) => {
      console.log("res", res);
      return res.data.map((e) => {
        return {
          category: getCategory(e.folders),
          subject: e.subject,
        };
      });
    },
  });
};
