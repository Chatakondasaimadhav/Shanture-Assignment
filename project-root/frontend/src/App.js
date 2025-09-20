import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import ReportHistoryPage from './pages/ReportHistoryPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/history" element={<ReportHistoryPage />} />
      </Routes>
    </Router>
  );
}

export default App;
