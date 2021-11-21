import './App.css';
import Mainarea from './pages/mainarea/Mainarea';
import AuthProvider from './context/AuthProvider';
function App() {
  return (
    <div className="App">
    <AuthProvider>
    <Mainarea/>
    </AuthProvider>
    </div>
  );
}

export default App;
