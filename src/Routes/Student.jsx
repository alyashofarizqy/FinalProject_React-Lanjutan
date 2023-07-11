// TODO: answer here
import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Table, Thead, Tbody, Tr, Th, Td, Tfoot, TableCaption, TableContainer, Select, Button } from '@chakra-ui/react' 
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";

const Student = (props) => {
    // TODO: answer here
    const { students, setStudents, loading, setLoading, renderStudents} = props
    const [faculty, setFaculty] = useState("All")

    useEffect(() => {
        setLoading(true)
        renderStudents()
    }, [])

    const deleteStudent = (id) => {
        fetch(`http://localhost:3001/student/${id}`, {
            method: "DELETE",
        })
        .then(() => {
            setStudents((prevStudents) => prevStudents.filter((student) => student.id !== id));
        })
        .catch((error) => console.log(error));
    };

    const BodyStudent = () => {
        return (
            students && students.map((student, index) => {

            if (faculty === "All" || faculty === student.faculty) {
                return (
                    <Tr className="student-data-row" key={student.id}>
                        <Td>{index + 1}</Td>
                        <Td _hover={{ textColor:'red'}}>
                            <Link to={`${student.id}`}>{student.fullname}</Link>
                        </Td>
                        <Td>{student.faculty}</Td>
                        <Td>{student.programStudy}</Td>
                        <Td>
                            <Button data-testid={`delete-${student.id}`} onClick={() => deleteStudent(student.id)}
                            colorScheme={'teal'}
                            bg={'red.400'}
                            rounded={'full'}
                            px={6}
                            _hover={{
                            bg: 'red.500',
                            }}
                            >
                                Delete
                            </Button>
                        </Td>
                    </Tr>
                );

            } 
            // else {

            //     if (faculty === student.faculty) {
            //         return (
            //             <tr className="student-data-row" key={student.id}>
            //                 <td>{index + 1}</td>
            //                 <td>
            //                     <Link to={`${student.id}`}>{student.fullname}</Link>
            //                 </td>
            //                 <td>{student.faculty}</td>
            //                 <td>{student.programStudy}</td>
            //                 <td>
            //                 <button data-testid={`delete-${student.id}`} onClick={() => deleteStudent(student.id)}>
            //                     Delete
            //                 </button>
            //                 </td>
            //             </tr>
            //             );
            //         }
            //     }

            })
        );
    };

    return (
        <>
            {/* TODO: answer here */}
            <NavBar />
            <TableContainer className="test-table-container">
                {loading === true ? (
                <p>Loading ...</p>
                ) : (
                <>
                    <div className="col">
                        <div className="row">
                            <Select className="search" data-testid={"filter"} onChange={({ target }) => setFaculty(target.value)}>
                                <option value="All">All</option>
                                <option value="Fakultas Ekonomi">Fakultas Ekonomi</option>
                                <option value="Fakultas Ilmu Sosial dan Politik">Fakultas Ilmu Sosial dan Politik</option>
                                <option value="Fakultas Teknik">Fakultas Teknik</option>
                                <option value="Fakultas Teknologi Informasi dan Sains">Fakultas Teknologi Informasi dan Sains</option>
                            </Select>
                        </div>
                        <div className="row">
                            <Table id="table-student" variant='striped' colorScheme='teal'>
                                <TableCaption>Student of Ruangguru Independent Study</TableCaption>
                                <Thead>
                                    <Tr>
                                    <Th>No</Th>
                                    <Th>Full Name</Th>
                                    <Th>Faculty</Th>
                                    <Th>Program Study</Th>
                                    <Th>Option</Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    <BodyStudent />
                                </Tbody>
                                <Tfoot bg={"teal"}>
                                    <Th textColor={"white"}>Kampus Merdeka</Th>
                                    <Th></Th>
                                    <Th></Th>
                                    <Th></Th>
                                    <Th textColor={"white"}>2023</Th>
                                </Tfoot>
                            </Table>
                        </div>
                    </div>
                </>
                )}
            </TableContainer>
            <Footer/>
        </>
    );
};

export default Student;

