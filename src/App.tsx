
import { Route, Routes } from 'react-router'
import LoadingScreenPage from './pages/loadingScreen/LoadingScreenPage'
import OverViewPage from './pages/overView/OverViewPage'

function App() {

  return (
    <Routes>
      <Route path="/" element={
        <LoadingScreenPage />
      } />
      <Route path="/overview" element={
        <OverViewPage />
      } />
      <Route path="/location" element={
        <OverViewPage />
      } />
      <Route path="/subdivision" element={
        <OverViewPage />
      } />
      <Route path="/utilities" element={
        <OverViewPage />
      } />
      <Route path="/gallery" element={
        <OverViewPage />
      } />
      <Route path="/ebrochure" element={
        <OverViewPage />
      } />
    </Routes>

  )
}

export default App
