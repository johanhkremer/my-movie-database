import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import PageNotFound from "./pages/PageNotFound"


function App() {

  return (
    <div id="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>

      <ReactQueryDevtools />

    </div>
  )
}

export default App
