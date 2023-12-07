import {Routes, Route, Router, Switch, useNavigate} from 'react-router-dom';
import {ph} from './ph';
import {ec} from './ec';
import {temp} from './temp';
import {page} from './page';

function App(){
    return (
    <>
    <Router>
    <Switch>
        <Route path='/' Component={page} />
        <Route path='/ph' Component={ph} />
        <Route path='/ec' Component={ec} />
        <Route path='/temp' Component={temp} />
    </Switch>
    </Router>
    </>
    )
}

export default App