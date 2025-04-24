import './App.css'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Dashboard } from './Pages/Dashboard';
import { Auth } from './Pages/Auth';
import { FinancialRecordsProvider } from './contexts/financial-record-context';

function App() {

  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path = "/" element = {
            <FinancialRecordsProvider>
              <Dashboard />
              </FinancialRecordsProvider>}/>
          <Route path = "/auth" element = {<Auth />}/>
        </Routes>
      </div>
    </Router>
  )
}

export default App
