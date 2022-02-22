import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import store from './store/index';
import { BrowserRouter } from 'react-router-dom';
import { AuthContextProvider } from './store/auth-context';

ReactDOM.render(
    <AuthContextProvider>
        <BrowserRouter>
            <Provider
                store={store}>
                <App />
            </Provider>
        </BrowserRouter>
        </AuthContextProvider>
    , document.getElementById('root'));
