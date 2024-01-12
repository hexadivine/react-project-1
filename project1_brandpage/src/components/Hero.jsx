export default function HeroSection() {
    return (
        <main className="hero">
            <div className="hero-text">
                <h1 className="hero-heading">YOUR FEET DESERVE THE BEST</h1>
                <p className="hero-desc">
                    YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH
                    OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP
                    YOU WITH OUR SHOES.
                </p>
                <div className="hero-btn">
                    <button className="primary-btn">Shop Now</button>
                    <button className="secondary-btn">Category</button>
                </div>
                <div className="shop-market">
                    <p>Also Available On</p>
                    <img src="/images/flipkart.png" alt="flipkart" />
                    <img src="/images/amazon.png" alt="amazon" />
                </div>
            </div>
            <div className="hero-img">
                <img src="/images/shoe_image.png" alt="" />
            </div>
        </main>
    );
}
