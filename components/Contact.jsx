import axios from 'axios';
import React, { useState } from 'react';
import { Description, Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import AnimatedText from './AnimatedText';

const Contact = () => {
  let [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState({
    firstname: '',
    lastname:'',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true);

    try {
      const response = await axios.post('/api/email', data);
      if (response.status === 200) {
        setIsOpen(true);
        setSuccess('Message sent successfully!');
        setData({
          firstname: '',
          lastname:'',
          email: '',
          message: '',
        });
      }
    } catch (err) {
      setError('Failed to send Message. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className='pt-8 xl:pt-20 pb-32' id='Contact'>
      <div className='container mx-auto'>
        <div>
          <div>
            <AnimatedText
              textStyles={'h2 mb-12 text-center xl:text-center'}
              text={"Let's Work Together"}
            />
            <form action='' className='flex flex-col gap-6 w-full max-w-[480px]'>
              <div className='flex gap-8'>
                <div className='flex-1'>
                  <label
                    htmlFor='firstname'
                    className='block mb-2 text-sm font-medium text-primary'
                  >
                    First Name <span className='text-accent'>*</span>{' '}
                  </label>
                  <input
                    onChange={handleChange}
                    required
                    placeholder='Robert'
                    type='text'
                    id='firstname'
                    className='input'
                    name='firstname'
                    value={data.firstname}
                  />
                </div>

                <div className='flex-1'>
                  <label
                    htmlFor='lastname'
                    className='block mb-2 text-sm font-medium text-primary'
                  >
                    Last Name <span className='text-accent'>*</span>{' '}
                  </label>
                  <input
                    onChange={handleChange}
                    required
                    placeholder='Jr'
                    type='text'
                    id='lastname'
                    name='lastname'
                    className='input'
                    value={data.lastname}
                  />
                </div>
              </div>

              <div>
                  <div className='flex-1'>
                  <label htmlFor="email" className='block mb-2 text-sm font-medium text-primary'>Email <span className='text-accent'>*</span> </label>
                  <input className='input' onChange={handleChange} required placeholder='robert123@yahoo.com' type="text" id='email' name='email' value={data.email} />
                  
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
