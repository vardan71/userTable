import React from 'react'
import { useLocation } from 'react-router';
import usersData from "./MOCK_DATA.json";
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

const View = () => {
  const location = useLocation();
  const propsData = location.state;
  const usData = usersData[propsData - 1];

  return (
    <div className='tableDiv'>
      <Table>
        <tbody>
          <TableRow >
            <TableCell >ID</TableCell>
            <TableCell>{usData.id}</TableCell>
          </TableRow>
          <TableRow >
            <TableCell >Name</TableCell>
            <TableCell>{usData.title}</TableCell>
          </TableRow>
          <TableRow >
            <TableCell >Owner</TableCell>
            <TableCell>{usData.owner}</TableCell>
          </TableRow>
          <TableRow >
            <TableCell >Created On</TableCell>
            <TableCell>{usData.createdAt}</TableCell>
          </TableRow>
          <TableRow >
            <TableCell >Updated Onag</TableCell>
            <TableCell>{usData.updatedAt}</TableCell>
          </TableRow>
        </tbody>
      </Table>
    </div>
  )
}

export default View