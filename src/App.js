import { useRoutes } from 'react-router-dom'
import Layout from "./Components/Element/Layout";
import routes from './Routes/routes';
import { Suspense } from 'react';
import Spinner from './Pages/Spinner';
function App() {
  const allRoutes = useRoutes(routes)
  return (
    <>
      <Layout>
        <Suspense fallback={<Spinner/>}>
          {allRoutes}
        </Suspense>
      </Layout>
    </>
  );
}

export default App;
