import img1 from '../../../assets/images/homeCarousel/1.jpg'
import img2 from '../../../assets/images/homeCarousel/2.jpg'
import img3 from '../../../assets/images/homeCarousel/3.jpg'
import img4 from '../../../assets/images/homeCarousel/4.jpg'

const Banner = () => {
    return (
        <div className="carousel w-full h-[600px]">
            <div id="slide1" className="carousel-item relative w-full">
                <img
                    src={img1}
                    className="w-full h-full rounded" />
                <div className="absolute flex h-full items-center bg-gradient-to-r from-slate-800 to-[rgba(21, 21, 21, 0)] bg-cover bg-no-repeat bg-center rounded-xl">
                    <div className='text-white w-1/2 ml-10 '>
                        <h2 className='text-6xl text-white font-bold mb-4'>Affordable Price For Car Servicing</h2>
                        <p className='text-white'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='flex gap-8 mt-5'>
                            <button className="btn btn-error">Discover More</button>
                            <button className="btn btn-outline text-white">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end">
                    <a href="#slide4" className="btn btn-circle btn-neutral mr-5">❮</a>
                    <a href="#slide2" className="btn btn-error btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img
                    src={img2}
                    className="w-full h-full rounded" />
                <div className="absolute  flex h-full items-center bg-gradient-to-r from-slate-800 to-[rgba(21, 21, 21, 0)] rounded-xl">
                    <div className='text-white w-1/2 ml-10 '>
                        <h2 className='text-6xl text-white font-bold mb-4'>Affordable Price For Car Servicing</h2>
                        <p className='text-white'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='flex gap-8 mt-5'>
                            <button className="btn btn-error">Discover More</button>
                            <button className="btn btn-outline text-white">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end">
                    <a href="#slide1" className="btn btn-circle btn-neutral mr-5">❮</a>
                    <a href="#slide3" className="btn btn-error btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img
                    src={img3}
                    className="w-full h-full rounded" />
                <div className="absolute flex h-full items-center bg-gradient-to-r from-slate-800 to-[rgba(21, 21, 21, 0)] rounded-xl">
                    <div className='text-white w-1/2 ml-10 '>
                        <h2 className='text-6xl text-white font-bold mb-4'>Affordable Price For Car Servicing</h2>
                        <p className='text-white'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='flex gap-8 mt-5'>
                            <button className="btn btn-error">Discover More</button>
                            <button className="btn btn-outline text-white">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end">
                    <a href="#slide2" className="btn btn-circle btn-neutral mr-5">❮</a>
                    <a href="#slide4" className="btn btn-error btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img
                    src={img4}
                    className="w-full h-full rounded" />
                <div className="absolute flex h-full items-center bg-gradient-to-r from-slate-800 to-[rgba(21, 21, 21, 0)] rounded-xl">
                    <div className='text-white w-1/2 ml-10 '>
                        <h2 className='text-6xl text-white font-bold mb-4'>Affordable Price For Car Servicing</h2>
                        <p className='text-white'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='flex gap-8 mt-5'>
                            <button className="btn btn-error">Discover More</button>
                            <button className="btn btn-outline text-white">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end">
                    <a href="#slide3" className="btn btn-neutral btn-circle mr-5">❮</a>
                    <a href="#slide1" className="btn btn-error btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;