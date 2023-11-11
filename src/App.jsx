import './App.css'
import { Container, Stack} from '@mui/material';
import MainContent from './Components/MainContent';


function App() {

    return (
      <>
      <Stack style={{display:"flex", justifyContent:"center",width:"100vw"}}>

        <Container maxWidth="xl">
          <MainContent />
        </Container>
        
      </Stack>
      </>
    );
}

export default App

