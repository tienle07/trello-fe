import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import DashboardIcon from '@mui/icons-material/Dashboard'
import VpnLockIcon from '@mui/icons-material/VpnLock'
import AddToDriveIcon from '@mui/icons-material/AddToDrive'
import BoltIcon from '@mui/icons-material/Bolt'
import FilterListIcon from '@mui/icons-material/FilterList'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import { Tooltip } from '@mui/material'
import Button from '@mui/material/Button'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import { capitalizeFirstLetter } from '~/utils/formatters'

const MENU_STYLES = {
  color: 'white',
  bgcolor: 'transparent',
  border: 'none',
  paddingX: '5px',
  borderRadius: '4px',
  '.MuiSvgIcon-root': {
    color: 'white'
  },
  '&:hover': {
    bgcolor: 'primary.50'
  }
}

function BoardBar({ board }) {
  return (
    <Box sx={{
      width: '100%',
      height: (theme) => theme.trello.boardBarHeight,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 2,
      paddingX: 2,
      overflowX: 'auto',
      bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#34495e' : '#1976d2')
    }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Tooltip title={board?.description}>
          <Chip
            sx={MENU_STYLES}
            icon={<DashboardIcon />}
            label={board?.title}
            clickable
          />
        </Tooltip>
        <Chip
          sx={MENU_STYLES}
          icon={<VpnLockIcon />}
          label={capitalizeFirstLetter(board?.type)}
          clickable
        />
        <Chip
          sx={MENU_STYLES}
          icon={<AddToDriveIcon />}
          label="Add To Google Drive"
          clickable
        />
        <Chip
          sx={MENU_STYLES}
          icon={<BoltIcon />}
          label="Automation"
          clickable
        />
        <Chip
          sx={MENU_STYLES}
          icon={<FilterListIcon />}
          label="Filters"
          clickable
        />
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Button
          variant="outlined"
          startIcon={<PersonAddIcon />}
          sx={{
            color: 'white',
            borderColor: 'white',
            '&:hover': { borderColor: 'white' }
          }}
        >
          Invite
        </Button>

        <AvatarGroup
          max={7}
          sx={{
            gap: '10px',
            '& .MuiAvatar-root': {
              width: 34,
              height: 34,
              fontSize: 16,
              border: 'none',
              color: 'white',
              cursor: 'pointer',
              '&:first-of-type': { bgcolor: '#a4b0be' }
            }
          }}
        >
          <Tooltip title="Ronaldo">
            <Avatar alt="image-01"
              src="https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2020/4/7/796660/Ronaldo.jpg"
            />
          </Tooltip>
          <Tooltip title="Messi">
            <Avatar alt="image-02"
              src="https://vtv1.mediacdn.vn/zoom/640_400/562122370168008704/2023/3/29/photo1680130825228-16801308253471651165558.jpg"
            />
          </Tooltip>
          <Tooltip title="Neymar">
            <Avatar alt="image-03"
              src="https://images2.thanhnien.vn/528068263637045248/2023/8/16/neymar--16921450394281694231076.jpeg"
            />
          </Tooltip>
          <Tooltip title="Bruyne">
            <Avatar alt="image-04"
              src="https://tmssl.akamaized.net/images/foto/galerie/de-bruyne-kevin-manchester-city-2023-2024-1705065571-126204.jpg?lm=1705065586"
            />
          </Tooltip>
          <Tooltip title="Benzema">
            <Avatar alt="image-05"
              src="https://lh4.googleusercontent.com/proxy/1CGJ58rR8_5kRXQIUHAERQ5Rvaj3gOEPyTyzR6a8szihy19fxg5000IQrzvSohQErTPE6Mgw8OfezaT_t4pMgo_KX2IY5N5CkxNNg8YMMieKlHJgfd_tXByXzX5jnE8chwcUuDU"
            />
          </Tooltip>
          <Tooltip title="Rodrygo">
            <Avatar alt="image-06"
              src="https://www.arabnews.com/sites/default/files/styles/n_670_395/public/2022/05/10/3219636-1907674926.jpg?itok=Js6R_dQv"
            />
          </Tooltip>

          <Tooltip title="Vinni JR">
            <Avatar alt="image 07"
              src="https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcQG1p0vt5netZXq0J76_8JvIXNWcdLQb8SjVnnLW7q6scZDIv6Sw4HI9JL2Cee38M8Y7qqiMG8w3agHKCU"
            />
          </Tooltip>
          <Tooltip title="rudiger">
            <Avatar alt="image-08"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK3SR18tS1AWoqhG_PbfgBj3mPgeovToQpEJmqNC94-g&s"
            />
          </Tooltip>
          <Tooltip title="Modric">
            <Avatar alt="img-09"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5w8AeD2JP_YABDfzlSJlHq7apySKWhq37oY3-6EMR9A&s"
            />
          </Tooltip>
          <Tooltip title="camavinga">
            <Avatar alt="img10"
              src="https://media.bongda.com.vn/files/tung.nguyen/2023/12/11/edouardo-camavinga-2-0546-1103.jpg"
            />
          </Tooltip>
          <Tooltip title="militao">
            <Avatar alt="img11"
              src="https://assets.goal.com/images/v3/blt65308b286b401eab/512bc9d2a035d55b2a51e2ca7d1cfeffd4e3b32a.jpg?auto=webp&format=pjpg&width=3840&quality=60"
            />
          </Tooltip>
          <Tooltip title="bellingham">
            <Avatar alt="img12"
              src="https://thethaovanhoa.mediacdn.vn/372676912336973824/2024/3/5/jude-bellingham-17096501415261482747771.jpg"
            />
          </Tooltip>
        </AvatarGroup>
      </Box>
    </Box>
  )
}

export default BoardBar
