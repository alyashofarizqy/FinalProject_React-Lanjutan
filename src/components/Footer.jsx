// TODO: answer here
import { Box, Container, Stack, Text } from "@chakra-ui/react";
import { studentName, studentId } from '../Task'

const Footer = () => {
    return (
        <Box 
        className="footer" 
        bg="gray.200"
        py={4}
        px={8}
        mt="auto"
        textAlign="center"
        > 
            <Container
                as={Stack}
                maxW={'6xl'}
                py={4}
                mt={"auto"}
                direction={{ base: 'column', md: 'row' }}
                spacing={4}
                justify={{ base: 'center', md: 'space-between' }}
                align={{ base: 'center', md: 'center' }}>
                <Text fontWeight={'500'} fontSize={'lg'} mb={2} className="studentName">{studentName}</Text>
                <Text fontWeight={'500'} fontSize={'lg'} mb={2} className="studentId">{studentId}</Text>                
                {/* <p className="studentName">Alya Shofarizqi Inayah</p>
                <p>-</p>
                <p className="studentId">FE4755705</p> */}
            </Container>
        </Box>
        // TODO: answer here
    );
};

export default Footer;

