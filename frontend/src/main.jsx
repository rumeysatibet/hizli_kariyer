import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Toaster } from "./components/ui/sonner.jsx"; // Toaster bileşeni doğru yolda olmalı
import { Provider } from "react-redux";
import store from "./redux/store.js";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

// Persistor oluşturuldu
const persistor = persistStore(store);

// Uygulamanın render edilmesi
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
        <Toaster /> {/* Toaster bileşeni burada çağrıldı */}
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
