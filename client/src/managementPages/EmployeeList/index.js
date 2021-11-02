import React, { useEffect } from "react";
import { Box, Container } from "@material-ui/core";
import Page from "src/components/Page";
import Header from "./Header";
import Results from "./Results";
import { useSelector, useDispatch } from "src/store";
import { getUsers } from "src/slices/employees";

function CustomerList() {
  const dispatch = useDispatch();
  const { users, errors } = useSelector((state) => state.employees);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <Page title="Employee List">
      <Box
        sx={{
          backgroundColor: "background.default",
          minHeight: "100%",
          paddingY: 8,
        }}
      >
        <Container maxWidth={false}>
          <Header dispatch={dispatch} />
          {errors && (
            <Box mt={3}>
              <p>{errors}</p>
            </Box>
          )}
          {users && (
            <Box mt={3}>
              <Results users={users} errors={errors} />
            </Box>
          )}
        </Container>
      </Box>
    </Page>
  );
}

export default CustomerList;
