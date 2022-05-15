import {
  AiOutlineHome,
  AiOutlineExperiment,
  AiOutlineCamera,
  AiOutlineUser,
  AiOutlineEdit,
  AiOutlineCode
} from "react-icons/ai";
import {IconType} from "react-icons";

type navBarItemProps = {
  type: 'innerLink' | 'outerLink' | 'divider'
  to: `/${string}` | `http${string}`,
  description: string,
  Icon: IconType
}


export const navBarSetting: navBarItemProps[] = [
  {
    type: 'innerLink',
    to: '/',
    description: 'Home',
    Icon: AiOutlineHome
  },
  // @ts-ignore
  {
    type: 'divider'
  },
  {
    type: 'innerLink',
    to: '/project',
    description: 'Project',
    Icon: AiOutlineExperiment
  },
  {
    type: 'innerLink',
    to: '/gallery',
    description: 'Gallery',
    Icon: AiOutlineCamera
  },
  {
    type: 'innerLink',
    to: '/blog',
    description: 'Blog',
    Icon: AiOutlineEdit
  },
  {
    type: 'outerLink',
    to: 'https://github.com/paperplane110',
    description: 'Github',
    Icon: AiOutlineCode
  },
  // @ts-ignore
  {
    type: "divider"
  },
  {
    type: 'innerLink',
    to: '/about',
    description: 'About me',
    Icon: AiOutlineUser
  }
]
