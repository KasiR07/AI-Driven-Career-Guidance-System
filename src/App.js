import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MBTI from "./components/MBTI";
import ResponseOnFinish from "./components/ResponseOnFinish";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MBTI />} />
        <Route path="/responseonfinish" element={<ResponseOnFinish />} />
      </Routes>
    </Router>
  );
}

export default App;
