
import Admin from "./components/admin/Admin";

import { BrowserRouter, Route, Routes, } from 'react-router-dom';

export const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/*" element={<Admin />} />
    </Routes>
  </BrowserRouter>
);

export default App;
