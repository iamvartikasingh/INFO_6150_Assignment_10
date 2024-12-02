import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchJobs } from '../redux/slices/jobsSlice';
import { CircularProgress, Grid, Card, CardContent, Typography } from '@mui/material';

const EmployeeJobsPage = () => {
  const dispatch = useDispatch();
  const { list: jobs, loading, error } = useSelector((state) => state.jobs);

  useEffect(() => {
    dispatch(fetchJobs());
  }, [dispatch]);

  return (
    <div>
      <h1>Available Jobs</h1>
      {loading && <CircularProgress />}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <Grid container spacing={2}>
        {!loading &&
          !error &&
          jobs.map((job) => (
            <Grid item xs={12} sm={6} md={4} key={job._id}>
              <Card>
                <CardContent>
                  <Typography variant="h6">{job.jobTitle}</Typography>
                  <Typography variant="body2">{job.companyName}</Typography>
                  <Typography variant="body2">{job.description}</Typography>
                  <Typography variant="body2">Salary: ${job.salary}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
      </Grid>
    </div>
  );
};

export default EmployeeJobsPage;