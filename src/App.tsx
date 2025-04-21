import "./App.css";
import { useRoutes } from "react-router-dom";
import Header from "./component/Header.tsx";
import Analysis from "./pages/Analysis.tsx";
import { QueryClientProvider, QueryClient } from "react-query";
import LeftBar from "./component/LeftBar.tsx";
import Notes from "./pages/Notes.tsx";
import Dashboard from "./pages/Dashboard.tsx";
import Home from "./pages/Home.tsx";
import Footer from "./component/Footer.tsx";
import { useState } from "react";
import Me from "./pages/Me.tsx";

function App() {
  const [isShowLeftBar, setIsShowLeftBar] = useState(false);
  const isHomePage = location.pathname === "/";


  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/Dashboard/:ID", element: <Dashboard /> },
    { path: "/Notes", element: <Notes /> },
    { path: "/Analysis", element: <Analysis /> },
    { path: "/me", element: <Me/> },
  ]);

  const client = new QueryClient();

  return (
    <QueryClientProvider client={client}>
      {!isHomePage && <Header setIsShowLeftBar={setIsShowLeftBar} />}
      <div className="flex">
        {!isHomePage && (
          <LeftBar
            isShowLeftBar={isShowLeftBar}
            setIsShowLeftBar={setIsShowLeftBar}
          />
        )}
        {routes}
      </div>
      {!isHomePage && <Footer />}
    </QueryClientProvider>
  );
}

export default App;
