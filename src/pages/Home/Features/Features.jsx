import person from '../../../assets/icons/person.svg';
import group from '../../../assets/icons/group.svg';
import check from '../../../assets/icons/check.svg';
import wrench from '../../../assets/icons/Wrench.svg';
import delivery from '../../../assets/icons/deliveryt.svg'

const Features = () => {
    return (
        <div className="lg:container mx-auto text-center my-32">
            <div className='space-y-5'>
                <h5 className="text-xl text-error font-bold">Core Features</h5>
                <h1 className="text-4xl font-bold text-black">Why Choose Us</h1>
                <p className="text-slate-700 md:mx-56">the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable.</p>
            </div>
            <div className="grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-5 items-center my-12">
                <div className='p-7 text-center shadow-lg space-y-5 border-1 border-slate-950'>
                    <img src={group} alt="" className='mx-auto' />
                    <h3 className='font-bold'>Expert Team</h3>
                </div>
                <div className='p-7 text-center shadow-lg space-y-5 border-1 border-slate-950'>
                    <img src={delivery} alt="" className='mx-auto' />
                    <h3 className='font-bold'>Timely Delivery</h3>
                </div>
                <div className='p-7 text-center shadow-lg space-y-5 border-1 border-slate-950'>
                    <img src={person} alt="" className='mx-auto' />
                    <h3 className='font-bold'>24/7 Support</h3>
                </div>
                <div className='p-7 text-center shadow-lg space-y-5 border-1 border-slate-950'>
                    <img src={wrench} alt="" className='mx-auto' />
                    <h3 className='font-bold'>Best Equipments</h3>
                </div>
                <div className='p-7 text-center shadow-lg space-y-5 border-1 border-slate-950'>
                    <img src={check} alt="" className='mx-auto' />
                    <h3 className='font-bold'>100% Guranty</h3>
                </div>
                <div className='p-7 text-center shadow-lg space-y-5 border-1 border-slate-950'>
                    <img src={delivery} alt="" className='mx-auto' />
                    <h3 className='font-bold'>Timely Delivery</h3>
                </div>
            </div>
        </div>
    );
};

export default Features;