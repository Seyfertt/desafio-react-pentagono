import React from 'react'
import { Navbar } from 'react-bootstrap'
import { APP_NAME } from '../env'

export const MyNavbar = () => (
    <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">
            {APP_NAME}
        </Navbar.Brand>
    </Navbar>
)