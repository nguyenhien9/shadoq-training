
import { twMerge } from "tailwind-merge";
import Typo from "../Typo"

interface btnProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
size?:string
}

export default function Button(btnProps:btnProps) {

  const {children,className,size} = btnProps;
 
  const defaultClassName = `align-middle select-none font-sans font-bold text-center uppercase transition-all 
  disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none py-3 px-6 rounded-lg bg-gray-900 text-white
   shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none` 
  return (
    <button type="button" {...btnProps} className={twMerge(defaultClassName,className)}>
      <Typo size={size ||"14"}>{children}</Typo>
    </button>
  )
}

