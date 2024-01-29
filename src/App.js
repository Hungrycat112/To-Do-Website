import Home from './components/Home'
import Goals from './components/Goals'

import { useState } from "react";

function App() {
  const [page, setPage] = useState('home')

  return (
    <>
      {page === 'home' && <Home />}
      {page === 'goals' ? <Goals /> : null}

      {/* Nav */}
      <button class="styled-button" onClick={() => setPage('goals')}>Goals!</button>
      <button class="styled-button" onClick={() => setPage('home')}>Home</button>
    </>
  )
}

export default App;
