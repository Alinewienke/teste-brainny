import {
  Box,
  Flex,
  Heading,
  Image,
  Input,
  Spacer,
  Text,
  InputGroup,
  InputRightElement,
  Button
} from '@chakra-ui/react';
import { useState } from 'react';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

import login from '../assets/login.png';
import logo from '../assets/logo-purple.png';

function Login() {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <>
      <Box
        width='100%'
        height='100%'
        bg='white'
      >
        <Flex
          align='center'
          justify='center'
          px='250'
          py='10'
        >
          <Box>
            <Image
              src={login}
              alt='login'
              w='400px'
            />

            <Heading
              mt='6'
              color='principal'
              as='h2'
              fontSize='40'
              textAlign='center'
              mb='4'
            >
              Bem vindo ao PontoGo
            </Heading>
            <Text
              color='principal'
              fontSize='25'
              fontWeight='400'
              textAlign='center'
            >
              Aqui você fará toda gestão do <br /> seu sistema de pontos.
            </Text>
          </Box>
          <Spacer></Spacer>
          <Box>
            <Image
              src={logo}
              alt='logo'
              mb='10'
            />
            <Heading
              as='h2'
              fontSize='35'
              color='principal'
              mb='4'
            >
              Faça login
            </Heading>
            <Text fontSize='20'>Email</Text>
            <Input
              placeholder='exemplo@email.com'
              mb='4'
            />
            <Text fontSize='20'>Senha</Text>
            <InputGroup size='md'>
              <Input
                pr='4.5rem'
                type={show ? 'text' : 'password'}
                placeholder='*************'
                mb='2'
              />
              <InputRightElement width='4.5rem'>
                <Button
                  rightIcon={show ? <AiFillEyeInvisible /> : <AiFillEye />}
                  variant='link'
                  h='1.75rem'
                  size='sm'
                  onClick={handleClick}
                  color='principal'
                />
              </InputRightElement>
            </InputGroup>
            <Button
              variant='link'
              color='principal'
              fontSize='15'
              mb='8'
              textDecoration='underline'
            >
              Esqueci minha senha
            </Button>

            <Spacer></Spacer>
            <Button
              px='40'
              bg='principal'
              color='white'
              fontWeight='400'
            >
              Entrar
            </Button>
          </Box>
        </Flex>
      </Box>
    </>
  );
}

export default Login;
