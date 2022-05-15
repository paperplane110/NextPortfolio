import Link from "next/link";
import styles from "../styles/NavBar.module.css"

import {useState} from "react";
import {useRouter} from "next/router";
import {Tooltip} from "@nextui-org/react";
import type {IconType} from "react-icons";
import {navBarSetting} from "../NavBarSetting";

type StyledLinkProps = {
  href: string,
  description: string,
  Icon: IconType,
}

function StyledLink({href, description, Icon}: StyledLinkProps) {
  const [onMouse, setOnMouse] = useState(false)
  const router = useRouter()

  function handleOnMouseOver() {
    setOnMouse(true)
  }

  function handleOnMouseLeave() {
    setOnMouse(false)
  }
  return (
    <>
      <Tooltip content={description} placement="bottom" hideArrow>
        <Link href={href}>
          <div
            className={router.pathname === href ? styles.navbarItemsActivated : styles.navbarItems}
            onMouseOver={handleOnMouseOver}
            onMouseLeave={handleOnMouseLeave}
          >
            {onMouse ? <Icon color="white"/> : <Icon/>}
          </div>
        </Link>
      </Tooltip>
    </>
  )
}

function OutStyledLink({href, description, Icon}: StyledLinkProps) {
  const [onMouse, setOnMouse] = useState(false)
  const router = useRouter()

  function handleOnMouseOver() {
    setOnMouse(true)
  }

  function handleOnMouseLeave() {
    setOnMouse(false)
  }

  return (
    <>
      <Tooltip content={description} placement="bottom" hideArrow>
        <a href={href} target="_blank" rel="noopener noreferrer">
          <div
            className={router.pathname === href ? styles.navbarItemsActivated : styles.navbarItems}
            onMouseOver={handleOnMouseOver}
            onMouseLeave={handleOnMouseLeave}
          >
            {onMouse ? <Icon color="white"/> : <Icon/>}
          </div>
        </a>
      </Tooltip>
    </>
  )
}

const NavBar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.navbarCenter}>
        {navBarSetting.map((itemInfo, idx) => {
          if (itemInfo.type === "divider") return (<div key={idx} className={styles.divider}></div>)
          if (itemInfo.type === "innerLink") {
            return (
              <StyledLink
                key={idx}
                href={itemInfo.to}
                description={itemInfo.description}
                Icon={itemInfo.Icon}
              />
            )
          } else {
            return (
              <OutStyledLink
                key={idx}
                href={itemInfo.to}
                description={itemInfo.description}
                Icon={itemInfo.Icon}
              />
            )
          }
        })}
      </div>
    </div>
  )
}

export default NavBar