export default function ReusedIntro({children,head}) {
    return <div className=" text-center   py-18 max-w-[38rem] mx-auto">
        <h2 className="text-3xl  font-semibold text-Gray700 mb-3">{head}</h2>
        <p className="text-base">
          {children}
        </p>
      </div>
}

