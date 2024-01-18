import './style.scss'
import CarouselComponent from '../common/CarouselComponent/CarouselComponent.jsx'
import Img_1 from '../../assets/images/1.png'
import Img_2 from '../../assets/images/2.png'
import Img_3 from '../../assets/images/3.png'

function Home() {
    const images = [Img_1, Img_2, Img_3]
    return (
        <div className="home-wrapper">
            <CarouselComponent images={images} blurred>
                <div className="text-wrapper">
                    <p id="title">
                        Exclusive Deals Of <br />
                        Furniture <span>Collection</span>
                    </p>
                    <p id="desc">
                        Exprore different catalog for our showroom and online service <br />
                        client happyness for our furniture this
                    </p>

                    <div className="buttons">
                        <button className="red-btn">Buy Now</button>
                        <button className="white-btn">Explore</button>
                    </div>
                </div>
            </CarouselComponent>
        </div>
    );
}

export default Home;