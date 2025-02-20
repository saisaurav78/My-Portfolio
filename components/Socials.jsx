import Link from "next/link"
import {FaFacebookF, FaTwitter, FaLinkedin, FaGithub} from "react-icons/fa"
import { RiInstagramFill } from 'react-icons/ri'

const socials = [
  
    {
        icon: <FaGithub />,
        path:"https://github.com/saisaurav78"
    },
  
    {
        icon: <FaLinkedin />,
        path:"https://linkedin.com/in/sai-sowrav-andukuri"
    },
]
const Socials = ({containerStyles, iconStyles}) => {
  return (
      <div className={containerStyles}>{
          socials.map((item,index) => {
              return <Link target="__blank" href={item.path} key={index} className={iconStyles }>
                  <span>{ item.icon}</span>
              </Link>
          })
      }</div>
  )
}

export default Socials