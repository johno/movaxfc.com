/** @jsx jsx */
import { graphql } from 'gatsby'
import { jsx, Styled } from 'theme-ui'

import Layout from '../../components/layout'
import MatchCard from '../../components/match-card'
import { isUpcoming, isComplete } from '../../util'

export default ({
  data: {
    games: { nodes: games }
  }
}) => {
  const upcoming = games.filter(isUpcoming)
  const past = games.filter(isComplete)

  return (
    <Layout>
      <Styled.h1
        sx={{
          mb: [3, 4, 5]
        }}
      >
        D1 Schedule
      </Styled.h1>
      {upcoming.map(game => (
        <MatchCard {...game} />
      ))}

      <div sx={{
        mt: [3, 4, 5],
        mx: [-3, -4, -5],
        px: [3, 4, 5],
        pt: [3, 4, 5],
        pb: [2, 3, 3],
        opacity: .75,
        backgroundColor: 'muted'
        }}
      >
        <Styled.h3 sx={{ m: 0 }}>
          Past games
        </Styled.h3>
        {past.map(game => (
          <MatchCard {...game} />
        ))}
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  {
    games: allAirtable(
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
  }
`
