import { Provider } from 'react-redux';
import './styles/main.scss';
import UsersTable from './components/UsersTable';
import store from './services/redux/store';

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <UsersTable />
      </div>
    </Provider>
  );
}

export default App;
