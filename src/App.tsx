import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Layouts } from "./layouts";
import { About, Home, NotFound, Subscribe } from "./pages";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layouts />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/subscribe" element={<Subscribe />}></Route>
        </Route>

        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </Router>
  )
}

export default App
