import { useNavigate, useParams } from "react-router-dom"
import { userdata } from "../constants/dummyUser"
import { useEffect, useState } from "react"
import { Avatar, Badge, Button, Popover, Table, Text, Title } from "rizzui"
import { TrashIcon } from "@heroicons/react/16/solid"
import { TbEdit } from "react-icons/tb"
import UpdateUser from "../components/updateUser/updateUser"
import { sidebar_width } from "../constants/appConstants"



function UserList() {
    const { userType } = useParams()

    const [userList, setUserList] = useState([])
    // const [modalState, setModalState] = useState(false);
    const [modalState2, setModalState2] = useState(false);
    useEffect(() => {

        const data = userdata.filter((ele) => ele.userType === userType)
        setUserList(data)
    }, [userType])
// const navigate = useNavigate()
    return (
        <> 
      {/* {modalState &&   <CreateUser setModalState={setModalState} />} */}
      {modalState2 &&   <UpdateUser setModalState2={setModalState2} />}

        <div className="gx-text-black ">
            {/* <div className="text-xl font-bold">
                User list - {userType}
            </div> */}
            {/* <div className="flex justify-end items-center">
                <Button
                    // isLoading={true} 
                    className="my-1 px-10 z-0 bg-sidebarTheme-dark "
                    onClick={() => navigate('/create-user')}
                    // onClick={() => setModalState(true)}
                >
                    + Create user
                </Button>
            </div> */}

            {/* Wrapper for horizontal scrolling */}
            <div className={`w-full xl:[width:calc(100vw-${sidebar_width})]  x-scrollbar-custom`}>

          
            <Table variant="minimal">
                <Table.Header >
                    <Table.Row >
                        <Table.Head >Name</Table.Head>
                        <Table.Head>Mobile</Table.Head>
                        <Table.Head>Registration No.</Table.Head>
                        <Table.Head>UserType</Table.Head>
                        <Table.Head>Actions</Table.Head>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {userList.map((user, index) => (
                        <Table.Row key={index}>
                            <Table.Cell>
                                <div className="flex items-center gap-4">
                                    <Avatar
                                        src={user.avatar}
                                        name="John Doe"
                                        className="ring-2 ring-orange ring-offset-background ring-offset-2"
                                    />

                                    <div>
                                        <span className="text-sm font-bold text-gray-700">{user.name}</span>
                                        <br />
                                        <span className="text-xs text-gray-400">{user.email}</span>
                                    </div>
                                </div>
                            </Table.Cell>
                            <Table.Cell>
                                <span className="text-sm font-bold text-gray-700">{user.mobile}</span>
                            </Table.Cell>
                            <Table.Cell>
                                <Badge>{user.registration_number}</Badge>
                            </Table.Cell>
                            <Table.Cell>
                                <span className="text-sm font-bold text-gray-700">{user.userType}</span>
                            </Table.Cell>
                            <Table.Cell>
                                <span className="flex items-center gap-5">
                                    <Button onClick={() => setModalState2(true)} size="sm" variant="outline" color="secondary">
                                        <TbEdit size={15} className="w-5 h-auto" />
                                    </Button>

                                    <Popover>
                                        <Popover.Trigger>
                                            <Button size="sm" variant="outline" color="danger">
                                                <TrashIcon size={15} className="w-5 h-auto" />
                                            </Button>
                                        </Popover.Trigger>
                                        <Popover.Content>
                                            {({ setOpen }) => (
                                                <div className="w-56">
                                                    <Title as="h6">Delete user</Title>
                                                    <Text>Are you sure you want to delete {user.name}?</Text>
                                                    <div className="flex justify-end gap-3 mb-1">
                                                        <Button size="sm" onClick={() => setOpen(false)} variant="outline">
                                                            No
                                                        </Button>
                                                        <Button size="sm" onClick={() => setOpen(false)}>
                                                            Yes
                                                        </Button>
                                                    </div>
                                                </div>
                                            )}
                                        </Popover.Content>
                                    </Popover>

                                </span>
                            </Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table>
            </div>
        </div>

        </>

    )
}

export default UserList
