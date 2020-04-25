import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Container, Typography } from '@material-ui/core';
import axios from 'src/utils/axios';
import Page from 'src/components/Page';
import Paginate from 'src/components/Paginate';
import SearchBar from 'src/components/SearchBar';
import Header from './Header';
import JobCard from './JobCard';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3)
  },
  results: {
    marginTop: theme.spacing(3)
  },
  paginate: {
    marginTop: theme.spacing(3),
    display: 'flex',
    justifyContent: 'center'
  }
}));

function ProjectManagementList() {
  const classes = useStyles();
  const [jobsPerPage, setJobsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [jobs, setJob] = useState([]);

  const handleFilter = () => {};

  const handleSearch = () => {};

  useEffect(() => {
    let mounted = true;

    const fetchJobs = () => {
      axios.get('http://localhost:3001/api/v1/jobs.json').then((response) => {
        if (mounted) {
          setJob(response.data);
        }
      });
    };

    fetchJobs();

    return () => {
      mounted = false;
    };
  }, []);

  //Get current Jobs
  const idnexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = idnexOfLastJob - jobsPerPage;
  const currentJobs = jobs.slice(indexOfFirstJob, idnexOfLastJob);

  //Change page
  const paginate = () => setCurrentPage(currentPage)

  return (
    <Page
      className={classes.root}
      title="Job List"
    >
      <Container maxWidth={false}>
        <Header />
        <SearchBar
          onFilter={handleFilter}
          onSearch={handleSearch}
        />
        <div className={classes.results}>
          <Typography
            color="textSecondary"
            gutterBottom
            variant="body2"
          >
            {`${jobs.length} Records found. Page ${currentPage + 1} of ${Math.ceil(jobs.length / jobsPerPage)}`}
          </Typography>
          {currentJobs.map((job) => (
            <JobCard
              key={job.id}
              job={job}
            />
          ))}
        </div>
        <div className={classes.paginate}>
          <Paginate pageCount={jobs.length / jobsPerPage} jobsPerPage={jobsPerPage} paginate={paginate}/>
        </div>
      </Container>
    </Page>
  );
}

export default ProjectManagementList;
