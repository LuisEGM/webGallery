import React from 'react'
import Header from '../../components/header'
import ObraHome from '../../assets/obra-home.svg'
import Banner from '../../assets/banner.svg'
import Slider1 from '../../assets/Slider1.svg'
import Slider2 from '../../assets/Slider2.svg'
import Slider3 from '../../assets/Slider3.svg'
import Footer from '../../components/footer'

const Home = () => {
    return (
        <>
            <Header location={"HOME"} />
            <div className="container">
                <div className="row" style={{ paddingTop: '7rem' }} >
                    <div className="col-md-7 d-flex">
                        <div style={{width: '80%', height: '50%', margin: '0 auto' }}>
                            <h1 className="texto" style={{fontSize: 40, fontWeight: 'bold'}}>Bienvenid@ a WebGallery</h1>
                            <p style={{fontSize: 25, fontWeight: 'bold'}} >Si eres amante al arte y quieres adquirir o promocionar tus cuadros, has llegado al lugar correcto.</p>
                            <button class="btn btn-lg" style={{marginRight: '10px', background: '#EB72E7', color: 'white'}} type="button">Registrate ahora</button>
                            <button class="btn btn-lg btn-primary" type="button">Inicia session</button>
                        </div>
                    </div>
                    <div className="col-md-5 mt-2">
                        <div className="w-80">
                            <img src={ObraHome} alt="logo4" width="300px" />
                        </div>
                    </div>
                </div>
            </div>
            <div style={{width: '100%', height: '420px', overflow: 'hidden'}}>
                <img src={Banner}  alt="logo5" />
            </div>
            <div className="container">
                <div className="col-md-7 mb-5">
                    <div style={{ width: '80%', height: '50%', margin: '0 auto' }}>
                        <h2 className="texto" style={{fontSize: 40, fontWeight: 'bold', marginTop: 0}}>OBRAS DESTACADAS</h2>
                        <p style={{fontSize: 23, fontWeight: 'bold'}} >Lo que sea que busques en cuanto a arte, aquí lo podras encontrar.</p>
                    </div>
                </div>
            </div>
            <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active" data-bs-interval="2000">
                        <img src={Slider1} class="d-block w-100" alt="slide1"/>
                    </div>
                    <div class="carousel-item" data-bs-interval="2000">
                        <img src={Slider2} class="d-block w-100" alt="slide2"/>
                    </div>
                    <div class="carousel-item" data-bs-interval="2000">
                        <img src={Slider3} class="d-block w-100" alt="slide3"/>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
            <div style={{ textAlign: 'center', margin: '80px 0 -150px 0' }}>
                <h2 className="texto" style={{fontSize: 25, fontWeight: 'bold'}}>Un mensaje de publicidad</h2>
                <p style={{fontSize: 20, fontWeight: 'bold'}} >Una descripción del gingle de publicidad.</p>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0E2741" fill-opacity="1" d="M0,256L80,250.7C160,245,320,235,480,245.3C640,256,800,288,960,293.3C1120,299,1280,277,1360,266.7L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
            <Footer/>
        </>
    )
}

export default Home
