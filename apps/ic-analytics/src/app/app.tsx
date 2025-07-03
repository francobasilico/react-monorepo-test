import { XpsUi } from '@xps/ui';
import { Route, Routes, Link } from 'react-router-dom';

export function App() {
  return (
    <div>
      <div className="text-red-500">franco</div>
      <XpsUi />
      <Routes>
        <Route
          path="/"
          element={
            <div>
              This is the generated root route.{' '}
              <Link to="/page-2">Click here for page 2.</Link>
            </div>
          }
        />
        <Route
          path="/page-2"
          element={
            <div>
              <Link to="/">Click here to go back to root page.</Link>
            </div>
          }
        />
      </Routes>
      {/* END: routes */}
    </div>
  );
}

export default App;
