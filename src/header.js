import chair from './assets/chair.svg'
import blue from './assets/blue.svg'
import blob from './assets/blob.svg'

const Header = () => {
  return (
    <header className="App-header w-full h-1/4 relative overflow-hidden shadow-inner bg-gradient-to-r from-blue-800 to-cyan-800 hover:bg-gradient-to-l">
      <div className='absolute '>

      </div>
      <div className="flex justify-items-center">
        <img src={chair} alt=""  className="w-3/5 h-2/5"/>
        <img src={blue} alt=""  className="w-96 block"/>
        {/* <img src={blob} alt="blob"  className="w-96"/> */}
      </div>
     
      
    </header>
  );
};

export default Header;
