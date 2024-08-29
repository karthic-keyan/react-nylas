import React from "react";
import { useFetchMessages } from "../service/queries";

export const Emails = () => {
  const { data: messages, isLoading, error } = useFetchMessages();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading messages</div>;
  }

  return (
    <div>
      <table className="w-full border-2 border-black">
        <thead>
          <tr>
            <th className="p-3 border-r-2 border-b-2 border-black w-[10%]">
              Category
            </th>
            <th className="p-3 border-r-2 border-black border-b-2 w-[40%]">
              Subject
            </th>
          </tr>
        </thead>
        <tbody>
          {messages.length ? (
            messages.map((e, index) => (
              <tr key={index}>
                <td className="w-[10%] p-3 border-b-2 border-r-2 border-black">
                  {e.category}
                </td>
                <td className="w-[40%] p-3 border-b-2 border-r-2 border-black">
                  {e.subject}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={2}>No data</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
