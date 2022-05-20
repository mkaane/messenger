import './App.css';
import { Route } from "react-router-dom";
import Homepage from './Pages/Homepage';
import ChatPage from './Pages/ChatPage';

function App() {
  return (
    <div className="App">
      <Route path="/" component={Homepage} exact/> {/* exact means: if we go chats, it will show us 
      homepage and chats because chats includes "/" and router will bring us / and /chats*/}
      <Route path="/chats" component={ChatPage} />
    </div>
  );
}

export default App;
