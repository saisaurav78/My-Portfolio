import { useState, useEffect } from 'react';
import { useForm, ValidationError } from '@formspree/react';

import AnimatedText from './AnimatedText';
import Image from 'next/image';
import { FaCheckCircle } from 'react-icons/fa';

const Contact = () => {
  const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORMSPREE_ID);
  const [formdata, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    message: '',
  });
  const [showIcon, setShowIcon] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formdata, [name]: value });
  };
  useEffect(() => {
    if (state.succeeded) {
      setShowIcon(true);
      setFormData({
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        message: '',
      });
      const timer = setTimeout(() => {
        setShowIcon(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [state.succeeded]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleSubmit(formdata);
  };
  return (
    <section className='pt-8 xl:pt-16 pb-32' id='Contact'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center xl:flex-row gap-16'>
          <div className='flex-1 mx-auto xl:mx-0 flex flex-col'>
            <AnimatedText text={"Let's Talk 🚀"} textStyles={'h2 mb-12 text-center xl:text-left'} />
            <form onSubmit={handleFormSubmit} className='flex flex-col gap-6 w-full max-w-[480px]'>
              <div className='flex gap-8'>
                <div className='flex-1'>
                  <label
                    htmlFor='firstname'
                    className='block mb-2 text-sm font-medium text-primary'
                  >
                    First Name <span className='text-accent'>*</span>
                  </label>
                  <input
                    type='text'
                    id='firstname'
                    name='firstname'
                    value={formdata.firstname}
                    className='input'
                    placeholder='Tony'
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className='flex-1'>
                  <label htmlFor='lastname' className='block mb-2 text-sm font-medium text-primary'>
                    Last Name <span className='text-accent'>*</span>
                  </label>
                  <input
                    type='text'
                    id='lastname'
                    name='lastname'
                    value={formdata.lastname}
                    className='input'
                    placeholder='Stark'
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor='email' className='block mb-2 text-sm font-medium text-primary'>
                  Email <span className='text-accent'>*</span>
                </label>
                <input
                  type='text'
                  id='email'
                  name='email'
                  value={formdata.email}
                  className='input'
                  placeholder='tonystark123@email.com'
                  onChange={handleChange}
                  required
                />
                <ValidationError prefix='Email' field='email' errors={state.errors} />
              </div>
              <div>
                <label htmlFor='phone' className='block mb-2 text-sm font-medium text-primary'>
                  Phone Number
                </label>
                <input
                  type='text'
                  id='phone'
                  name='phone'
                  value={formdata.phone}
                  className='input'
                  placeholder='+91 1234567890'
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor='message' className='block mb-2 text-sm font-medium text-primary'>
                  Message <span className='text-accent'>*</span>
                </label>
                <textarea
                  id='message'
                  name='message'
                  value={formdata.message}
                  className='textarea'
                  placeholder="What's on your mind?"
                  rows='5'
                  onChange={handleChange}
                  required
                />
                <ValidationError prefix='Message' field='message' errors={state.errors} />
              </div>
              <button
                type='submit'
                disabled={state.submitting}
                className='btn btn-accent flex items-center justify-center gap-2'
              >
                {state.submitting ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    <FaCheckCircle
                      className={`absolute text-white text-lg transition-opacity duration-500 ease-in-out ${
                        showIcon ? 'opacity-100' : 'opacity-0'
                      }`}
                    />
                    <span
                      className={`transition-opacity duration-500 ease-in-out ${
                        showIcon ? 'opacity-0' : 'opacity-100'
                      }`}
                    >
                      Send Message
                    </span>
                  </>
                )}
              </button>
            </form>
          </div>
          <div className='hidden xl:flex relative w-[577px] h-[664px] rounded-lg overflow-hidden'>
            <Image
              src={'/assets/contact/img.png'}
              fill
              sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
              quality={100}
              alt=''
              className='object-cover'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
