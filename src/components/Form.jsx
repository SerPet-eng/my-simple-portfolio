import { usePageContext } from '../utils/PageContext';


export default function Form() {
  const { error, handleChange, handleSubmit, formData, } = usePageContext();

  console.log(formData)

  return (
    <form className="contact__form" onSubmit={handleSubmit}>
      <p className="contact__form__title">Contact Me</p>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
        className={`${error.name ? 'error' : 'default'}`}
      />
      <small>{error.name}</small>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        className={`${error.email ? 'error' : 'default'}`}
      />
      <small>{error.email}</small>
      <textarea
        name="message"
        rows="5"
        cols="33"
        value={formData.message}
        onChange={handleChange}
        placeholder="Message"
        className={`${error.message ? 'error' : 'default'}`}
      />
      <small>{error.message}</small>

      <button className="contact__form__button" type="submit">
        Send
      </button>
    </form>
  );
}