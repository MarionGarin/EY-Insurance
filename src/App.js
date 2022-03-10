import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import ResetPassword from './components/ResetPassword';
import Events from './components/Events';
import Home from './components/Home';
import Policies from './components/Policies';
import UpDocuments from './components/UpDocuments';
import ChooseCar from './components/ChooseCar';
import DescribeSinister from './components/DescribeSinister'
import Sinister from './components/Sinister';
import SelectDate from './components/SelectDate';
import NewCar from './components/NewCar';
import PassEvent from './components/PassEvent';
import SendEvent from './components/SendEvent';





const App = () => {
  return (
    <>
    <Routes>
      <Route path="/events" element={<Events />} />
      <Route path="/home" element={<Home />} />
      <Route path="/policies" element={<Policies />} />
      <Route path="/" element={<Login />} />
      <Route path="/reset" element={<ResetPassword />} />
      <Route path="/photo" element={<UpDocuments />} />
      <Route path="/selectcar" element={<ChooseCar/>}/>
      <Route path="/describe" element={<DescribeSinister/>}/>
      <Route path="/sinister" element={<Sinister/>}/>
      <Route path="/selectdate" element={<SelectDate/>}/>
      <Route path="/newcar" element={<NewCar/>}/>
      <Route path="/passevent" element={<PassEvent/>}/>
      <Route path="/sendevent" element={<SendEvent/>}/>
    </Routes>
</>

  );
}
export default App;

// hola