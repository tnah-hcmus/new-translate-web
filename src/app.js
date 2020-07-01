import ReactDOM from 'react-dom';
import routes from './router/routes';
import './styles/styles.scss';
import * as serviceWorker from './serviceWorker';
import './firebase/firebase';
ReactDOM.render(routes, document.getElementById('app'));

serviceWorker.unregister();