/** @jsx jsx */
import { Styled, jsx } from 'theme-ui'

import Header from './header'

export default ({ children }) => (
  <Styled.root>
    <Header />
    <main
      sx={{
        maxWidth: 800,
        mx: 'auto',
        px: 3,
        py: 4,
      }}
    >
      {children}
    </main>
  </Styled.root>
)
