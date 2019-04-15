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

export const UserQuery = (props: {email: string}) => (
  <Query
    query={gql`
      {
        user(email: "${props.email}") {
          id
          email
          firstname
          lastname
        }
      }
    `}
  >
    {
      ({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error :(</p>;

        return (
          <div>
            <div>
              {data.user.id}
            </div>
            <div>
              {data.user.email}
            </div>
            <div>
              {data.user.firstName}
            </div>
            <div>
              {data.user.lastName}
            </div>
          </div>
        )
      }
    } 
  </Query>
)
