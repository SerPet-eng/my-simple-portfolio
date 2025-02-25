import MeSkateboarding from '../assets/about-me/me-skateboarding.jpg';
import GoodKid from '../assets/about-me/gkmc.jpg';
import MrMorale from '../assets/about-me/mmabs.jpg';
import MCR from '../assets/about-me/tbp.jpg';
import EHeads from '../assets/about-me/ta.jpg';
import CutterPilow from '../assets/about-me/cutterpilow.jpg';

export default function Cover() {
  return (
    <div className="cover">
      <img src={MeSkateboarding} alt="Me Skateboarding" />
      <img src={GoodKid} alt="Good Kid MAAD City album cover" />
      <img src={MrMorale} alt="Mr Moral and the Big Stepper album cover" />
      <img src={MCR} alt="The Black Parade album cover" />
      <img src={EHeads} alt="The Anthology album cover" />
      <img src={CutterPilow} alt="Cutter Pilow album cover" />
    </div>
  );
}
