/** @jsx jsx */
import { Link } from 'gatsby'
import { Styled, jsx } from 'theme-ui'
import { MapPin, Calendar } from 'react-feather'

import { formatDate } from '../util'

const MatchCard = ({ data, table }) => {
  const location = data.location[0]

  return (
    <div
      sx={{
        mb: [3, 4, 5]
      }}
    >
      <Styled.h3 sx={{ m: 0 }}>
        <Styled.a
          as={Link}
          to={'/teams#' + table}
          sx={{
            textTransform: 'capitalize'
          }}  
        >
          {table}
        </Styled.a> vs {data.team}</Styled.h3>
      <div
        sx={{
          display: 'flex',
          alignItems: 'center',
          flexWrap: 'wrap'
        }}
      >
        <p
          sx={{
            display: 'flex',
            alignItems: 'center',
            mr: [3, 4, 4]
          }}
        >
          <Calendar
            sx={{
              mr: 2
            }}
          />
          {formatDate(data.date)}
        </p>
        <Styled.a
          href={location.data.site}
          sx={{
            display: 'flex',
            alignItems: 'center',
            color: 'inherit'
          }}
        >
          <MapPin
            sx={{
              mr: 2
            }}
          />
            {location.data.name}
            {' '}
            {data.field ? '#' + data.field : null}
        </Styled.a>
      </div>
    </div>
  )
}

export default MatchCard