import { FaRegCheckCircle } from 'react-icons/fa';
import { usePageContext } from '../utils/PageContext';

export default function SuccessComponent() {
  const { success } = usePageContext();

  return (
    <div
      className={`success ${success ? 'success--visible' : 'success--hidden'}`}
    >
      <FaRegCheckCircle className="success__icon" />
      <p className="success__text">Message Successfuly Sent!</p>
    </div>
  );
}
