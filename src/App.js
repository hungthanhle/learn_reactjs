import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';
import ProductList from './components/ProductList';

const store = createStore(rootReducer);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ProductList />
      </div>
    </Provider>
  );
}

export default App;
