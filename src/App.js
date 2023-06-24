import { useRoutes } from 'react-router-dom'
import Layout from "./Components/Element/Layout";
import routes from './Routes/routes';

function App() {
  const allRoutes = useRoutes(routes)
  return (
    <>
      <Layout>
        {allRoutes}
      </Layout>
    </>
  );
}

export default App;
