import {
  ModalCloseButton,
  ModalWrapper,
  ModalContent,
  ModalContentTitle,
  ModalHeader,
  ModalImage,
  ModalDescription,
  ModalFooter,
  ModalBtnNotice,
  ModalLink,
} from "./styles";
import { Close, Chevron } from "../../assets";
import { trimText } from "../../utils";
import { Modal } from "react-jet-modal";

function CardModal({
  title,
  image,
  description,
  contractAddress,
  tokenId,
  open,
  setOpen,
}) {
  return (
    <Modal
      open={open}
      modalClassName="modalBackground"
      modalBorderRadius="30px"
      modalAnimateClassName="modal-animated-zoomIn"
    >
      <ModalWrapper>
        <ModalHeader>
          <ModalContentTitle>{trimText(title, 22)}</ModalContentTitle>
          <ModalCloseButton onClick={() => setOpen(false)}>
            <img alt="close" src={Close} />
          </ModalCloseButton>
        </ModalHeader>
        <ModalContent>
          <ModalImage alt="nftImage" src={image} />
          <ModalDescription>
            <h2>Description</h2>
            <p>
              {description.length > 0
                ? trimText(description, 251)
                : "No description found for this NFT."}
            </p>
          </ModalDescription>
        </ModalContent>
        <ModalFooter>
          <ModalBtnNotice>Redirect to Opensea</ModalBtnNotice>
          <ModalLink
            href={`https://opensea.io/assets/ethereum/${contractAddress}/${tokenId}`}
            target="_blank"
          >
            Purchase
            <img alt="chevron" src={Chevron} />
          </ModalLink>
        </ModalFooter>
      </ModalWrapper>
    </Modal>
  );
}

export default CardModal;
