import { AppWrapper } from "./styles";
import { Empty, Form, List } from ".";
import { Fragment, useState } from "react";
import GlobalStyle from "./global";
import { Network, Alchemy } from "alchemy-sdk";

function App() {
  const [address, setAddress] = useState("");
  const [notValidInput, setNotValidInput] = useState(false);
  const [loading, setLoading] = useState(false);
  const [nfts, setNfts] = useState(null);

  const noNFTsConditions =
    nfts && nfts.length === 0 && !loading && !notValidInput;

  const settings = {
    apiKey: "Hll2BgqvKdpZOcPsPUW1vObPBoP1OdmC",
    network: Network.ETH_MAINNET,
  };

  const getNFTs = async (e) => {
    e.preventDefault();
    setNotValidInput(false);
    setNfts([]);
    const addressRegex = /^0x[a-fA-F0-9]{40}|[a-z0-9]+\.eth$/g;
    const alchemy = new Alchemy(settings);
    if (addressRegex.test(address)) {
      try {
        setLoading(true);
        const nftsForOwner = await alchemy.nft.getNftsForOwner(address);
        setNfts(nftsForOwner.ownedNfts);
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    } else {
      setNotValidInput(true);
    }
  };

  return (
    <Fragment>
      <GlobalStyle />
      <AppWrapper>
        <Form
          address={address}
          setAddress={setAddress}
          getNFTs={getNFTs}
          notValidInput={notValidInput}
          loading={loading}
        />
        {!nfts && <Empty status="welcome" />}
        {noNFTsConditions && <Empty status="noNFTs" />}
        {nfts && <List nfts={nfts} />}
      </AppWrapper>
    </Fragment>
  );
}

export default App;
