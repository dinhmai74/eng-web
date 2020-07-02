import { Badge, Menu, MenuItem } from "@material-ui/core"
import FadeMenu from "@material-ui/core/Fade"
import cx from "classnames"
import { LoginFormModal, useFormModal } from "components/ResponsiveNav/LoginFormModal"
import React from "react"
import { ChevronDown, ShoppingCart, User } from "react-feather"
import { useHistory } from "react-router-dom"
import { apiWorker } from "services/api/api-worker"
import { strings } from "tools"
import { useAccountStore } from "zustands"
import { useQueryGetCartItemLength } from "services/api"
interface Props {}

export const RightItems: React.FC<Props> = (props) => {
  /* ------------- hooks ------------- */
  const { account } = useAccountStore()
  //   const { length } = useCartStore()
  let length = 1
  // eslint-disable-next-line
  // const classes = useStyles()
  const history = useHistory()
  const { openForm } = useFormModal()
  const { data: cartLength, isFetching } = useQueryGetCartItemLength()
  /* ------------- fields ------------- */
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const openMenu = Boolean(anchorEl)

  /* ------------- methods ------------- */

  const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => setAnchorEl(event.currentTarget)

  const handleCloseMenu = () => setAnchorEl(null)

  const token = localStorage.getItem(strings.token)

  const textColor = { "text-white": true }

  if (isFetching) return null
  length = cartLength

  /* ------------- renders ------------- */

  return (
    <>
      <div className="z-50 flex flex-row items-center">
        <div
          className={cx("flex flex-row items-center mr-4 cursor-pointer ", textColor)}
          onClick={token ? handleOpenMenu : () => openForm()}
          onMouseOver={token ? handleOpenMenu : undefined}
          aria-controls={openMenu ? "menu-list-grow" : undefined}
          aria-haspopup="true"
        >
          <User className="mr-2" />
          <p className={cx(textColor)}>{token ? account.name : "Login / Sign up"}</p>
          {token && <ChevronDown />}
        </div>

        {token && (
          <Badge badgeContent={length} color="primary">
            <ShoppingCart
              className={cx("cursor-pointer ", textColor)}
              onClick={() => history.push(strings.routeOrderGeneral)}
            />
          </Badge>
        )}
        <Menu
          id="fade-menu"
          anchorEl={anchorEl}
          keepMounted
          open={openMenu}
          onClose={handleCloseMenu}
          TransitionComponent={FadeMenu}
          MenuListProps={{ onMouseLeave: handleCloseMenu }}
          className={"!z-50"}
        >
          <div className="py-3 ">
            <>
              <MenuItem
                onClick={() => {
                  handleCloseMenu()
                  //   history.push(Paths.userProfile)
                }}
              >
                My account
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleCloseMenu()
                  apiWorker.logOut()
                  history.push(strings.routeHome)
                }}
              >
                Logout
              </MenuItem>
            </>
          </div>
        </Menu>
      </div>
    </>
  )
}
