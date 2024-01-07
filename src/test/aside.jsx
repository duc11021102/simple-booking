import { AnimatePresence, motion, useCycle } from "framer-motion"
const links = [
  { name: "Home", to: "#", id: 1 },
  { name: "About", to: "#", id: 2 },
  { name: "Blog", to: "#", id: 3 },
  { name: "Contact", to: "#", id: 4 },
]

const itemVariants = {
  closed: {
    opacity: 0,
  },
  open: { opacity: 1 },
}

const sideVariants = {
  closed: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: 1,
    },
  },
}
const Aside = () => {
  const [open, cycleOpen] = useCycle(false, true)
  return (
    <main className="flex">
      <AnimatePresence>
        {open && (
          <motion.aside
            className="w-72 h-screen bg-purple-300"
            initial={{ width: 0 }}
            animate={{
              width: 300,
            }}
            exit={{
              width: 0,
              transition: { delay: 0.7, duration: 0.3 },
            }}
          >
            <motion.div
              className="mx-12 my-6"
              initial="closed"
              animate="open"
              exit="closed"
              variants={sideVariants}
            >
              {links.map(({ name, to, id }) => (
                <motion.a
                  className="no-underline text-white text-2xl font-semibold block m-5"
                  key={id}
                  href={to}
                  whileHover={{ scale: 1.1 }}
                  variants={itemVariants}
                >
                  {name}
                </motion.a>
              ))}
            </motion.div>
          </motion.aside>
        )}
      </AnimatePresence>
      <div className="cursor-pointer w-full m-5 py-2 px-1 bg-purple-300 h-fit text-white font-medium">
        <button onClick={cycleOpen}>{open ? "Close" : "Open"}</button>
      </div>
    </main>
  )
}
export default Aside
