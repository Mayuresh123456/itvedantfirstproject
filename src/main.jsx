
import { createRoot } from 'react-dom/client'
// import Wpage from './Wpage_lol.jsx'
import { BrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'
import App from './App.jsx'
import ErrorBoundry from './components/ErrorBoundry/ErrorBoundry.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient();
createRoot(document.getElementById('root')).render(
    <QueryClientProvider client={queryClient}>
    <ErrorBoundry>
    <BrowserRouter>
    {/* <Layout/> */}

    <App/>
    {/* <Wpage /> */}
    </BrowserRouter>
    </ErrorBoundry>   
    </QueryClientProvider>
    // install react router dom and then write browser router and then replace main page with outlet andchange welcome page
  
)
