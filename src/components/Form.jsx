export default function Form() {
  return (
    <form className="contact__form">
      <p className="contact__form__title">Contact Me</p>
      <input type="text" placeholder="Name" />
      <input type="email" placeholder="Email" />
      <textarea type="text" rows="5" cols="33" placeholder="Message" />
      <button className="contact__form__button" type="submit">
        Send
      </button>
    </form>
  );
}
