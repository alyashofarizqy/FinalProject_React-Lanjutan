// TODO: answer here
import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import { Box, Heading, Container, Button, Stack, Text } from '@chakra-ui/react';

const Home = () => {
  return (
    <>
    <Container 
    className="flex"
    // bg={'teal'}
    maxW={'3xl'}
    >
      <Stack 
      className="card"
      as={Box}
      textAlign={'center'}
      spacing={{ base: 8, md: 14 }}
      py={{ base: 20, md: 36 }}
      >
        <Heading 
        className="box"
        fontWeight={600}
        fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
        lineHeight={'110%'}
        >
          Student Independen Kampus Merdeka <br/>
        <Text 
        as={'span'} 
        color={'teal.400'}
        fontSize={{ base: 'xl', sm: '2xl', md: '4xl' }}
        >
          Ruangguru
        </Text>
        </Heading>
        <Stack className="box"
        direction={'column'}
        spacing={3}
        align={'center'}
        alignSelf={'center'}
        position={'relative'}>
          <Button
            colorScheme={'teal'}
            bg={'teal.400'}
            rounded={'full'}
            px={6}
            _hover={{
              bg: 'teal.500',
            }}
          >
            <Link to="/student" data-testid="student-btn" style={{ textDecoration: "none", color: "black" }}>All Student</Link>
          </Button>
        </Stack>
      </Stack>
    </Container>
    <Footer/>
    </>
  )
 // TODO: replace this
};

export default Home;

