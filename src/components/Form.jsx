export default function Form() {
  return (
    <form>
      <input type="text" placeholder="Name" />
      <input type="email" placeholder="Email" />
      <textarea placeholder="Message" />
      <button type="submit">Send</button>
    </form>
  );
}
