import './style/home.css';
import '../bootstrap/bootstrap.min.css';
import pic1 from '../imgs/pic_1.jpg';
import pic2 from '../imgs/pic_2.jpg';
import pic3 from '../imgs/pic_3.jpg';
import pic4 from '../imgs/pic_4.jpg';
import img_prd1 from '../imgs/imgs-product/prd-1.jpg';
import img_prd2 from '../imgs/imgs-product/prd-2.jpg';
// import img_prd3 from '../imgs/imgs-product/prd-3.jpg';
// import img_prd4 from '../imgs/imgs-product/prd-4.jpg';
import img_prd5 from '../imgs/imgs-product/prd-5.jpg';
import img_prd6 from '../imgs/imgs-product/prd-6.jpg';
import img_prd7 from '../imgs/imgs-product/prd-7.jpg';
import img_prd8 from '../imgs/imgs-product/prd-8.jpg';
import img_prd9 from '../imgs/imgs-product/prd-9.jpg';
import img_prd10 from '../imgs/imgs-product/prd-10.jpg';
import img_prd11 from '../imgs/imgs-product/prd-11.jpg';
import img_prd12 from '../imgs/imgs-product/prd-12.jpg';
import {Link} from 'react-router-dom';

function Home (){

  return (
    <div className="contain p-2 pb-4">
        {/* <!-- ============ Carousel=========== --> */}
        {/* <div> */}
            <div id="carouselExampleDark" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 4"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="10000">
                <img src={pic1} className="d-block w-100 rounded" alt="My First Product"/>
                {/* <div className="carousel-caption d-none d-md-block">
                    <h2 className="text-white font-weight-bold"><strong><i>STORE KH</i></strong></h2>
                    <p>Some representative placeholder content for the first slide.</p>
                </div> */}
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                <img src={pic2} className="d-block w-100 rounded" alt="My Second Product"/>
                {/* <div className="carousel-caption d-none d-md-block">
                    <h2 className="text-white font-weight-bold"><strong><i>STORE KH</i></strong></h2>
                    <p>Some representative placeholder content for the second slide.</p>
                </div> */}
                </div>
                <div className="carousel-item">
                <img src={pic3} className="d-block w-100 rounded" alt="My Third Product"/>
                {/* <div className="carousel-caption d-none d-md-block">
                    <h2 className="text-white font-weight-bold"><strong><i>STORE KH</i></strong></h2>
                    <p>Some representative placeholder content for the third slide.</p>
                </div> */}
                </div>
                <div className="carousel-item">
                <img src={pic4} className="d-block w-100 rounded" alt="My fourth Product"/>
                {/* <div className="carousel-caption d-none d-md-block">
                    <h2 className="text-white font-weight-bold"><strong><i>STORE KH</i></strong></h2>
                    <p>Some representative placeholder content for the third slide.</p>
                </div> */}
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
            </div>
            {/* =================== Ending of Carousel =================== */}
            <h2 className="ml-3 mt-3 text-left font-weight-bold text-decoration-none text-white"><strong className="bg bg-danger rounded p-2"><i>ASUS Model</i></strong></h2>
            <div className="card-group pt-3"> 
                <div className="col-md-3 d-flex justify-content-center border-dark"> 
                    <div className="card p-2"> 
                        <div className="text-center"> 
                            <img src={img_prd1} className="img-fluid rounded-2" alt="#" /> 
                            <h5 className="pt-2 text-info"> Model : ASUS VivoBook </h5>
                        </div> 
                        <div className="content"> 
                            <div className="d-flex justify-content-between align-items-center"> 
                                <span className="category">Laptop</span> 
                                <span className="price text-danger">$599</span> 
                            </div> 
                            <p>Dell Astro 3044</p> 
                            <div className="buttons d-flex justify-content-center"> 
                                <Link to="/prd_detail" className="text-decoration-none"><button className="btn btn-outline-info mr-3 justify-content-center rounded">More Detail</button></Link>
                                <Link to="/cart" className="text-decoration-none"><button className="btn btn-info justify-content-center rounded">Add to cart</button></Link>
                            </div> 
                        </div> 
                    </div> 
                </div>
                <div className="col-md-3 d-flex justify-content-center border-dark"> 
                    <div className="card p-2"> 
                        <div className="text-center"> 
                            <img src={img_prd2} className="img-fluid rounded-2" alt="#" /> 
                            <h5 className="pt-2 text-info"> Model : ASUS VivoBook </h5>
                        </div> 
                        <div className="content"> 
                            <div className="d-flex justify-content-between align-items-center"> 
                                <span className="category">Laptop</span> 
                                <span className="price text-danger">$599</span> 
                            </div> 
                            <p>Dell Astro 3044</p> 
                            <div className="buttons d-flex justify-content-center"> 
                                <Link to="/prd_detail" className="text-decoration-none"><button className="btn btn-outline-info mr-3 justify-content-center rounded">More Detail</button></Link>
                                <Link to="/cart" className="text-decoration-none"><button className="btn btn-info justify-content-center rounded">Add to cart</button></Link>
                            </div> 
                        </div> 
                    </div> 
                </div>
                <div className="col-md-3 d-flex justify-content-center border-dark"> 
                    <div className="card p-2"> 
                        <div className="text-center"> 
                            <img src={img_prd1} className="img-fluid rounded-2" alt="#" /> 
                            <h5 className="pt-2 text-info"> Model : ASUS VivoBook </h5>
                        </div> 
                        <div className="content"> 
                            <div className="d-flex justify-content-between align-items-center"> 
                                <span className="category">Laptop</span> 
                                <span className="price text-danger">$599</span> 
                            </div> 
                            <p>Dell Astro 3044</p> 
                            <div className="buttons d-flex justify-content-center"> 
                                <Link to="/prd_detail" className="text-decoration-none"><button className="btn btn-outline-info mr-3 justify-content-center rounded">More Detail</button></Link>
                                <Link to="/cart" className="text-decoration-none"><button className="btn btn-info justify-content-center rounded">Add to cart</button></Link>
                            </div> 
                        </div> 
                    </div> 
                </div>
                <div className="col-md-3 d-flex justify-content-center border-dark"> 
                    <div className="card p-2"> 
                        <div className="text-center"> 
                            <img src={img_prd2} className="img-fluid rounded-2" alt="#" /> 
                            <h5 className="pt-2 text-info"> Model : ASUS VivoBook </h5>
                        </div> 
                        <div className="content"> 
                            <div className="d-flex justify-content-between align-items-center"> 
                                <span className="category">Laptop</span> 
                                <span className="price text-danger">$599</span> 
                            </div> 
                            <p>Dell Astro 3044</p> 
                            <div className="buttons d-flex justify-content-center"> 
                                <Link to="/prd_detail" className="text-decoration-none"><button className="btn btn-outline-info mr-3 justify-content-center rounded">More Detail</button></Link>
                                <Link to="/cart" className="text-decoration-none"><button className="btn btn-info justify-content-center rounded">Add to cart</button></Link>
                            </div> 
                        </div> 
                    </div> 
                </div>
            </div> 
            {/* ================ End First Row Product ================== */}
            <h2 className="ml-3 text-left font-weight-bold text-decoration-none text-white pt-5"><strong className="bg bg-danger rounded p-2"><i>MSI Model</i></strong></h2>
            <div className="card-group pt-3"> 
                <div className="col-md-3 d-flex justify-content-center border-dark"> 
                    <div className="card p-2"> 
                        <div className="text-center"> 
                            <img src={img_prd5} className="img-fluid rounded-2" alt="#" /> 
                            <h5 className="pt-2 text-info"> Model : MSI VivoBook </h5>
                        </div> 
                        <div className="content"> 
                            <div className="d-flex justify-content-between align-items-center"> 
                                <span className="category">Laptop</span> 
                                <span className="price text-danger">$599</span> 
                            </div> 
                            <p>Dell Astro 3044</p> 
                            <div className="buttons d-flex justify-content-center"> 
                                <Link to="/prd_detail" className="text-decoration-none"><button className="btn btn-outline-info mr-3 justify-content-center rounded">More Detail</button></Link> 
                                <Link to="/cart" className="text-decoration-none"><button className="btn btn-info justify-content-center rounded">Add to cart</button></Link>
                            </div> 
                        </div> 
                    </div> 
                </div>
                <div className="col-md-3 d-flex justify-content-center border-dark"> 
                    <div className="card p-2"> 
                        <div className="text-center"> 
                            <img src={img_prd6} className="img-fluid rounded-2" alt="#" /> 
                            <h5 className="pt-2 text-info"> Model : MSI VivoBook </h5>
                        </div> 
                        <div className="content"> 
                            <div className="d-flex justify-content-between align-items-center"> 
                                <span className="category">Laptop</span> 
                                <span className="price text-danger">$599</span> 
                            </div> 
                            <p>Dell Astro 3044</p> 
                            <div className="buttons d-flex justify-content-center"> 
                                <Link to="/prd_detail" className="text-decoration-none"><button className="btn btn-outline-info mr-3 justify-content-center rounded">More Detail</button></Link>
                                <Link to="/cart" className="text-decoration-none"><button className="btn btn-info justify-content-center rounded">Add to cart</button></Link>
                            </div> 
                        </div> 
                    </div> 
                </div>
                <div className="col-md-3 d-flex justify-content-center border-dark"> 
                    <div className="card p-2"> 
                        <div className="text-center"> 
                            <img src={img_prd7} className="img-fluid rounded-2" alt="#" /> 
                            <h5 className="pt-2 text-info"> Model : MSI VivoBook </h5>
                        </div> 
                        <div className="content"> 
                            <div className="d-flex justify-content-between align-items-center"> 
                                <span className="category">Laptop</span> 
                                <span className="price text-danger">$599</span> 
                            </div> 
                            <p>Dell Astro 3044</p> 
                            <div className="buttons d-flex justify-content-center"> 
                                <Link to="/prd_detail" className="text-decoration-none"><button className="btn btn-outline-info mr-3 justify-content-center rounded">More Detail</button></Link>
                                <Link to="/cart" className="text-decoration-none"><button className="btn btn-info justify-content-center rounded">Add to cart</button></Link>
                            </div> 
                        </div> 
                    </div> 
                </div>
                <div className="col-md-3 d-flex justify-content-center border-dark"> 
                    <div className="card p-2"> 
                        <div className="text-center"> 
                            <img src={img_prd8} className="img-fluid rounded-2" alt="#" /> 
                            <h5 className="pt-2 text-info"> Model : MSI VivoBook </h5>
                        </div> 
                        <div className="content"> 
                            <div className="d-flex justify-content-between align-items-center"> 
                                <span className="category">Laptop</span> 
                                <span className="price text-danger">$599</span> 
                            </div> 
                            <p>Dell Astro 3044</p> 
                            <div className="buttons d-flex justify-content-center"> 
                                <Link to="/prd_detail" className="text-decoration-none"><button className="btn btn-outline-info mr-3 justify-content-center rounded">More Detail</button></Link>
                                <Link to="/cart" className="text-decoration-none"><button className="btn btn-info justify-content-center rounded">Add to cart</button></Link>
                            </div> 
                        </div> 
                    </div> 
                </div>
            </div> 
            {/* ================ End Second Row Product ================== */}
            <h2 className="ml-3 text-left font-weight-bold text-decoration-none text-white pt-5"><strong className="bg bg-danger rounded p-2"><i>APPLE Model</i></strong></h2>
            <div className="card-group pt-3"> 
                <div className="col-md-3 d-flex justify-content-center border-dark"> 
                    <div className="card p-2"> 
                        <div className="text-center"> 
                            <img src={img_prd9} className="img-fluid rounded-2" alt="#" /> 
                            <h5 className="pt-2 text-info"> Model : APPLE VivoBook </h5>
                        </div> 
                        <div className="content"> 
                            <div className="d-flex justify-content-between align-items-center"> 
                                <span className="category">Laptop</span> 
                                <span className="price text-danger">$599</span> 
                            </div> 
                            <p>Dell Astro 3044</p> 
                            <div className="buttons d-flex justify-content-center"> 
                                <Link to="/prd_detail" className="text-decoration-none"><button className="btn btn-outline-info mr-3 justify-content-center rounded">More Detail</button></Link>
                                <Link to="/cart" className="text-decoration-none"><button className="btn btn-info rounded justify-content-center">Add to cart</button></Link>
                            </div> 
                        </div> 
                    </div> 
                </div>
                <div className="col-md-3 d-flex justify-content-center border-dark"> 
                    <div className="card p-2"> 
                        <div className="text-center"> 
                            <img src={img_prd10} className="img-fluid rounded-2" alt="#" /> 
                            <h5 className="pt-2 text-info"> Model : APPLE VivoBook </h5>
                        </div> 
                        <div className="content"> 
                            <div className="d-flex justify-content-between align-items-center"> 
                                <span className="category">Laptop</span> 
                                <span className="price text-danger">$599</span> 
                            </div> 
                            <p>Dell Astro 3044</p> 
                            <div className="buttons d-flex justify-content-center"> 
                                <Link to="/prd_detail" className="text-decoration-none"><button className="btn btn-outline-info mr-3 justify-content-center rounded">More Detail</button></Link>
                                <Link to="/cart" className="text-decoration-none"><button className="btn btn-info justify-content-center rounded">Add to cart</button></Link>
                            </div> 
                        </div> 
                    </div> 
                </div>
                <div className="col-md-3 d-flex justify-content-center border-dark"> 
                    <div className="card p-2"> 
                        <div className="text-center"> 
                            <img src={img_prd11} className="img-fluid rounded-2" alt="#" /> 
                            <h5 className="pt-2 text-info"> Model : APPLE VivoBook </h5>
                        </div> 
                        <div className="content"> 
                            <div className="d-flex justify-content-between align-items-center"> 
                                <span className="category">Laptop</span> 
                                <span className="price text-danger">$599</span> 
                            </div> 
                            <p>Dell Astro 3044</p> 
                            <div className="buttons d-flex justify-content-center"> 
                                <Link to="/prd_detail" className="text-decoration-none"><button className="btn btn-outline-info mr-3 justify-content-center rounded">More Detail</button></Link>
                                <Link to="/cart" className="text-decoration-none"><button className="btn btn-info justify-content-center rounded">Add to cart</button></Link>
                            </div> 
                        </div> 
                    </div> 
                </div>
                <div className="col-md-3 d-flex justify-content-center border-dark"> 
                    <div className="card p-2"> 
                        <div className="text-center"> 
                            <img src={img_prd12} className="img-fluid rounded-2" alt="#" /> 
                            <h5 className="pt-2 text-info"> Model : APPLE VivoBook </h5>
                        </div> 
                        <div className="content"> 
                            <div className="d-flex justify-content-between align-items-center"> 
                                <span className="category">Laptop</span> 
                                <span className="price text-danger">$599</span> 
                            </div> 
                            <p>Dell Astro 3044</p> 
                            <div className="buttons d-flex justify-content-center"> 
                                <Link to="/prd_detail" className="text-decoration-none"><button className="btn btn-outline-info mr-3 justify-content-center rounded">More Detail</button></Link>
                                <Link to="/cart" className="text-decoration-none"><button className="btn btn-info justify-content-center rounded">Add to cart</button></Link>
                            </div> 
                        </div> 
                    </div> 
                </div>
            </div>
            {/* ================ End Third Row Product ================== */}
        {/* </div> */}
    </div>
  );
}

export default Home;
