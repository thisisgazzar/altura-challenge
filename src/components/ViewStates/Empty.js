import { ImageView } from "./styles";
import { Welcome, NoNFTs } from "../../assets";

function Empty({ status }) {
  const alt = status === "welcome" ? "Welcome" : "No NFTs Found!";
  const src = status === "welcome" ? Welcome : NoNFTs;

  return <ImageView alt={alt} src={src} />;
}

export default Empty;
