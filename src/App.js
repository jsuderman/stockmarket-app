import './App.css';
import Header from "./components/Header/Header";
import Feed from "./components/Feed/Feed";
import Stats from "./components/Stats/Stats"

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__body">
        <Feed />  
        <Stats />
      </div>
      
      
    </div>
  );
}

export default App;
