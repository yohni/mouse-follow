import { ThemeProvider } from '@mui/material/styles'
import { Route, Routes } from 'react-router-dom'
import MyFace from './containers/MyFace'
import Home from './Home'
import PageXY from './PageXY'
import theme from './theme'

function App() {
  return (
    <div className="app">
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="xy" element={<PageXY />} />
          <Route path="/my-face" element={<MyFace />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </ThemeProvider>
    </div>
  )
}

export default App
