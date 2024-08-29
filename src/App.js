import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./screens/home";
import { Emails } from "./screens/Emails";
import { TrackEmails } from "./screens/TrackEmails";
import { SendEmail } from "./screens/SendEmail";
import { ScheduleEmail } from "./screens/ScheduleEmail";
import { NoMatch } from "./components/NoMatch";

function App() {
  const queryClient = new QueryClient();

  return (
    <div className="App">
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
        </QueryClientProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
