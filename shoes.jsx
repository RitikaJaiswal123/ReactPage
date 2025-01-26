import { useEffect, useState } from "react";
import './shoes.css';
import axios from "axios";
export function Amazonshoes() {
    const [product, setproduct] = useState({ heading: "", title: "", price: 0, rating: { rating: 0, rate: 0, review: 0 }, offer1: [], offer2: [], offer3: [], offer4: [], service1: [], service2: [], service3: [], service4: [], service5: [], service6: [], Productdetails: { Materialtype: "", Heeltype: "", Style: "", CountryOfOrigin: "" }, image: "", images: [], colorbank: [] });
    const [PreviewImg, setPreviewImg] = useState('shoes1.png')
    function loaddata() {
        //this is XMLHttp
        // var http = new XMLHttpRequest();

        // http.open("get", "product.json", true);
        // http.send();

        // http.onreadystatechange = function () {
        //     if (http.readyState === 4) {
        //         setproduct(JSON.parse(http.responseText));
        //     }
        // }

        //this is Axios
        axios.get('product.json').then(response => {
            setproduct(response.data);
        })
    }
    useEffect(() => {
        loaddata();
    }, [])
    useEffect(() => {
        axios.get('product.json').then(response => {
            setproduct(response.data);
        })
    }, []);
    function MouseOver(e) {
        setPreviewImg(e.target.src);
    }
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-1">
                    {
                        product.images.map(item =>
                            <div className="my-3 boximg" key={item.img}><img onMouseOver={MouseOver} width="100%" height="100%" src={item.img} /></div>
                        )
                    }
                </div>
                <div className="col-5">
                    <img width="100%" height="600" src={PreviewImg} />

                </div>
                <div className="col-6">
                    <div className="text-success">{product.heading}</div>
                    <div className="fs-3 fw-bold">{product.title}</div>
                    <div> <span className=" badge  border border-dark text-dark fs-6">{product.rating.rate} <span className="bi bi-star-fill text-warning"></span><span className="bi bi-star-fill text-warning"></span><span className="bi bi-star-fill text-warning"></span>
                        <span className="bi bi-star-fill text-warning"></span><span className="bi bi-star text-warning"></span></span>
                        <span className="text-success fw-bold">{product.rating.rating.toLocaleString()} ratings | review <span>{product.rating.review.toLocaleString()}</span> </span></div>
                    <div className="fs-3 fw-bold">{product.price.toLocaleString('en-in', { style: 'currency', currency: 'INR' })} </div>
                    <div className=" fs-5 ">Inclusive of all taxes <br></br>
                        EMI starts at ₹109 per month <span className="fw-bold">EMI OPTION</span>
                    </div>
                    <h4 className="bi bi-sun-fill border-bottom mt-2">Offer</h4>
                    <div className="card-container">
                        <div className="card1">
                            <h5 className="bestoffer">Best Offer</h5>
                            {product.offer1}
                        </div>
                        <div className="card1">
                            <h5 className="bestoffer">Partner Offer</h5>
                            {product.offer2}
                        </div>
                        <div className="card1">
                            <h5 className="bestoffer">Festival Offer</h5>
                            {product.offer3}
                        </div>
                        <div className="card1">
                            <h5 className="bestoffer">Offers</h5>
                            {product.offer4}
                        </div>
                    </div>
                    <h3 className="bi bi-star mt-2 border-bottom"> Services</h3>
                    <div className="service-container">
                        <div className="bi bi-currency-exchange s1 ">
                            <div>{product.service1}</div>
                        </div>
                        <div className="bi bi-credit-card s1 ">
                            <div>{product.service2}</div>
                        </div>
                        <div className="bi bi-car-front s1 ">
                            <div>{product.service3}</div>
                        </div>
                        <div className="bi bi-star-fill s1 ">
                            <div>{product.service4}</div>
                        </div>
                        <div className="bi bi-award s1 ">
                            <div>{product.service5}</div>
                        </div>
                        <div className="bi bi-bank s1 ">
                            <div>{product.service6}</div>
                        </div>
                    </div>
                    <h5 className="mt-3 border-bottom">Color:black/pink</h5>
                    <div className="color">
                        {
                            product.colorbank.map(item =>
                                <div className="my-3 boximg " key={item.image}><img onMouseOver={MouseOver} width="100%" height="100%" src={item.image} /></div>
                            )
                        }
                    </div>
                </div>


            </div>
        </div>
    )

}



