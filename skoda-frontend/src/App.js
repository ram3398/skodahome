import logo from './logo.svg';
import './App.css';
import Mynavbar from './components/Mynavbar';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Products from './components/Products';
import Product from './components/Product';
import Form from './components/Form';
import Feedback from './components/Feedback';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Timber from './components/Timber';

function App() {
  return (
    <div className="App">
      
      {/* <Home/> */}
      {/* <About/> */}
      {/* <Products/> */}
      {/* <Product/> */}
      {/* <Form/> */}
      {/* <Feedback/> */}
      <BrowserRouter>
      <Mynavbar />
      <Routes>
        <Route exact path="/" element={<Home />}/>
          <Route exact path="/products" element={<Products/> } />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/timber" element={<Timber />} />
          <Route exact path="/contact" element={<Form />} />
          <Route exact path="/feedback" element={<Feedback/>} />
          <Route exact path="/products/:id" element={<Product/>} />
      </Routes>
          <Footer/>
    </BrowserRouter>
    </div>
  );
}

export default App;
