import { useState, useContext, createContext } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

const PageProvider = createContext();

export function usePageContext() {
  return useContext(PageProvider);
}

export default function PageContext({ children }) {
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [error, setError] = useState({});

  const emailRegEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleError = () => {
    let newErrors = {};

    if (!formData.name.trim()) newErrors.name = 'Fill in your name';
    if (!formData.email.trim()) {
      newErrors.email = 'Fill in your email';
    } else if (!emailRegEx.test(formData.email)) {
      newErrors.email = 'Invalid Email';
    }
    if (!formData.message.trim()) newErrors.message = 'Fill in your message';

    setError(newErrors);

    return Object.keys(newErrors).length === 0; // ✅ Return true if no errors
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Validate form
    if (!handleError()) return;
  
    try {
      console.log('Sending email...'); // Debugging step
      const response = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_EMAILJS_PUBLIC_ID
      );
  
      if (response.status === 200) {
        console.log('EmailJS Response:', response); // Debugging step
        setFormData({ name: '', email: '', message: '' }); // Clear form
        setError({});
        handleSuccess();
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      setError({ api: 'Failed to send message. Please try again later.' });
      toast.error(error.api, {position: 'top-center'})
    }
  };
  
  const handleSuccess = () => {
    setSuccess(true);
    toast.success('You successfully sent a message', {position: 'top-center'})
    setTimeout(() => setSuccess(false), 5000); // ✅ Properly resets after 5s
  };

  return (
    <PageProvider.Provider
      value={{
        formData,
        handleChange,
        handleSubmit,
        success,
        error,
        setError,
      }}
    >
      {children}
    </PageProvider.Provider>
  );
}
