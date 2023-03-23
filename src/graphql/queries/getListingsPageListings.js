import { gql } from '@apollo/client'

const GET_LISTINGS = gql`
  query GetListings {
    mgJobs {
      nodes {
        id
        title
        date
        modified
        mgJobCompanies {
          nodes {
            id
            name
            description
            acf {
              companyEmailAddress
              companyWebsiteAddress
              companyLogo {
                sourceUrl
              }
            }
          }
        }
      }
    }
  }
`

export default GET_LISTINGS