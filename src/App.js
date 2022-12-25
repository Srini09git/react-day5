import { Button, TextField } from '@mui/material';
import './App.css';

function App() {
  return (
    <div className="App">
      <CreateUser />
    </div>
  );
}

function CreateUser() {
  return (
    <div class="login">
      <h1>Create Account</h1>
      <div className='text-box'>
        <TextField id="outlined-basic" label="Name" variant="outlined" />
        <TextField id="outlined-basic" label="Email" variant="outlined" />
        <TextField id="outlined-basic" label="Phone Number" variant="outlined" />
        <Button variant="contained">Submit</Button>
      </div>
    </div>
  )
}

export default App;
