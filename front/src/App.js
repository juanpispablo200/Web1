import logo from './logo.svg';
import './App.css';
import { Button, Input, InputAdornment, ListItemIcon, ListItemText, MenuItem, MenuList } from '@mui/material';
import InicioIcon from '@mui/icons-material/Home';
import TareasIcon from'@mui/icons-material/Book';
import BusquedaIcon from'@mui/icons-material/Search';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
       <MenuList>
        <MenuItem> 
        <ListItemIcon> <InicioIcon></InicioIcon> </ListItemIcon>
        <ListItemText>Inicio</ListItemText>
        </MenuItem>
        <MenuItem> 
        <ListItemIcon> <TareasIcon></TareasIcon> </ListItemIcon>
        <ListItemText>Tareas</ListItemText>
        </MenuItem>
        <MenuItem> 
        <ListItemText>Correo</ListItemText>
        </MenuItem>
       </MenuList>
       </div>
       <div>
        <Input id="input-with-icon-adornment"
          startAdornment={
        <InputAdornment position="start">
        <BusquedaIcon></BusquedaIcon>
        </InputAdornment>
       }
       />
        </div>
      </header>
    </div>
  );
}

export default App;
