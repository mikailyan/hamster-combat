import './App.css';
import {Route, Routes} from 'react-router-dom'
import HamsterMain from "./components/HamsterMain/HamsterMain";
import Shop from "./components/Shop/Shop";

function App() {

    return (
        <div className="App">
            <Routes>
            <Route path={'/shop'} element={<Shop/>}/>
                <Route index element={<HamsterMain />}/>
            </Routes>
        </div>
    );
}

export default App;