import calander from '../../../assets/icons/calendar.png';
import phone from '../../../assets/icons/phone.png';
import location from '../../../assets/icons/location.png';

const Contact = () => {
    return (
        <div className='lg:container mx-auto bg-slate-950 rounded-lg text-white grid grid-cols-1 md:grid-cols-3 px-20 py-32 gap-8 md:justify-normal'>
            <div className='flex gap-5 items-center mx-auto md:mx-0'>
                <img src={calander} className='w-12' alt="" />
                <div>
                    <p>We are open monday-friday</p>
                    <h2 className='text-2xl font-bold'>7:00 am - 9:00 pm</h2>
                </div>
            </div>
            <div className='flex gap-5 items-center mx-auto md:mx-0'>
                <img src={phone} className='w-12' alt="" />
                <div>
                    <p>Have a question?</p>
                    <h2 className='text-2xl font-bold'>+2546 251 2658</h2>
                </div>
            </div>
            <div className='flex gap-5 items-center mx-auto md:mx-0'>
                <img src={location} className='w-12' alt="" />
                <div>
                    <p>Need a repair? our address</p>
                    <h2 className='text-2xl font-bold'>Liza Street, New York</h2>
                </div>
            </div>
        </div>
    );
};

export default Contact;