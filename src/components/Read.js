import React, { useEffect } from "react";
import { Table } from "semantic-ui-react";
import { Button, Checkbox } from "semantic-ui-react";
import axios from "axios";
import { Link } from "react-router-dom";

const Read = ({ APIData, fetchData }) => {
  useEffect(() => {
    fetchData();
  }, []);

  const deleteData = (id) => {
    axios
      .delete(`https://6130665a5fc50700175f189a.mockapi.io/mockData/${id}`)
      .then(() => fetchData());
  };

  return (
    <div className="table" style={{ paddingTop: 20 }}>
      <Table singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>First Name</Table.HeaderCell>
            <Table.HeaderCell>Last Name</Table.HeaderCell>
            <Table.HeaderCell>Checked</Table.HeaderCell>
            <Table.HeaderCell>Update</Table.HeaderCell>
            <Table.HeaderCell>Delete</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {APIData.map((data) => {
            return (
              <Table.Row key={data.id}>
                <Table.Cell>{data.firstName}</Table.Cell>
                <Table.Cell>{data.lastName}t</Table.Cell>
                <Table.Cell>{Checkbox ? "Checked" : "Unchecked"}</Table.Cell>
                <Table.Cell>
                  <Link
                    to={{
                      pathname: "/crud-v1-react/update",
                      state: {
                        id: data.id,
                      },
                    }}
                  >
                    <Button color="green">Update</Button>
                  </Link>
                </Table.Cell>
                <Table.Cell>
                  <Button color="red" onClick={() => deleteData(data.id)}>
                    Delete
                  </Button>
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </div>
  );
};

export default Read;
