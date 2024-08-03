import Header from'./header.js'
import Personal_info from './P_info.js';
import Footer from './footer.js';

function App() {
  return (
  <div className=" bg-gray-100 w-full h-dvh m-0 p-0 relative flex flex-col items-center">
      <Header></Header>
      <Personal_info/>
      <Footer></Footer>
    </div>
  );
}

export default App;
