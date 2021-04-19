import ListIcon from "../components/list-icon";

const AboutList = () => {
  return (
    <ul className="aboutUsCard__deatils">
      <li className="aboutUsCard__deatils--list">
        <ListIcon />
        <span>Stake SHEESA and receive NFTs from high-quality artists</span>
      </li>
      <li className="aboutUsCard__deatils--list">
        <ListIcon />
        <span>
          Lottery using SHEESA tokens, 5% of the tokens burned after the lottery
          is redeemed.
        </span>
      </li>
      <li className="aboutUsCard__deatils--list">
        <ListIcon />
        <span>Lending and Borrowing product</span>
      </li>
      <li className="aboutUsCard__deatils--list">
        <ListIcon />
        <span>
          Sheesha Flavours- Partner with projects to provide rewards in other
          tokens- leverage the communities of other projects
        </span>
      </li>
    </ul>
  );
};

export default AboutList;
