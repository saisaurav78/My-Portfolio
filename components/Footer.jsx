import { useEffect } from "react"
import Logo from "./Logo"
const Footer = () => {

    const date = new Date();

  return (
      <footer className="py-12 bg-primary">
          <div className="container mx-auto">
              <div className="flex flex-col xl:flex-row items-center justify-between">
                  <Logo light={true} />
                  <div className="text-white/70 font-light">Copyright &copy;{date.getFullYear()}. All rights reserved</div>
              </div>
          </div>
   </footer>
  )
}

export default Footer