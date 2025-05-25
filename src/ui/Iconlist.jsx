export default function Iconlist({children,icon,title}){
    return <li className="flex flex-col h-full items-center justify-center">
            <img className="  mb-8" src={`../images/icon-${icon}.svg`} alt="" />
            <p className="text-xl text-Gray700 mb-3 font-semibold">{title}</p>
            <p className="text-base text-center">
                {children}
            </p>
          </li>
}

