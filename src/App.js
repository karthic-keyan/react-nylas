import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
import { useFetchMessages } from "./service/queries";
import { QueryClient, QueryClientProvider } from "react-query";
import { Home } from "./screens/home";
import { Routes, Route, Outlet } from "react-router-dom";
import { Emails } from "./screens/Emails";
import { TrackEmails } from "./screens/TrackEmails";
import { SendEmail } from "./screens/SendEmail";
import { NoMatch } from "./components/noMatch";
import { BrowserRouter } from "react-router-dom";
import { ScheduleEmail } from "./screens/ScheduleEmail";

function App() {
  const queryClient = new QueryClient();
  return (
    <div className="">
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <Routes>
            <Route path="/" element={<Home />}>
              <Route index element={<Emails />} />
              <Route path="trackEmail" element={<TrackEmails />} />
              <Route path="sendEmail" element={<SendEmail />} />
              <Route path="scheduleEmail" element={<ScheduleEmail />} />
              <Route path="*" element={<NoMatch />} />
            </Route>
          </Routes>
          {/* <Outlet /> */}
        </QueryClientProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
