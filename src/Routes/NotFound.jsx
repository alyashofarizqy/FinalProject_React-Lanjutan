// TODO: answer here
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from '@chakra-ui/react'

const NotFound = () => {
    const navigate = useNavigate();

    return (
        <>
            {/* TODO: answer here */}
            <p className='text-lg font-semibold'>404 | Not Found</p>
            <Button colorScheme="teal" mt={4} onClick={() => navigate("/")}>
                Go Home
            </Button>
        </>
    );
};

export default NotFound;
