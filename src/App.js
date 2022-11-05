import {Provider} from "react-redux"
import './App.css';
import { Landing } from './Components/Landing';
import { Card,CardContent } from '@mui/material';
import {configStore} from "./State/Store/configStore";


function App() {
  const localStore=configStore()
  return (
    <div className="App">
      <Provider store={localStore}>
      <Card>
        <CardContent>
       <Landing/>
       </CardContent>
       </Card>
       </Provider >
    </div>
  );
}

export default App;
