import bgimg from "../../assets/images/banner-image-bg.jpg"
const CarouselSlide = ({title, subtitle, image}) => {
    return (
        <section className="w-full h-[650px] bg-cover flex justify-center items-center p-4 md:p-8" style={{backgroundImage: `url(${bgimg})`}}>
            <div className="w-full flex flex-col md:flex-row items-center justify-between px-8">
                {/* left contain */}
                <div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900">{title}</h1>
                    <p className="text-gray-600 my-4">{subtitle}</p>
                    <button className="btn btn-secondary px-6 py-3 rounded-full shadow-md">Shop product</button>

                </div>
                {/* right contain */}
                <div className="w-full md:w-1/2 flex justify-center">
                    <img className="max-w-full md:max-w-md drop-shadow-lg" src={image} alt="" />
                </div>
                
            </div>
        </section>
    );
};

export default CarouselSlide;