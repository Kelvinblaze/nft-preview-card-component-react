import "./Card.css";
import cardImage from "../assets/images/image-equilibrium.jpg";
import ethIcon from "../assets/images/icon-ethereum.svg";
import clockIcon from "../assets/images/icon-clock.svg";
import cardAvatar from "../assets/images/image-avatar.png";

function Card() {
  return (
    // Card
    <div className="card space-y-5 shadow-2xl">
      <div className="card-image">
        <img src={cardImage} alt="nft-card" />
      </div>

      <div className="card-body space-y-4">
        <h3 className="text-white font-bold text-lg">Equilibrium #3429</h3>
        <p className="text-[#8bacda] font-light">
          Our Equilibrium collection promotes balance and calm.
        </p>

        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="card-icon">
              <img src={ethIcon} alt="eth-icon" />
            </div>
            <span className="font-bold text-[#00fff7]">0.041 ETH</span>
          </div>

          <div className="flex items-center space-x-2">
            <div className="card-icon">
              <img src={clockIcon} alt="eth-icon" />
            </div>
            <span className="text-[#8bacda]">3 days left</span>
          </div>
        </div>

        <hr className="card-line w-full  text-[#2f415b]" />

        <div className="flex items-center space-x-2">
          <div className="card-avatar">
            <img src={cardAvatar} alt="avatar" />
          </div>
          <span className="text-[#8bacda]">
            Creation of <span className="text-white">Jules Wyvern</span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Card;
