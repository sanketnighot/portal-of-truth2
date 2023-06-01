export default function GradientAround({ top, right, bottom, left }) {
  return (
    <>
      {top && (
        <div
          className="
            pointer-events-none 
            w-full 
            h-40 
            bg-gradient-to-b 
            from-brand-blue-dark 
            to-transparent 
            absolute 
            left-0 
            top-0
          "
        ></div>
      )}

      {right && (
        <div
          className="
            hidden md:block
            pointer-events-none 
            h-full 
            w-40 
            bg-gradient-to-l 
            from-brand-blue-dark 
            to-transparent 
            absolute 
            right-0 
            top-0
          "
        ></div>
      )}

      {bottom && (
        <div
          className="
            pointer-events-none 
            w-full 
            h-40 
            bg-gradient-to-t 
            from-brand-blue-dark 
            to-transparent 
            absolute 
            left-0 
            bottom-0
          "
        ></div>
      )}

      {left && (
        <div
          className=" 
            hidden md:block
            pointer-events-none 
            h-full 
            w-40 
            bg-gradient-to-r 
            from-brand-blue-dark 
            to-transparent 
            absolute 
            left-0 
            top-0
          "
        ></div>
      )}
    </>
  )
}
