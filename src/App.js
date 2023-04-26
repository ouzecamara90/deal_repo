import PhotoProfile from './component/profile/ProfilePhoto';
import FullName from './component/profile/FullName';
import Adress from './component/profile/Adress';
import './App.css';

function App() {
  return (
    <div className="App">
          <PhotoProfile/>
          <FullName/>
          <Adress/>
            <button className="btn-1">Follow</button>
            <button className="btn-2">Message</button>
    </div>
  );
}
export default App;

