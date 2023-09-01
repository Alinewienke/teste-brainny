import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Flex,
  Heading,
  Image,
  Text
} from '@chakra-ui/react';

import { gql, useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';

import clock from '../../assets/clock.png';

function RegistrationModal() {
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const userId = localStorage.getItem('userId');
  const date = new Date();

  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  let currentDate = `${day}/${month}/${year}`;
  let currentHour = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  const REGISTER_TIME_MUTATION = gql`
    mutation createRegisteredTimeMutation($timeRegistered: DateTime!, $user: ID) {
      createRegisteredTime(input: { data: { timeRegistered: $timeRegistered, user: $user } }) {
        registeredTime {
          id
          created_at
          updated_at
          user {
            id
            name
          }
        }
      }
    }
  `;

  const [createRegisteredTime] = useMutation(REGISTER_TIME_MUTATION, {
    variables: {
      timeRegistered: date,
      user: userId
    },
    onCompleted: () => {
      navigate('/meus-registros');
    }
  });

  const handleTimeRegister = () => {
    createRegisteredTime();
    onClose();
  };

  return (
    <>
      <Button
        color='white'
        bg='principal'
        fontWeight='400'
        onClick={onOpen}
        w='200px'
        fontSize='16px'
        mb='8'
      >
        Registrar ponto
      </Button>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size='sm'
      >
        <ModalOverlay />
        <ModalContent py='10'>
          <ModalHeader>
            <Heading
              fontSize='20px'
              textAlign='center'
            >
              Registrar novo ponto
            </Heading>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex
              align='center'
              justify='center'
              flexDirection='column'
            >
              <Image
                src={clock}
                alt='clock'
                mb='2'
              />
              <Text
                fontSize='30px'
                color='principal'
                fontWeight='700'
              >
                {currentHour}
              </Text>
              <Text
                fontSize='16px'
                color='secondary'
                mb='6'
              >
                {currentDate}
              </Text>

              <Button
                w='200px'
                onClick={handleTimeRegister}
                color='white'
                bg='principal'
                fontWeight='400'
                mb='2'
              >
                Bater ponto
              </Button>
              <Button
                colorScheme='teal'
                variant='outline'
                color='principal'
                fontWeight='400'
                w='200px'
              >
                Cancelar
              </Button>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default RegistrationModal;
