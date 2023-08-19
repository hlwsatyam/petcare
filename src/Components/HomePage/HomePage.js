import React from "react";
import "./HomePage.css";
import Carousel from 'react-bootstrap/Carousel';
import { useNavigate } from "react-router-dom";
function HomePage() {
  const navigate=useNavigate()
  const shopNow=()=>{
navigate("/shop")
  }
  return (
    <>
      <div className="container-fluid">
        <div className="row mt-5">

          <Carousel>
            <Carousel.Item>
              <div className="carosel-box">
                <img
                  className="d-block w-100 corouselImage"
                  src="https://getvetco.com/wp-content/uploads/2023/06/monsooncorr1-1000-%C3%97-250-px-pichi.jpg"
                  alt="First slide"
                />
              </div>
              <Carousel.Caption>
                {/* <h3>Slide 1 Title</h3>
            <p>Slide 1 Description</p> */}
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <div className="carosel-box">
                <img
                  className="d-block w-100 corouselImage"
                  src="https://static.vecteezy.com/system/resources/previews/007/301/684/original/pet-shop-banner-design-template-cartoon-illustration-of-cats-dogs-house-food-vector.jpg"
                  alt="First slide"
                />
              </div>
              <Carousel.Caption>
                <button src="" onClick={shopNow} className="btn bg-warning">Shop Now</button>
              </Carousel.Caption>
            </Carousel.Item>


            <Carousel.Item>
              <div className="carosel-box">
                <img
                  className="d-block w-100"
                  src="https://www.dewangandogkennel.com/images/petshop/pet-food-shop-in-chhattisgarh.webp"
                  alt="g"
                />
              </div>
              <Carousel.Caption>
                <button src="" className="btn bg-warning">View more</button>
              </Carousel.Caption>
            </Carousel.Item>

          </Carousel>
        </div>
        <div className="col-md-12 text-center">
          <div className="home-page">



            <section className="featured-pet">
              <div className="container">
                <div className="row">
                  <div className="col-md-6 pet-info">
                    <h2>Meet Our Featured Pet</h2>
                    <p className="pet-description">Adopt a loyal friend today!</p>
                    <a target="blank" href="https://a-z-animals.com/animals/" className="adopt-button">Adopt Now</a>
                  </div>
                  <div className="col-md-6 pet-image">
                    <img src="https://images.yourstory.com/cs/7/4c455a90a21411e98b07315772315642/PLACEHOLDER-1596778931142.png?w=1152&fm=auto&ar=2:1&mode=crop&crop=faces" alt="Featured Pet" />
                  </div>
                </div>
              </div>
            </section>



            <header className="header">
              <div className="overlay">
                <h1 className="logo">PetCare Hub</h1>
                <p className="slogan">Your Pet's Wellbeing, Our Priority</p>
              </div>
            </header></div>



          <section className=" text-center services">
            <div className="container-fluid  ">
              <h2 className="section-title">Our Services</h2>
              <div className="container">
                <div className="card-group ">
                  <div className="card m-2 ">
                    <img src="https://nationaltoday.com/wp-content/uploads/2019/02/national-pet-week-1200x834.jpg.webp" alt="Petcare Tips" />
                    <h3>Petcare Tips</h3>
                    <p>Expert advice and tips to keep your pet happy and healthy.</p>
                  </div>
                  <div className="card  m-2">
                    <img src="https://images.ctfassets.net/82d3r48zq721/1FSNHK1W5fkwxiZ66GFae6/79aed0ae7c3c07f5bc246d7351b84d3f/Dog-during-vet-visit_resized.jpg?w=800&q=50" alt="Training" />
                    <h3>Training</h3>
                    <p>Professional training to enhance your pet's behavior and skills.</p>
                  </div>
                  <div className="card   m-2">
                    <img src="https://media.npr.org/assets/img/2022/01/12/lk_trainyourdog-14-da045a0b37c5fb4d0fc72b4daeb951eb769db887.jpg" alt="Veterinary Care" />
                    <h3>Veterinary Care</h3>
                    <p>Comprehensive medical care for your pet's wellbeing.</p>
                  </div>
                  <div className="card  m-2">
                    <img src="
                    https://img.freepik.com/premium-photo/female-is-grooming-trimming-pomeranian-spitz-salon_175086-1197.jpg
                    " alt="Grooming" />
                    <h3>Grooming</h3>
                    <p>Pamper your pet with our grooming services.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="  d-flex align-items-center justify-content-center   ">
            <input placeholder="Enter Your Email..." type="email" className=" m-1  p-2 border border-rounded"  ></input>
            <button type="submit" className="m-1 btn btn-secondary btn-outline">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default HomePage;