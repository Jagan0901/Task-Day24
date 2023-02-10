import { useState } from 'react';
import Rating from '@mui/material/Rating';

export function Product({ card }) {

    const [cart,setCart] = useState(0);
    const [show,setShow] = useState(true);
  return (
    <div>
        <h6>{cart}</h6>
      <div className="col mb-5">
        <div className="card h-100">
          {card.sale ? (
            <div
              className="badge bg-dark text-white position-absolute"
              style={{ top: "0.5rem", right: "0.5rem" }}
            >
              Sale
            </div>
          ) : (
            <div></div>
          )}
          {/* <!-- Product image--> */}
          <img
            className="card-img-top"
            src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
            alt="..."
          />
          {/* <!-- Product details--> */}
          <div className="card-body p-4">
            <div className="text-center">
              {/* <!-- Product name--> */}
              <h5 className="fw-bolder">{card.type}</h5>
              {card.ratingExists ? 
              <div>
              <Rating
               name="read-only"
               size="small"
               value={card.rating}
               readOnly
              />
            </div> :
            <></>              
            }

              
              {/* <!-- Product price--> */}

              <span className="text-muted text-decoration-line-through">
                {card.slashedPrice}
              </span>
              {" " + card.price}
            </div>
          </div>
          {/* <!-- Product actions--> */}
          <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div className="text-center">
                {show ?
              <button
              className="btn btn-outline-dark mt-auto"
              onClick={() => {
                  setCart(cart+1)
                  setShow(!show)
              }
              }
            >
              Add to cart
            </button> :
              <button
              className="btn btn-outline-dark mt-auto"
              onClick={() => {
                  setCart(cart-1)
                  setShow(!show)
              }
              }
            >
              Remove cart
            </button>                                 
            }

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
