import { gql } from '@apollo/client'

const GET_LISTING_TYPES = gql`
  query GetListingTypes {
    mgJobTypes {
        nodes {
          id
          name
        }
    }
  }
`

export default GET_LISTING_TYPES