import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.png";
import Link from "./Link";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";
import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
  selectedPage: SelectedPage;
  isTopofPage: boolean;
};

const Navbar = ({ isTopofPage, setSelectedPage, selectedPage }: Props) => {
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const isAboveMediaScreens = useMediaQuery("(min-width: 1060px)");
  const navbarBackground = isTopofPage ? "" : "bg-primary-100 drop-shadow";

  return (
    <nav>
      <div
        className={`${navbarBackground}  fixed top-0 z-30 flex w-full items-center justify-between p-6`}
      >
        <div className="mx-auto flex w-5/6 items-center justify-between">
          <div className="flex w-full  items-center justify-between gap-16">
            <img src={Logo} alt="logo" />
            {isAboveMediaScreens ? (
              <div className="flex w-full items-center justify-between">
                {/* links */}
                <div className="flex items-center justify-between gap-8 text-sm">
                  {["home", "benefits", "our classes", "contact us"].map(
                    (links) => (
                      <Link
                        setSelectedPage={setSelectedPage}
                        selectedPage={selectedPage}
                        page={links}
                        key={links}
                      />
                    )
                  )}
                </div>
                {/* signIn and Member */}
                <div className="flex  items-center  justify-between gap-8">
                  <p>Sign In</p>
                  <ActionButton setSelectedPage={setSelectedPage}>
                    Become a Member
                  </ActionButton>
                </div>
              </div>
            ) : (
              <button
                onClick={() => setIsMenuToggled(!isMenuToggled)}
                className="rounded-full bg-secondary-500 p-2"
              >
                <Bars3Icon className="h-6 w-6 text-white" />
              </button>
            )}
          </div>
        </div>
      </div>
      {/* mobile menu  */}
      {!isAboveMediaScreens && isMenuToggled && (
        <motion.div
          initial={{
            x: 500,
            opacity: 0.7,
          }}
          animate={{
            x: 0,
            opacity: 1,
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl  "
        >
          {/* colse Icon */}
          <motion.div
            initial={{
              //   scale: 0.5,
              opacity: 0,
            }}
            animate={{
              //   scale: 1,

              opacity: 1,
            }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="flex justify-end p-12"
          >
            <button
              onClick={() => setIsMenuToggled(!isMenuToggled)}
              className="-mt-6 mr-3 rounded-full border-none p-2"
            >
              <XMarkIcon className="h-6 w-6 text-gray-400" />
            </button>
          </motion.div>
          {/* mobile menu */}
          <div className="ml-[33%] flex flex-col gap-10 text-2xl">
            {["home", "benefits", "our classes", "contact us"].map((links) => (
              <Link
                setSelectedPage={setSelectedPage}
                selectedPage={selectedPage}
                page={links}
                key={links}
              />
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
