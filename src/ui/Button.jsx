export default function Button({children,type}){
    return <button className={`${type==="mac"?"bg-Blue100":"bg-Green500"} py-3 px-8 text-white font-medium rounded-full text-base `}>
            {children}
        </button>
}

