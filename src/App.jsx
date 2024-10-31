import './App.css';
import {Route, Routes} from 'react-router-dom'
import HamsterMain from "./components/HamsterMain/HamsterMain";
import Shop from "./components/Shop/Shop";
import WithdrawMoney from "./components/WithdrawMoney/WithdrawMoney";

function App() {

    return (
        <div className="App">
            <Routes>
            <Route path={'/shop'} element={<Shop/>}/>
            <Route path={'/withdraw'} element={<WithdrawMoney/>}/>
            <Route path={'/friends'} element={<WithdrawMoney/>}/>
                <Route index element={<HamsterMain />}/>
            </Routes>
        </div>
    );
}

export default App;