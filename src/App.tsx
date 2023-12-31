import { BrowserRouter as Router } from 'react-router-dom';
import Header from "./components/Navbar/Header"
import AppRoutes from "./routes/AppRoutes"
import Footer from "./components/Footer/Footer"

import Loader from './components/Loader/Loader';
import { Suspense } from 'react';
import { Container } from 'react-bootstrap';


function App () {
  return (
    <>

      <Router>

        <Header/>
            
            <Container style={{minHeight: '100vh', minWidth: '100%', padding: '0'}}>
               <Suspense fallback={<Loader/>}>
                  <AppRoutes/>
               </Suspense>

            </Container>

              
               
         <Footer/>

      </Router>
     

        
        
    </>

  )
}

export default App