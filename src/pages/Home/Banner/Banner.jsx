import img1 from '../../../assets/banners/toy-1.jpg'
import img2 from '../../../assets/banners/toy-2.jpg'
import img3 from '../../../assets/banners/toy-3.jpg'
import img4 from '../../../assets/banners/toy-4.jpg'
import img5 from '../../../assets/banners/toy-5.jpg'
import img6 from '../../../assets/banners/toy-6.jpg'
import img7 from '../../../assets/banners/toy-7.jpg'
const Banner = () => {
    return (
        <div className="carousel carousel-center rounded-box mt-4">
            <div className="carousel-item">
                <img style={{ 'height': '100vh', 'width': '80vh' }} src={img7} />
            </div>
            <div className="carousel-item">
                <img style={{ 'height': '100vh', 'width': '80vh' }} src={img6} />
            </div>
            <div className="carousel-item">
                <img style={{ 'height': '100vh', 'width': '80vh' }} src={img5} />
            </div>
            <div className="carousel-item">
                <img style={{ 'height': '100vh', 'width': '80vh' }} src={img4} />
            </div>
            <div className="carousel-item">
                <img style={{ 'height': '100vh', 'width': '80vh' }} src={img1} />
            </div>
            <div className="carousel-item">
                <img style={{ 'height': '100vh', 'width': '80vh' }} src={img2} />
            </div>
            <div className="carousel-item">
                <img style={{ 'height': '100vh', 'width': '80vh' }} src={img3} />
            </div>
        </div>
    );
};

export default Banner;