import { Provider } from 'react-redux';
import Header from './components/Header';
import Main from './components/Main';
import store from './store';

function App() {
  return (
    <>
      <Header />
      <Provider store={store}>
        <Main />
      </Provider>
    </>
  );
}

export default App;
