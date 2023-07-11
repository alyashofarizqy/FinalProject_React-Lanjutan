// TODO: answer here
import React from "react";
// import { Link } from "react-router-dom";
import { Box, Flex, Avatar, HStack, Menu, Button, useColorModeValue, MenuButton } from '@chakra-ui/react';
import { Link as ChakraLink } from '@chakra-ui/react'
import { Link as ReactRouterLink } from 'react-router-dom';

const NavBar = () => {
    return (
        // TODO: answer here
        <>
            <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4} py={1}>
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <HStack spacing={8} alignItems={'center'}>
                        <Box fontWeight='semibold' fontSize={"xl"} >
                            <ChakraLink as={ReactRouterLink} to="/" data-testid="home-page" textColor={"teal"}>Student Portal</ChakraLink>
                        </Box>
                        <HStack
                            as={'nav'}
                            spacing={4}
                            display={{ base: 'none', md: 'flex' }}>
                            <ChakraLink as={ReactRouterLink} to="/student" data-testid="student-page"
                            px={2}
                            py={1}
                            rounded={'md'}
                            _hover={{
                            textDecoration: 'none',
                            bg: useColorModeValue('gray.200', 'gray.700'),
                            }}
                            >All Students</ChakraLink>
                            <ChakraLink as={ReactRouterLink} to="/add" data-testid="add-page"
                            px={2}
                            py={1}
                            rounded={'md'}
                            _hover={{
                            textDecoration: 'none',
                            bg: useColorModeValue('gray.200', 'gray.700'),
                            }}
                            >Add Student</ChakraLink>
                        </HStack>
                    </HStack>
                    <HStack spacing={4} alignItems={'center'}>
                        <Menu>
                        <MenuButton
                            as={Button}
                            rounded={'full'}
                            variant={'link'}
                            cursor={'pointer'}
                            minW={0}>
                            {/* <Avatar
                            size={'sm'}
                            src={
                                'https://asset.kompas.com/crops/ncgvDkq11ovx_624dxbv483x_iY=/0x0:648x432/750x500/data/photo/2021/10/05/615c371c61b81.jpg'
                            }
                            /> */}
                        </MenuButton>
                        </Menu>
                    </HStack>
                </Flex>
            </Box>
            <Box p={4} fontSize={"2xl"} textColor={"teal"}></Box>
            {/* <nav>
                <h1>
                    <Link to="/" data-testid="home-page">Student Portal</Link>
                </h1>
                <ul>
                    <li>
                        <Link to="/student" data-testid="student-page">All Students</Link>
                    </li>
                    <li>
                        <Link to="/add" data-testid="add-page">Add Student</Link>
                    </li>
                </ul>
            </nav> */}
        </>
    );
};

export default NavBar;
