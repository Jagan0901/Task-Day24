import './App.css';
import { Footer } from './Components/Footer';
import { Home } from './Components/Home';
import { Navigation } from './Components/Navigation';
import { Product } from './Components/Product';


const productDetails = [
  {
    type: "Fancy Product",
    sale:false,
    rating:null,
    ratingExists:false,
    price : "$40.00 - $80.00",
    slashedPrice:""
  },
  {
    type: "Special Item",
    sale:true,
    rating:5,
    ratingExists:true,
    price : "$18.00",
    slashedPrice:"$20.00"
  },
  {
    type: "Sale Item",
    sale:true,
    rating:null,
    ratingExists:false,
    price : "$25.00",
    slashedPrice:"$50.00"
  },
  {
    type: "Popular Item",
    sale:false,
    rating:5,
    ratingExists:true,
    price : "$40.00",
    slashedPrice:""
  },
  {
    type: "Sale Item",
    sale:true,
    rating:null,
    ratingExists:false,
    price : "$25.00",
    slashedPrice:"$50.00"
  },
  {
    type: "Fancy Product",
    sale:false,
    rating:null,
    ratingExists:false,
    price : "$120.00 - $280.00",
    slashedPrice:""
  },
  {
    type: "Special Item",
    sale:true,
    rating:5,
    ratingExists:true,
    price : "$18.00",
    slashedPrice:"$20.00"
  },
  {
    type: "Popular Item",
    sale:false,
    rating:5,
    ratingExists:true,
    price : "$40.00",
    slashedPrice:""
  },              
]

function App() {
  return (
    <div >
       <Navigation/>
       <Home/>
       <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          {productDetails.map((pd,index)=><Product card ={pd} key = {index}/>)}
          </div>
        </div>
      </section>
       <Footer/>
    </div>
  );
}

export default App;
