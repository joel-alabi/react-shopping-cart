import React from 'react';


function Product() {
  return (
    <div className="container-fluid">
    <h1 className="joel" style={{textAlign:"center",fontStyle:"italic",fontSize:"3.5em"}}>GRAJOE ENTERPRICE AND ACCESSORIES</h1>
      <div className="row">
          <div className="col-2">
            <p><h5>16 Product(s) found</h5></p>
          </div>
          <div className="col-8"></div>
          <div className="col-2">
          <label for="order-by">
                Order by
                <select name="" id="order-selection">
                    <option value="">Size</option>
                    <option value="">Gender</option>
                    <option value="">Price</option>
                </select>
            </label>
          </div>
      </div>
 <div className="main-product-container">
        <div className='Container'>
          <div className='row'>
            <div className='col-3'>
              <div className="card">
                <div className="card__percent"><h6>free shipping</h6></div>
                <div className="card__image-container">
                  <img className="card__image" src="/laptop.jpg" alt="Bag" />
                </div>
                <div className="card__text">
                  <h1 className="card__text--heading"> Laptop</h1>
                  <div className="bar"></div>
                  <p className="card__text--paragraph">1 pc(s)</p>
                </div>

                <div className="card__price">
                  <h3 className="card__price-amount">
                    <span className="card__price-amount--old">$200</span>
                    <span className="card__price-amount--new">$160</span>
                  </h3>

                </div>
                <button class="add-to-cart">Add to cart</button>
              </div>
            </div>
            <div className='col-3'>
              <div className="card">
                <div className="card__percent"><h6>free shipping</h6></div>
                <div className="card__image-container">
                  <img className="card__image" src="/purse.jpg" alt="Bag" />
                </div>

                <div className="card__text">
                  <h1 className="card__text--heading">mhicky purse</h1>
                  <p className="card__text--paragraph">10 pc(s)</p>
                </div>

                <div className="card__price">
                  <h3 className="card__price-amount">
                    <span className="card__price-amount--old">$260</span>
                    <span className="card__price-amount--new">$150</span>
                  </h3>
                </div>
                <button class="add-to-cart">Add to cart</button>
              </div>
            </div>
            <div className='col-3'>
              <div className="card">
                <div className="card__percent"><h6>free shipping</h6></div>
                <div className="card__image-container">
                  <img className="card__image" src="/bag 2.jpg" alt="Bag" />
                </div>

                <div className="card__text">
                  <h1 className="card__text--heading">Bag</h1>
                  <p className="card__text--paragraph">5 pc(s)</p>
                </div>

                <div className="card__price">
                  <h3 className="card__price-amount">
                    <span className="card__price-amount--old">$400</span>
                    <span className="card__price-amount--new">$1260</span>
                  </h3>
                </div>
                <button class="add-to-cart">Add to cart</button>
              </div>
            </div>
            <div className='col-3'>
              <div className="card">
                <div className="card__percent"><h6>free shipping</h6></div>
                <div className="card__image-container">
                  <img className="card__image" src="/phone.jpg" alt="Bag" />
                </div>

                <div className="card__text">
                  <h1 className="card__text--heading">phones</h1>
                  <p className="card__text--paragraph">3 pc(s)</p>
                </div>

                <div className="card__price">
                  <h3 className="card__price-amount">
                    <span className="card__price-amount--old">$320</span>
                    <span className="card__price-amount--new">$260</span>
                  </h3>
                </div>
                <button class="add-to-cart">Add to cart</button>
              </div>
            </div>
            <div className='col-3'>
              <div className="card">
                <div className="card__percent"><h6>free shipping</h6></div>
                <div className="card__image-container">
                  <img className="card__image" src="/camera.jpg" alt="Bag" />
                </div>

                <div className="card__text">
                  <h1 className="card__text--heading"> canon camera</h1>
                  <p className="card__text--paragraph">5 pc(s)</p>
                </div>

                <div className="card__price">
                  <h3 className="card__price-amount">
                    <span className="card__price-amount--old">$42.0</span>
                    <span className="card__price-amount--new">$41.0</span>
                  </h3>
                </div>
                <button class="add-to-cart">Add to cart</button>
              </div>
           </div>
            <div className='col-3'>
              <div className="card">
                <div className="card__percent"><h6>free shipping</h6></div>
                <div className="card__image-container">
                  <img className="card__image" src="/camera 2.jpg" alt="Bag" />
                </div>

                <div className="card__text">
                  <h1 className="card__text--heading"> camera</h1>
                  <p className="card__text--paragraph">24 pc(s)</p>
                </div>

                <div className="card__price">
                  <h3 className="card__price-amount">
                    <span className="card__price-amount--old">$72.0</span>
                    <span className="card__price-amount--new">$51.0</span>
                  </h3>
                </div>
                <button class="add-to-cart">Add to cart</button>
              </div>
            </div>
            <div className='col-3'>
              <div className="card">
                <div className="card__percent"><h6>free shipping</h6></div>
                <div className="card__image-container">
                  <img className="card__image" src="/shoe.jpg" alt="Bag" />
                </div>

                <div className="card__text">
                  <h1 className="card__text--heading">kicks </h1>
                  <p className="card__text--paragraph">26 pc(s)</p>
                </div>

                <div className="card__price">
                  <h3 className="card__price-amount">
                    <span className="card__price-amount--old">$1,220</span>
                    <span className="card__price-amount--new">$1,010</span>
                  </h3>
                </div>
                <button class="add-to-cart">Add to cart</button>
              </div>
            </div>
            <div className='col-3'>
              <div className="card">
                <div className="card__percent"><h6>free shipping</h6></div>
                <div className="card__image-container">
                  <img className="card__image" src="/shoe 2.jpg" alt="Bag" />
                </div>

                <div className="card__text">
                  <h1 className="card__text--heading">Stephen shoes</h1>
                  <p className="card__text--paragraph">42 pc(s)</p>
                </div>

                <div className="card__price">
                  <h3 className="card__price-amount">
                    <span className="card__price-amount--old">$1,520</span>
                    <span className="card__price-amount--new">$1,310</span>
                  </h3>
                </div>
                <button class="add-to-cart">Add to cart</button>
              </div>
            </div>
             <div className='col-3'>
              <div className="card">
                <div className="card__percent"><h6>free shipping</h6></div>
                <div className="card__image-container">
                  <img className="card__image" src="/shoe 2.jpg" alt="Bag" />
                </div>

                <div className="card__text">
                  <h1 className="card__text--heading">Stephen shoes</h1>
                  <p className="card__text--paragraph">42 pc(s)</p>
                </div>

                <div className="card__price">
                  <h3 className="card__price-amount">
                    <span className="card__price-amount--old">$1,520</span>
                    <span className="card__price-amount--new">$1,310</span>
                  </h3>
                </div>
                <button class="add-to-cart">Add to cart</button>
              </div>
            </div>
             <div className='col-3'>
              <div className="card">
                <div className="card__percent"><h6>free shipping</h6></div>
                <div className="card__image-container">
                  <img className="card__image" src="/shoe 2.jpg" alt="Bag" />
                </div>

                <div className="card__text">
                  <h1 className="card__text--heading">Stephen shoes</h1>
                  <p className="card__text--paragraph">42 pc(s)</p>
                </div>

                <div className="card__price">
                  <h3 className="card__price-amount">
                    <span className="card__price-amount--old">$1,520</span>
                    <span className="card__price-amount--new">$1,310</span>
                  </h3>
                </div>
                <button class="add-to-cart">Add to cart</button>
              </div>
            </div>
             <div className='col-3'>
              <div className="card">
                <div className="card__percent"><h6>free shipping</h6></div>
                <div className="card__image-container">
                  <img className="card__image" src="/shoe 2.jpg" alt="Bag" />
                </div>

                <div className="card__text">
                  <h1 className="card__text--heading">Stephen shoes</h1>
                  <p className="card__text--paragraph">42 pc(s)</p>
                </div>

                <div className="card__price">
                  <h3 className="card__price-amount">
                    <span className="card__price-amount--old">$1,520</span>
                    <span className="card__price-amount--new">$1,310</span>
                  </h3>
                </div>
                <button class="add-to-cart">Add to cart</button>
              </div>
            </div>
             <div className='col-3'>
              <div className="card">
                <div className="card__percent"><h6>free shipping</h6></div>
                <div className="card__image-container">
                  <img className="card__image" src="/shoe 2.jpg" alt="Bag" />
                </div>

                <div className="card__text">
                  <h1 className="card__text--heading">Stephen shoes</h1>
                  <p className="card__text--paragraph">42 pc(s)</p>
                </div>

                <div className="card__price">
                  <h3 className="card__price-amount">
                    <span className="card__price-amount--old">$1,520</span>
                    <span className="card__price-amount--new">$1,310</span>
                  </h3>
                </div>
                <button class="add-to-cart">Add to cart</button>
              </div>
            </div>
             <div className='col-3'>
              <div className="card">
                <div className="card__percent"><h6>free shipping</h6></div>
                <div className="card__image-container">
                  <img className="card__image" src="/shoe 2.jpg" alt="Bag" />
                </div>

                <div className="card__text">
                  <h1 className="card__text--heading">Stephen shoes</h1>
                  <p className="card__text--paragraph">42 pc(s)</p>
                </div>

                <div className="card__price">
                  <h3 className="card__price-amount">
                    <span className="card__price-amount--old">$1,520</span>
                    <span className="card__price-amount--new">$1,310</span>
                  </h3>
                </div>
                <button class="add-to-cart">Add to cart</button>
              </div>
            </div>
             <div className='col-3'>
              <div className="card">
                <div className="card__percent"><h6>free shipping</h6></div>
                <div className="card__image-container">
                  <img className="card__image" src="/shoe 2.jpg" alt="Bag" />
                </div>

                <div className="card__text">
                  <h1 className="card__text--heading">Stephen shoes</h1>
                  <p className="card__text--paragraph">42 pc(s)</p>
                </div>

                <div className="card__price">
                  <h3 className="card__price-amount">
                    <span className="card__price-amount--old">$1,520</span>
                    <span className="card__price-amount--new">$1,310</span>
                  </h3>
                </div>
                <button class="add-to-cart">Add to cart</button>
              </div>
            </div>
             <div className='col-3'>
              <div className="card">
                <div className="card__percent"><h6>free shipping</h6></div>
                <div className="card__image-container">
                  <img className="card__image" src="/shoe 2.jpg" alt="Bag" />
                </div>

                <div className="card__text">
                  <h1 className="card__text--heading">Stephen shoes</h1>
                  <p className="card__text--paragraph">42 pc(s)</p>
                </div>

                <div className="card__price">
                  <h3 className="card__price-amount">
                    <span className="card__price-amount--old">$1,520</span>
                    <span className="card__price-amount--new">$1,310</span>
                  </h3>
                </div>
                <button class="add-to-cart">Add to cart</button>
              </div>
            </div>
            <div className='col-3'>
              <div className="card">
                <div className="card__percent"><h6>free shipping</h6></div>
                <div className="card__image-container">
                  <img className="card__image" src="/phone.jpg" alt="Bag" />
                </div>

                <div className="card__text">
                  <h1 className="card__text--heading">phone</h1>
                  <p className="card__text--paragraph">5 pc(s)</p>
                </div>

                <div className="card__price">
                  <h3 className="card__price-amount">
                    <span className="card__price-amount--old">$50.0</span>
                    <span className="card__price-amount--new">$41.0</span>
                  </h3>
                </div>
                <button class="add-to-cart">Add to cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
     

    </div>
  );
}

export default Product;