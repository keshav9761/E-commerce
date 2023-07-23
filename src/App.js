import { useRoutes } from 'react-router-dom'
import Layout from "./Components/Element/Layout";
import routes from './Routes/routes';
import { Suspense } from 'react';
import Spinner from './Pages/Spinner';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
function App() {
  const allRoutes = useRoutes(routes)
  return (
    <>
      <Layout>
        <Suspense fallback={<Spinner />}>
          {allRoutes}
        </Suspense>
        <ToastContainer />
      </Layout>
    </>
  );
}

export default App;
