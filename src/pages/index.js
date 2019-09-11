/** @jsx jsx */
import { graphql } from 'gatsby'
import { jsx, Styled } from 'theme-ui'

import Layout from '../components/layout'
import MatchCard from '../components/match-card'

const isUpcoming = game => {
  const timeNow = new Date()
  // Add two hours to game date for end time
  const date = new Date(game.data.date)

  return timeNow < date
}

export default ({
  data: {
    teamD1: { nodes: teamD1 },
    team30: { nodes: team30 },
    team40: { nodes: team40 }
  }
}) => {
  const upcomingD1 = teamD1.filter(isUpcoming)
  const upcoming30 = team30.filter(isUpcoming)
  const upcoming40 = team40.filter(isUpcoming)

  const nextD1 = upcomingD1[0]
  const next30 = upcoming30[0]
  const next40 = upcoming40[0]

  return (
    <Layout>
      <Styled.h1
        sx={{
          mb: [3, 4, 5]
        }}
      >
        Upcoming games
      </Styled.h1>
      <MatchCard {...nextD1} />
      <MatchCard {...next30} />
      <MatchCard {...next40} />
    </Layout>
  )
}

export const pageQuery = graphql`
  {
    teamD1: allAirtable(
      filter: { table: { eq: "d1" } },
      sort: { order: ASC, fields: data___date }) {
      nodes {
        table
        data {
          date
          field
          home
          team
          location {
            data {
              site
              name
            }
          }
        }
      }
    }

    team30: allAirtable(
      filter: { table: { eq: "30s" } },
      sort: { order: ASC, fields: data___date }) {
      nodes {
        table
        data {
          date
          field
          home
          team
          location {
            data {
              site
              name
            }
          }
        }
      }
    }

    team40: allAirtable(
      filter: { table: { eq: "40s" } },
      sort: { order: ASC, fields: data___date }) {
      nodes {
        table
        data {
          date
          field
          home
          team
          location {
            data {
              site
              name
            }
          }
        }
      }
    }
  }
`
