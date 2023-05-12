import { Button } from "@chakra-ui/react";

interface Props {
  clickON: () => void;
  title: String;
}

const ProjectCards = ({ clickON, title }: Props) => {
  return (
    <>
      <Button
        w="238px"
        h="52px"
        bg="primary.400"
        color="primary.100"
        borderRadius="10px"
        onClick={clickON}
      >
        {title}
      </Button>
    </>
  );
};
export default ProjectCards;
