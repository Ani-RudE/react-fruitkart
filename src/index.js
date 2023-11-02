import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";
// import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import { AppProvider } from "./services/AppContext";
import { AuthProvider } from "./services/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root")); //React root

//Render the components inside a hierarchy of context providers
root.render(
     <React.StrictMode>
          <BrowserRouter> {/* Browser routing */}
               <AuthProvider> {/* AuthProvider for authentication context */}
                    <AppProvider>
                         <Header />
                         <div className="app-container">
                              <App /> {/* Renders App.js */}
                         </div>
                    </AppProvider>
               </AuthProvider>
          </BrowserRouter>
     </React.StrictMode>
);

// To measure performance of the app, pass a function to log results - reportWebVitals(console.log))
// reportWebVitals();