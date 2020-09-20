import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Table from 'react-bootstrap/Table'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Pagination from 'react-bootstrap/Pagination'
import PageItem from 'react-bootstrap/PageItem'

import './App.css'

function App() {
  const [loading, setLoading] = useState(true)
  const [isVisible, setIsVisible] = useState(false)
  const [users, setUsers] = useState([])
  const handleShow = () => setIsVisible(true)
  const handleHide = () => setIsVisible(false)
  const handleAddUser = () => {}

  useEffect(() => {
    async function getData() {
      const result = await axios.get(
        'http://www.filltext.com/?rows=1000&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&delay=3&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D'
      )
      const sortedUsers = result.data.sort((a, b) => a.id - b.id)
      setUsers(sortedUsers)
      setLoading(false)
    }
    getData()
  }, [])
  return (
    <div className="App">
      <Modal show={isVisible}>
        <Modal.Header>Добавление пользователя</Modal.Header>
        <Modal.Body>adfasdfas</Modal.Body>
        <Modal.Footer>
          <Button onClick={handleAddUser} variant="success">
            Добавить
          </Button>
          <Button onClick={handleHide} variant="danger">
            Отмена
          </Button>
        </Modal.Footer>
      </Modal>
      <Table responsive="lg" striped bordered hover>
        <thead>
          <tr>
            <th>id</th>
            <th>first name</th>
            <th>last name</th>
            <th>email</th>
            <th>phone</th>
          </tr>
        </thead>
        <tbody>
          {users.map(({ id, firstName, lastName, email, phone }) => (
            <tr>
              <td>{id}</td>
              <td>{firstName}</td>
              <td>{lastName}</td>
              <td>{email}</td>
              <td>{phone}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  )
}

export default App
