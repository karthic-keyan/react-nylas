import { useState } from "react";
import { useMutation } from "react-query";

export const SendEmail = () => {
  const [subject, setSubject] = useState("");
  const [EmailAddress, setEmailAddress] = useState("");
  const [message, setMessage] = useState("");

  const handleEmail = async (e) => {
    e.preventDefault();

    const ReqBody = {
      subject,
      to: [
        {
          email: EmailAddress,
          name: EmailAddress,
        },
      ],
      body: message,
      tracking_options: {
        opens: true,
        links: true,
      },
    };

    const response = await fetch("http://localhost:3001/send-email", {
      method: "POST",
      body: JSON.stringify(ReqBody),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed");
    }

    return response.json();
  };

  return (
    <form className="my-6" onSubmit={handleEmail}>
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <input
            type="email"
            onChange={(e) => setEmailAddress(e.target.value)}
            autoComplete="off"
            id="first_name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter Receipents Email Address"
            required
          />
        </div>
      </div>
      <div>
        <label
          htmlFor="subject"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Subject
        </label>
        <input
          onChange={(e) => setSubject(e.target.value)}
          type="subject"
          id="subject"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="subject"
          required
        />
      </div>

      <label
        htmlFor="message"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Your message
      </label>
      <textarea
        id="message"
        onChange={(e) => setMessage(e.target.value)}
        rows="4"
        className="block p-2.5 mb-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Enter Message"
        required
      ></textarea>

      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Send
      </button>
    </form>
  );
};
