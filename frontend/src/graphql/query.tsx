import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

export const HelloQuery = () => (
  <Query
    query={gql`
      {
        hello
      }
    `}
  >
    {
      ({ loading, error, data }) => {
        console.log(loading, error, data);
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error :(</p>;
        
        return (
          <div>
            {data.hello}
          </div>
        )
      }
    } 
  </Query>
)
