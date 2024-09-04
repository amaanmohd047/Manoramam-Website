import { cinzel } from "./fonts";

const CinzelWrapper = ({ children }) => {
  return <span className={cinzel.className}>{children}</span>;
};

export default CinzelWrapper;
