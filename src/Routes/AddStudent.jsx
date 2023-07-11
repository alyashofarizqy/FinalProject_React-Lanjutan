// TODO: answer here
import React from "react";
import { useState } from "react";
import { Button, Input, Stack, Select, Heading } from '@chakra-ui/react'
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";

const AddStudent = (props) => {
    // TODO: answer here
    const [getFullName, setFullName] = useState("");
    const [getAddress, setAddress] = useState("");
    const [getPhone, setPhone] = useState("");
    const [getDate, setDate] = useState("");
    const [getGender, setGender] = useState("");
    const [getPrody, setPrody] = useState("");
    const [getPicture, setPicture] = useState("");

    const addStudent = async (e) => {
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

        props.createStudent(tempData);

        setFullName("");
        setAddress("");
        setDate("");
        setGender("");
        setPhone("");
        setPrody("");
        setPicture("");
        
    };

    return (
        <>
            {/* TODO: answer here */}
            <NavBar />
            <Stack className="container" spacing={3}>
                <Heading size='md'>Add Student</Heading>
                <div className="card-form" id="form-student">
                    <form onSubmit={addStudent}>
                        <div className="label-input">
                            <label htmlFor="input-name">Fullname</label>
                            <Input 
                                size={"md"}
                                placeholder="Your fullname"
                                variant={"outline"}
                                type="text" 
                                data-testid="name" 
                                id="input-name" 
                                onChange={({ target }) => setFullName(target.value)} 
                                value={getFullName} />
                        </div>
                        <div className="label-input">
                            <div className="input-doubel">
                                <div className="col-inp">
                                    <label htmlFor="input-picture" >Profile Picture</label><br/>
                                    <Input 
                                        type="text" 
                                        size={"md"}
                                        placeholder="Your Profile Picture"
                                        variant={"outline"}
                                        // style={{ width: "90%" }} 
                                        id="input-picture" 
                                        data-testid="profilePicture" 
                                        onChange={({ target }) => setPicture(target.value)} 
                                        value={getPicture} />
                                </div>
                                <div className="col-inp">
                                    <label htmlFor="input-address">Address</label>
                                    <Input 
                                        type="text" 
                                        size={"md"}
                                        placeholder="Your Address"
                                        variant={"outline"}
                                        data-testid="address" 
                                        onChange={({ target }) => setAddress(target.value)} 
                                        value={getAddress} />
                                </div>
                            </div>
                        </div>
                        <div className="label-input">
                            <div className="input-doubel">
                                <div className="col-inp">
                                    <label htmlFor="input-phone">Phone Number</label><br/>
                                    <Input 
                                        type="text" 
                                        size={"md"}
                                        placeholder="Your Number"
                                        variant={"outline"}
                                        id="input-phone" 
                                        data-testid="phoneNumber" 
                                        // style={{ width: "90%" }} 
                                        onChange={({ target }) => setPhone(target.value)} 
                                        value={getPhone} />
                                </div>
                                <div className="col-inp">
                                    <label htmlFor="input-date">Birth Date</label>
                                    <Input 
                                        type="date" 
                                        id="input-date" 
                                        data-testid="date" 
                                        onChange={({ target }) => setDate(target.value)} 
                                        value={getDate} />
                                </div>
                            </div>
                        </div>
                        <div className="label-input">
                            <label htmlFor="input-gender">Gender</label>
                            <Select className="input-select" id="input-gender" variant={"outline"} placeholder="Select Gender" data-testid="gender" onChange={({ target }) => setGender(target.value)} value={getGender}>
                                <option></option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </Select>
                        </div>
                        <div className="label-input">
                            <label htmlFor="input-prody">Program Study</label>
                            <Select className="input-select" data-testid="prody" variant={"outline"} placeholder="Select Prody" id="input-prody" onChange={({ target }) => setPrody(target.value)} value={getPrody}>
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
                                    colorScheme={'teal'}
                                    bg={'teal.400'}
                                    rounded={'full'}
                                    px={6}
                                    _hover={{
                                    bg: 'teal.500',
                                    }}
                                    id="add-btn" 
                                    className="btn-add" 
                                    data-testid="add-btn">
                                Add Student
                                </Button>
                            </Stack>
                        </div>
                </form>
                </div>
            </Stack>
            <Footer/>
        </>
    );
};

export default AddStudent;
