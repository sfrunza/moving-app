import React, { useEffect } from "react";
import { Box, Container } from "@material-ui/core";
import Page from "src/components/Page";
import Header from "./Header";
import Results from "./Results";
import { useSelector, useDispatch } from "src/store";
import { cleanCustomer, getCustomers } from "src/slices/customers";

function CustomerList() {
  const dispatch = useDispatch();
  const { customers, errors } = useSelector((state) => state.customers);

  useEffect(() => {
    dispatch(getCustomers());
    dispatch(cleanCustomer());
  }, [dispatch]);

  return (
    <Page title="Customer List">
      <Box
        sx={{
          backgroundColor: "background.default",
          minHeight: "100%",
          paddingY: 8,
        }}
      >
        <Container maxWidth={false}>
          <Header />
          {errors && (
            <Box mt={3}>
              <p>{errors}</p>
            </Box>
          )}
          {customers && (
            <Box mt={3}>
              <Results customers={customers} errors={errors} />
            </Box>
          )}
        </Container>
      </Box>
    </Page>
  );
}

export default CustomerList;
