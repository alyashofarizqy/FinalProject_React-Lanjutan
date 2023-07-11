// TODO: answer here
import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Button, Input, Select, Stack } from '@chakra-ui/react'
import { Card, Heading, CardBody } from '@chakra-ui/react'
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";

const EditStudent = (props) => {
    // TODO: answer here
    const { editStudent } = props
    let { id } = useParams()

    const [getFullName, setFullName] = useState("");
    const [getAddress, setAddress] = useState("");
    const [getPhone, setPhone] = useState("");
    const [getDate, setDate] = useState("");
    const [getGender, setGender] = useState("");
    const [getPrody, setPrody] = useState("");
    const [loading, setLoading] = useState(false);
    const [getPicture, setPicture] = useState("");

    useEffect(() => {
        setLoading(true);
        getData();
    }, []);

    const getFaculty = async (e) => {
        e.preventDefault();

        const tempData = {
            fullname: getFullName,
            address: getAddress,
            birthDate: getDate,
            gender: getGender,
            phoneNumber: getPhone,
            faculty: "",
            programStudy: getPrody,
            profilePicture: getPicture,
        };

        const prodi = tempData["programStudy"];

        if (prodi === "Ekonomi" || prodi === "Akuntansi" || prodi === "Manajemen") {
            tempData["faculty"] = "Fakultas Ekonomi";
        } else if (prodi === "Hubungan Internasional"  || prodi === "Administrasi Bisnis" || prodi === "Administrasi Publik") {
            tempData["faculty"] = "Fakultas Ilmu Sosial dan Politik";
        } else if (prodi === "Arsitektur" || prodi === "Teknik Sipil") {
            tempData["faculty"] = "Fakultas Teknik";
        } else {
            tempData["faculty"] = "Fakultas Teknologi Informasi dan Sains";
        }

        editStudent(tempData, id);

        setFullName("");
        setAddress("");
        setDate("");
        setGender("");
        setPhone("");
        setPrody("");
        setPicture("");

    };

    const getData = async () => {
        try {
          const response = await fetch(`http://localhost:3001/student/${id}`);
          const result = await response.json();

          setFullName(result.fullname);
          setPicture(result.profilePicture);
          setAddress(result.address);
          setDate(result.birthDate);
          setPrody(result.programStudy);
          setPhone(result.phoneNumber);
          setGender(result.gender);
          setLoading(false);

        } catch (error) {
          console.log(error);
        }
    };

    return (
        <>
            {/* TODO: answer here */}
            <NavBar />

            <Card className="container" maxW={"md"} alignItems={"center"} borderRadius="lg" overflow="hidden" marginX="auto">
                <CardBody>
                <Heading size='md'>Edit Student</Heading>
                {loading === true ? (
                <p>Loading ...</p>
                ) : (
                <>
                    <Stack className="card-form" id="form-student" mt='6' spacing='3' >
                    <form onSubmit={getFaculty}>

                        <div className="label-input">
                            <div className="row">
                                <img src={getPicture} alt={getFullName} style={{ width: "200px" }} alignItems={"center"} />
                            </div>
                        </div>

                        <div className="label-input">
                        <div className="input-doubel">
                            <div className="col-inp">
                                <label htmlFor="input-name">Fullname</label>
                                <Input type="text" data-testid="name" variant={"outline"} id="input-name" onChange={({ target }) => setFullName(target.value)} value={getFullName} style={{ width: "90%" }} />
                            </div>
                            <div className="col-inp">
                                <label htmlFor="input-address">Address</label>
                                <Input type="text" data-testid="address" variant={"outline"} onChange={({ target }) => setAddress(target.value)} value={getAddress} />
                            </div>
                        </div>
                        </div>

                        <div className="label-input">
                        <div className="input-doubel">
                            <div className="col-inp">
                                <label htmlFor="input-phone">Phone Number</label>
                                <Input type="text" id="input-phone" variant={"outline"} data-testid="phoneNumber" style={{ width: "90%" }} onChange={({ target }) => setPhone(target.value)} value={getPhone} />
                            </div>
                            <div className="col-inp">
                                <label htmlFor="input-date">Birth Date</label>
                                <Input type="date" id="input-date" data-testid="date" onChange={({ target }) => setDate(target.value)} value={getDate} />
                            </div>
                        </div>
                        </div>

                        <div className="label-input">
                        <label htmlFor="input-gender">Gender</label>
                        <Select className="input-select" variant={"outline"} id="input-gender" data-testid="gender" onChange={({ target }) => setGender(target.value)} value={getGender}>
                            <option></option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </Select>
                        </div>
                        <div className="label-input">
                        <label htmlFor="input-prody">Program Study</label>
                        <Select className="input-select" data-testid="prody" variant={"outline"} id="input-prody" onChange={({ target }) => setPrody(target.value)} value={getPrody}>
                            <option></option>
                            <option value="Ekonomi">Ekonomi</option>
                            <option value="Manajemen">Manajemen</option>
                            <option value="Akuntansi">Akuntansi</option>
                            <option value="Administrasi Publik">Administrasi Publik</option>
                            <option value="Administrasi Bisnis">Administrasi Bisnis</option>
                            <option value="Hubungan Internasional">Hubungan Internasional</option>
                            <option value="Teknik Sipil">Teknik Sipil</option>
                            <option value="Arsitektur">Arsitektur</option>
                            <option value="Matematika">Matematika</option>
                            <option value="Fisika">Fisika</option>
                            <option value="Informatika">Informatika</option>
                        </Select>
                        </div>

                        <div className="label-input">
                            <Stack
                            direction={'column'}
                            spacing={3}
                            align={'center'}
                            alignSelf={'center'}
                            position={'relative'}
                            >
                                <Button 
                                type="submit" 
                                id="edit-btn" 
                                className="btn-add" 
                                data-testid="edit-btn"
                                colorScheme={'teal'}
                                bg={'teal.400'}
                                rounded={'full'}
                                px={6}
                                _hover={{
                                bg: 'teal.500',
                                }} >
                                Edit Student    
                                </Button>
                            </Stack>
                        </div>

                    </form>
                    </Stack>
                </>
                )}
                </CardBody>
            </Card>
            
            <Footer/>
        </>
    );
};

export default EditStudent;

