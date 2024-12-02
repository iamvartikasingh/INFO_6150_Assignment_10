// src/pages/AdminPage.jsx
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from '../redux/slices/usersSlice';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  CircularProgress,
  Typography,
  Box,
  Container,
  Paper,
} from '@mui/material';
import AdminNavBar from '../components/AdminNavBar';
import Footer from '../components/Footer';

const AdminPage = () => {
  const dispatch = useDispatch();
  const { list: users, loading, error } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <>
      <AdminNavBar />
      <Container sx={{ minHeight: '85vh', mt: 4 }}>
        <Paper elevation={3} sx={{ padding: 3 }}>
          <Typography variant="h4" component="h1" align="center" gutterBottom>
            Employee List
          </Typography>
          {loading && (
            <Box display="flex" justifyContent="center" alignItems="center">
              <CircularProgress />
            </Box>
          )}
          {error && (
            <Typography color="error" align="center">
              {error}
            </Typography>
          )}
          {!loading && !error && users.length > 0 && (
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Type</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {users.map((user) => (
                  <TableRow key={user._id}>
                    <TableCell>{user.username}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>{user.type}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
          {!loading && !error && users.length === 0 && (
            <Typography align="center">No employees found.</Typography>
          )}
        </Paper>
      </Container>
      <Footer />
    </>
  );
};

export default AdminPage;