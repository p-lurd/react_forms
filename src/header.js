import chair from './assets/chair.svg'
import blue from './assets/blue.svg'
import blob from './assets/blob.svg'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
  Link,
  useHistory,
} from "react-router-dom";

const Header = () => {
  const location = useLocation();
  
  const circle1 = location.pathname === '/' || location.pathname === '/personal_info' ? '#93c5fd' : 'none';
  const circle2 = location.pathname === '/plan' ? '#93c5fd' : 'none';
  const circle3 = location.pathname === '/addon' ? '#93c5fd' : 'none';
  const circle4 = location.pathname === '/finish' ? '#93c5fd' : 'none';
  return (
    <header className="grid  w-full h-1/4 relative overflow-hidden shadow-inner bg-gradient-to-r from-blue-800 to-cyan-800 hover:bg-gradient-to-l">
      <div className='flex items-center justify-center z-50 w-full mb-10 pr-10'>
        <svg width="70" height="100" >
        <circle r="15" cx="50" cy="50" fill={circle1} stroke="#93c5fd" stroke-width="1.5"></circle>
        <text x="50" y="57" font-size="17" text-anchor="middle" fill="black">1</text>
        
        </svg>
        <svg width="70" height="100">
        <circle r="15" cx="50" cy="50" fill={circle2} stroke="#93c5fd" stroke-width="1.5"></circle>
        <text x="50" y="57" font-size="17" text-anchor="middle" fill="black">2</text>
        </svg>
        <svg width="70" height="100">
        <circle r="15" cx="50" cy="50" fill={circle3} stroke="#93c5fd" stroke-width="1.5"></circle>
        <text x="50" y="57" font-size="17" text-anchor="middle" fill="black">3</text>
        </svg><svg width="70" height="100">
        <circle r="15" cx="50" cy="50" fill={circle4} stroke="#93c5fd" stroke-width="1.5"></circle>
        <text x="50" y="57" font-size="17" text-anchor="middle" fill="black">4</text>
        </svg>



        {/* <div className="rounded-full bg-blue-300 border-2 border-blue-300 flex justify-center items-center flex-auto w-6 h-6 p-4"><p>1</p></div> */}
        {/* <div className="rounded-full border-2 border-blue-300 flex justify-center items-center flex-auto w-6 h-6 p-4"><p>2</p></div>
        <div className="rounded-full border-2 border-blue-300 flex justify-center items-center flex-auto w-6 h-6 p-4"><p>3</p></div>
        <div className="rounded-full border-2 border-blue-300 flex justify-center items-center flex-auto w-6 h-6 p-4"><p>4</p></div> */}
      </div>
      {/* <div className="flex justify-items-center inline-">
        <img src={chair} alt=""  className="w-3/5 h-2/5"/>
        <img src={blue} alt=""  className="w-96 block"/>
        <img src={blob} alt="blob"  className="w-96"/>
      </div> */}
     
      
    </header>
  );
};

export default Header;
