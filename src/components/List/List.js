import { ListWrapper } from "./styles";
import Card from "../Card/Card";

function List({ nfts }) {
  return (
    <ListWrapper>
      {nfts?.map((nft) => {
        return (
          <Card
            key={nft?.tokenId}
            title={nft?.title}
            image={nft?.media[0]?.gateway}
            description={nft?.description}
            contractAddress={nft?.contract?.address}
            tokenId={nft?.tokenId}
          />
        );
      })}
    </ListWrapper>
  );
}

export default List;
