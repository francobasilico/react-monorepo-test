import { Route, Routes, Link } from 'react-router-dom';
import { cn } from '@xps/utils';
import { Button } from '@xps/ui';

export function App() {
  const asd = 'text-green-500';
  return (
    <div>
      <div className={cn(asd, 'text-violet-500')}>franco</div>
      <Button>franco</Button>
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
