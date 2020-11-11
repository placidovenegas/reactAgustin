
import { gql } from "@apollo/client";

export const REGISTERS = gql`
  mutation register($input: UserInput) {
    register(input: $input) {
      id
      name
      username
      email
      createAt
    }
  }
`;

