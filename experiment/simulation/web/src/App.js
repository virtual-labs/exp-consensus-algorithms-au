import { Suspense } from "react";
import "./App.css";
import MainContainer from "./components/Common/MainContainer";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Loading from "./components/Loading";

function App() {
  return (
    <>
      <div className="App">
        <div className="container-fluid container-full-height">
          <Provider store={store}>
            <MainContainer />
          </Provider>
        </div>
      </div>
    </>
  );
}

export default App;
