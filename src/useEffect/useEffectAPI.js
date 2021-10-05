import { Box, Stack } from '@chakra-ui/layout';
import React, { useEffect, useState } from 'react'
import { Button } from "@chakra-ui/react"
import { createBreakpoints } from "@chakra-ui/theme-tools"
import { IconButton } from "@chakra-ui/react"

const breakpoints = createBreakpoints({
    sm: "30em",
    md: "48em",
    lg: "62em",
    xl: "80em",
    "2xl": "96em",
})

const UseEffectAPI = () => {

    const [users, setUsers] = useState([]);

    const getUsers = async () => {
        const response = await fetch("http://api.github.com/users");
        setUsers(await response.json());
        // console.log(data);

    }

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <>
            <h2>List of Github Uers</h2>
            <div className="container-fluid mt-5">
                <div className="row text-center">

                    {
                        users.map((element) => {
                            return (
                                <div className="col-10 col-md-4 mt-5" >
                                    <div className="card p-2">
                                        <div className="d-flex align-items-center">
                                            <div className="image"><img src="" className="round" width="155" /> </div>
                                            <div className="ml-3 w-100">
                                                <h4 className="mb-0 mt-0 textLeft">{element.login}</h4>
                                                <span className="textLeft">{element.id}</span>
                                                <div className="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
                                                    <h4 className="d-flex flex-coloumn"></h4><span className="articles">Articles
                                                    </span><span className="number1">38</span>
                                                    <h4 className="d-flex flex-coloumn"></h4><span className="followers">Followers
                                                    </span><span className="number1">980</span>
                                                    <h4 className="d-flex flex-coloumn"></h4><span className="ratting">RAting
                                                    </span><span className="number1">8.9</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            )
                        })
                    }

                </div>
            </div>
            {/* <IconButton aria-label="Search database" icon={<SearchIcon />} /> */}

            <Button
                colorScheme="red"
                _hover={{
                    background: "white",
                    color: "teal.400",
                }}
            >
                Hover me
            </Button>

            <Box
                role="group"
            >
                <Box
                    _hover={{ fontWeight: 'semibold' }}
                    _groupHover={{ color: 'tomato' }}
                >
                    <Stack direction={["column", "row"]} spacing="24px">
                        <Box w="40px" h="40px" bg="yellow.200">
                            1
                        </Box>
                        <Box w="40px" h="40px" bg="tomato">
                            2
                        </Box>
                        <Box w="40px" h="40px" bg="pink.100">
                            3
                        </Box>
                    </Stack>
                </Box>
            </Box>
            const



        </>
    )
}

export default UseEffectAPI
