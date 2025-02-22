import ImageProfile from '../assets/profile-1.png';

export default function About() {
  return (
    <div>
      <div>
        <img src={ImageProfile} alt="profile" />
        <p>Christian De Guzman</p>
      </div>
      <div>
        <p>About</p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex, tempora
          repellat natus laborum molestias, earum libero distinctio provident
          aliquam odit nostrum eos ducimus suscipit ullam dignissimos ut quas
          saepe id laboriosam optio? Laboriosam, sit in praesentium assumenda ut
          nobis ipsam nisi ullam labore minima molestiae. Suscipit impedit
          mollitia magnam neque?
        </p>
      </div>
    </div>
  );
}
