import React from 'react'
import { Styled } from 'theme-ui'

const MatchCard = ({ data, table }) => {
  const location = data.location[0]

  return (
    <div>
      <Styled.h3>{table} vs {data.team}</Styled.h3>
      <p>{data.date}</p>
      <Styled.a href={location.data.site}>
        {location.data.name}
        {' '}
        {data.field ? '#' + data.field : null}
      </Styled.a>
    </div>
  )
}

export default MatchCard