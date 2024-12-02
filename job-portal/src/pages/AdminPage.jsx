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
  Box, 
  Typography, 
  Paper, 
  AppBar, 
  Toolbar, 
  Button 
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const AdminPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { list: users, loading, error } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Admin Navigation Bar */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Admin Panel
          </Typography>
          <Button color="inherit" onClick={() => navigate('/admin')}>
            Home
          </Button>
          <Button color="inherit" onClick={() => navigate('/add-jobs')}>
            Add Jobs
          </Button>
          <Button color="inherit" onClick={handleLogout}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>

      {/* Content Section */}
      <Box sx={{ flexGrow: 1, p: 3 }}>
        <Typography variant="h4" gutterBottom>
          Employee List
        </Typography>

        {loading && (
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 2 }}>
            <CircularProgress />
          </Box>
        )}
        {error && (
          <Typography color="error" variant="body1" align="center" sx={{ mt: 2 }}>
            {error}
          </Typography>
        )}

        {!loading && !error && (
          <Paper elevation={3} sx={{ mt: 3 }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell><Typography variant="h6">Name</Typography></TableCell>
                  <TableCell><Typography variant="h6">Email</Typography></TableCell>
                  <TableCell><Typography variant="h6">Type</Typography></TableCell>
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
          </Paper>
        )}
      </Box>
    </Box>
  );
};

export default AdminPage;