import logo from "./logo.svg";
import "./App.css";
import { Provider } from "react-redux";
import Routes from "./pages";
import { store } from "./store/store";
import { BrowserRouter } from "react-router-dom";
import Toast from "./components/Toast";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Toast />
        <Routes />
      </Provider>
    </BrowserRouter>
  );
}

export default App;
