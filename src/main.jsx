import { createRoot } from 'react-dom/client'
import "./index.css"
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import App from './App'
import { Storepage } from './Pages/Store';
import {Provider} from 'react-redux'
import reduxstore from './Redux/reduxstore';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()


createRoot(document.getElementById('root')).render(
<Storepage>
  <Provider store={reduxstore}>
    <QueryClientProvider client={queryClient}>
  <App/>
  </QueryClientProvider>
  </Provider>
  </Storepage>
)
