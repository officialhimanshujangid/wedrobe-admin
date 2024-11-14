
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import App from './App';
import './index.css';
import store from './features/store';
import 'regenerator-runtime/runtime';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <> 
    <ToastContainer />
      <Provider store={store} >
        <App />
      </Provider>
      </>
  // </React.StrictMode> 
);
