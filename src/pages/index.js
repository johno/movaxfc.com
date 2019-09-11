import React from 'react'
import { graphql } from 'gatsby'

const MatchCard = ({ data, table }) => (
  <div>
    <h3>{table}</h3>
    <p>{data.date}</p>
    <p>
      {data.location[0].data.name}
      {data.field ? (
        '#' + data.field
      ) : null}
    </p>
    <p>Against {data.team}</p>
  </div>
)

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
    <div>
      <MatchCard {...nextD1} />
      <MatchCard {...next30} />
      <MatchCard {...next40} />
    </div>
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
