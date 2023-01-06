import { SelectedPage } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  page: String;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Link = ({ page, setSelectedPage, selectedPage }: Props) => {
  // remove space using regex pattern
  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;
  return (
    <AnchorLink
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
      className={`capitalize transition duration-500 hover:text-primary-300 ${
        selectedPage === lowerCasePage ? "text-primary-500" : ""
      }`}
    >
      {page}
    </AnchorLink>
  );
};

export default Link;
