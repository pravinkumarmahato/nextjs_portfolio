import React from 'react'

const ContactForm = () => {
    const [form, setForm] = React.useState({ name: '', email: '', message: '' });
    const [status, setStatus] = React.useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('Sending...');
        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            });
            const data = await res.json();
            if (data.success) {
                setStatus('Message sent!');
                setForm({ name: '', email: '', message: '' });
            } else {
                setStatus('Failed to send.');
            }
        } catch {
            setStatus('Server error.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2 className='text-2xl font-bold mb-5 text-white'>Contact Me</h2>
            <div className='mb-3'>
                <input
                    type='text'
                    placeholder='Your name'
                    name='name'
                    value={form.name}
                    onChange={handleChange}
                    className='w-full px-3 py-2 text-sm text-gray-800 placeholder-gray-400 bg-white border-0 rounded shadow'
                />
            </div>
            <div className='mb-3'>
                <input
                    type='email'
                    placeholder='Email'
                    name='email'
                    value={form.email}
                    onChange={handleChange}
                    className='w-full px-3 py-2 text-sm text-gray-800 placeholder-gray-400 bg-white border-0 rounded shadow'
                />
            </div>
            <div className='mb-3'>
                <input
                    type='text'
                    placeholder='Your message'
                    name='message'
                    value={form.message}
                    onChange={handleChange}
                    className='w-full px-3 py-2 text-sm text-gray-800 placeholder-gray-400 bg-white border-0 rounded shadow'
                />
            </div>
            <button type='submit' className='px-6 mb-5 py-3 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear bg-blue-500 hover:bg-blue-400'>
                Send a message
            </button>
            {status && <div className='text-white mt-2'>{status}</div>}
        </form>
    );
}

export default ContactForm