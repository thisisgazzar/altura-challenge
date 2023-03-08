import {
  CardWrapper,
  CardContent,
  CardDetails,
  NFTName,
  IconWrapper,
} from "./styles";
import CardModal from "./Modal";
import { OpenArrow } from "../../assets";
import { trimText } from "../../utils";
import { useState } from "react";

function Card({
  title,
  image,
  description,
  contractAddress,
  tokenId,
  animationDelay,
}) {
  const [hover, setHover] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <>
      <CardWrapper
        delayValue={animationDelay}
        onClick={() => setOpen(true)}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <CardContent image={image}>
          <CardDetails>
            <NFTName>{trimText(title, 13)}</NFTName>
            <IconWrapper hover={hover}>
              <img alt="arrow" src={OpenArrow} />
            </IconWrapper>
          </CardDetails>
        </CardContent>
      </CardWrapper>

      <CardModal
        open={open}
        setOpen={setOpen}
        title={title}
        image={image}
        description={description}
        contractAddress={contractAddress}
        tokenId={tokenId}
      />
    </>
  );
}

export default Card;
