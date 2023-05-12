import {
  Box,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";

interface Props {
  openModal: boolean;
  closeModal: () => void;
  title: String;
  description: String;
  gitHub?: String;
  web: String;
}

const ModuleDirectionWeb = ({
  openModal,
  closeModal,
  title,
  description,
  gitHub,
  web,
}: Props) => {
  return (
    <>
      <Modal isOpen={openModal} onClose={closeModal} isCentered>
        <ModalOverlay />
        <ModalContent bg="primary.600">
          <ModalHeader>
            <Box
              display="block"
              justifyContent="center"
              alignItems="center"
              p="20px"
            >
              <Box
                display="center"
                alignItems="center"
                justifyContent="center"
                p="5px"
                fontSize="18px"
                color="primary.200"
              >
                <Text as="b">{title}</Text>
              </Box>
              <Box display="center" alignItems="center" justifyContent="center">
                <Box display="inline-block" color="secondary.300">
                  <Text fontSize="14px">{description}</Text>
                </Box>
              </Box>
            </Box>
          </ModalHeader>
          <ModalCloseButton
            bg="primary.600"
            color="secondary.300"
            _hover={{ bg: "primary.500" }}
            w="30px"
            h="25px"
          />
          <ModalBody>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              pb="10px"
              gap="10px"
            >
              <Link
                href={`${gitHub}`}
                color="secondary.300"
                bg="primary.500"
                _hover={{ bg: "secondary.300", color: "primary.200" }}
                w="190px"
                h="46px"
                borderRadius="10px"
                display="flex"
                justifyContent="center"
                alignItems="center"
                isExternal
              >
                GitHub
              </Link>
              <Link
                href={`${web}`}
                color="secondary.300"
                bg="primary.500"
                _hover={{ bg: "secondary.300", color: "primary.200" }}
                w="190px"
                h="46px"
                borderRadius="10px"
                display="flex"
                justifyContent="center"
                alignItems="center"
                isExternal
              >
                Page Web
              </Link>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
export default ModuleDirectionWeb;
