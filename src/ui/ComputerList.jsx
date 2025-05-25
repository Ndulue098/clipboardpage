import { Children } from "react";

export default function ComputerList({children,title}) {
    return <li className="mb-8 md:text-start text-center ">
              <p className="text-xl text-Gray700 mb-2 font-semibold">{title}</p>
              <p className="text-base">
               {children}
              </p>
            </li>
}

