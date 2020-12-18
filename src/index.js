import React, { Suspense } from 'react';
import ReactDOM from '@hot-loader/react-dom';
const App = React.lazy(() => import('./components/App'))

ReactDOM.render(
  <Suspense fallback={<div>...</div>}>
    <App />
  </Suspense>,
  document.getElementById('root')
)