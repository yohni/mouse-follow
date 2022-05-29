import { Route, Routes } from 'react-router-dom'
import MyFace from './containers/MyFace'
import Home from './Home'
import PageXY from './PageXY'

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="xy" element={<PageXY />} />
        <Route path="/my-face" element={<MyFace />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
