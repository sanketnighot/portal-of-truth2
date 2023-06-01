import { DownArrowIcon } from "@/icons"
import { motion, AnimatePresence } from "framer-motion"
import Paragraph from "./Paragraph"

export default function Accordion({ i, expanded, setExpanded, title, body, body2, body3, body4, body5, body6 }) {
  const isOpen = i === expanded

  return (
    <>
      <motion.header
        initial={false}
        animate={{ color: isOpen ? "#C700FF" : "#ffffff" }}
        onClick={() => setExpanded(isOpen ? false : i)}
        className="bg-brand-blue-dark/70 border border-blue-600/40 cursor-pointer p-5 rounded-lg text-sm sm:text-[15px] md:text-base backdrop-blur-sm drop-shadow-xl"
      >
        <motion.h2 className="flex justify-between items-center">
          <p className="font-brand text-xl">{title}</p>
          <div className="flex items-center">
            <DownArrowIcon className={`${isOpen ? "rotate-180" : ""} w-5 h-5 ml-4 object-contain`} />
          </div>
        </motion.h2>

        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.section
              animate="open"
              initial="collapsed"
              exit="collapsed"
              variants={{
                collapsed: { height: 0 },
                open: { height: "auto" },
              }}
              transition={{ duration: 0.5, type: "spring", ease: "linear" }}
              className="overflow-hidden pr-[42px] sm:pr-11 lg:pr-12"
            >
              <motion.div variants={{ collapsed: { opacity: 0 }, open: { opacity: 1 } }} transition={{ duration: 0.5 }}>
                <Paragraph variant="md" className="mt-4 md:mt-[15px] text-white overflow-hidden">
                  {(body != "") ? body : <></>}
                </Paragraph>
                {(body2 != "") ?
                  <Paragraph variant="md" className="mt-4 md:mt-[15px] text-white overflow-hidden">
                    {body2}
                  </Paragraph> : <></>}
                {(body3 != "") ?
                  <Paragraph variant="md" className="mt-4 md:mt-[15px] text-white overflow-hidden">
                    {body3}
                  </Paragraph> : <></>}
                {(body4 != "") ?
                  <Paragraph variant="md" className="mt-4 md:mt-[15px] text-white overflow-hidden">
                    {body4}
                  </Paragraph> : <></>}
                {(body5 != "") ?
                  <Paragraph variant="md" className="mt-4 md:mt-[15px] text-white overflow-hidden">
                    {body5}
                  </Paragraph> : <></>}
                {(body6 != "") ?
                  <Paragraph variant="md" className="mt-4 md:mt-[15px] text-white overflow-hidden">
                    {body6}
                  </Paragraph> : <></>}
              </motion.div>
            </motion.section>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  )
}
