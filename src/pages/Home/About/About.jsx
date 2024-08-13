import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <div className='lg:w-1/2 relative'>
                    <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
                    <img src={parts} className="absolute right-5 top-1/2 border-8 border-white rounded-xl w-1/2  shadow-2xl" />
                </div>
                <div className='lg:w-1/2'>
                    <h5 className='text-2xl font-bold text-error mb-5'>About Us</h5>
                    <h1 className="text-5xl font-bold text-black">We are qualified & of experience in this field</h1>
                    <p className="py-6">
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable.
                        <br /> <br />
                        the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable.
                    </p>
                    <button className="btn btn-error text-white">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;