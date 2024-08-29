export const fetchMessages = () => {
  const response = fetch(
    "https://api.us.nylas.com/v3/grants/e7ac5e35-b9f0-4ebf-b63c-84a675945ab0/messages",
    {
      headers: {
        Authorization:
          "Bearer nyk_v0_1QdOx2uAC1tQ6UJ4chRkXgsM0nF62B7XYXcAg8cZBwt84hHCkuZXlUilhrO96ruX",
      },
    }
  ).then((res) => {
    return res.json();
  });

  console.log("response", response);
  return response;
};
