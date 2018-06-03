import React from 'react'
import { Menu, Dropdown } from 'semantic-ui-react'
import CreateTaskList from './CreateTaskList'
import LogoutButton from './LogoutButton'
import { Link } from 'react-router-dom'

const Header = () => (
    <div>
        <Menu>
            <Menu.Item>
                <CreateTaskList />
            </Menu.Item>

            <Menu.Menu position='right'>
                <Dropdown item text='My account'>
                    <Dropdown.Menu>
                        <Dropdown.Item as={Link} to='/userinfo'>Info</Dropdown.Item>
                        <Dropdown.Item>Edit details</Dropdown.Item>
                        <Dropdown.Item>Remove account</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                <Menu.Item>
                    <LogoutButton />
                </Menu.Item>
            </Menu.Menu>

        </Menu>
        <br/>
    </div>
)

export default Header