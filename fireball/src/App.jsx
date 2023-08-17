import {
  useQuery,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import axios from 'axios';

import './App.css'
import DataTable from './components/table/Table'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      {/* new base component */}

    </QueryClientProvider>
  )
}

export default App;
