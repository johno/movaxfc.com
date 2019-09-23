/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link } from 'gatsby'

export default () => (
  <header
    sx={{
      py: 4,
      variant: 'styles.header',
    }}>
    <div
      sx={{
        display: 'flex',
        justifyContent: 'center',
        mb: 3,
      }}>
      <Link to='/' title='Home'>
        <img
          alt='Movax FC logo'
          src='https://user-images.githubusercontent.com/1424573/65458220-5f372700-de0a-11e9-9c70-e4c2054645a8.png'
          sx={{
            height: 250
          }}
        />
        <span
          sx={{
            position: 'absolute',
            width: 1,
            height: 1,
            overflow: 'hidden',
            top: -9999,
          }}>
          Movax FC
        </span>
      </Link>
    </div>
    <div
      sx={{
        display: 'flex',
        justifyContent: 'center',
      }}>
      <Link to='/about'
        sx={{
          variant: 'styles.navlink',
          p: 2,
          mr: 2
        }}>
        Movax FC
      </Link>
      <Link to='/schedule'
        sx={{
          variant: 'styles.navlink',
          p: 2,
          mr: 2
        }}>
        Schedule
      </Link>
      <Link to='/teams'
        sx={{
          variant: 'styles.navlink',
          p: 2,
        }}>
        Teams
      </Link>
    </div>
  </header>
)
