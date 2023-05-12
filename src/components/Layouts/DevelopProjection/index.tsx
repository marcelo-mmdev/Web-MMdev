import { Box, useDisclosure } from "@chakra-ui/react";
import ProjectCards from "../../ProjectCards";
import ModuleDirectionWeb from "../../Modules/moduleDirectionWeb";

const DevelopProjetion = () => {
  const {
    isOpen: isOpenModuleDirectionWeb,
    onOpen: onOpenModuleDirectionWeb,
    onClose: onCloseModuleDirectionWeb,
  } = useDisclosure();

  const {
    isOpen: isOpenModuleDirectionPokemons,
    onOpen: onOpenModuleDirectionPokemons,
    onClose: onCloseModuleDirectionPokemons,
  } = useDisclosure();

  return (
    <>
      <Box w="100%" h="100vh" bg="#CCC">
        <ProjectCards
          title={`Detalhes da Web`}
          clickON={onOpenModuleDirectionWeb}
        />

        <ProjectCards
          title={`Detalhes de Pokemons`}
          clickON={onOpenModuleDirectionPokemons}
        />
      </Box>
      <ModuleDirectionWeb
        title={"Web Pagina"}
        description={`Como deseja visualizar o projeto, Como deseja visualizar o
        projeto, Como deseja visualizar o projeto, Como deseja
        visualizar o projeto, Como deseja visualizar o projeto, Como
        deseja visualizar o projeto, Como deseja visualizar o
        projeto, Como deseja visualizar o projeto, Como deseja
        visualizar o projeto, Como deseja visualizar o projeto.`}
        gitHub={`https://github.com/marcelo-mmdev`}
        web={`https://mmdev.com.br`}
        openModal={isOpenModuleDirectionWeb}
        closeModal={onCloseModuleDirectionWeb}
      />
      <ModuleDirectionWeb
        title={"Cards de Pokemons"}
        description={`Como deseja visualizar o projeto, Como deseja visualizar o
        projeto, Como deseja visualizar o projeto, Como deseja
        visualizar o projeto, Como deseja visualizar o projeto, Como
        deseja visualizar o projeto, Como deseja visualizar o
        projeto, Como deseja visualizar o projeto, Como deseja
        visualizar o projeto, Como deseja visualizar o projeto.`}
        gitHub={`https://github.com/marcelo-mmdev`}
        web={`https://mmdev.com.br`}
        openModal={isOpenModuleDirectionPokemons}
        closeModal={onCloseModuleDirectionPokemons}
      />
    </>
  );
};
export default DevelopProjetion;
