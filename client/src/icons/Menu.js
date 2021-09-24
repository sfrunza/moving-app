import createSvgIcon from "@material-ui/core/utils/createSvgIcon";

const Menu = createSvgIcon(
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M4 6h16M4 12h8m-8 6h16"
    />
  </svg>,
  "Menu"
);

export default Menu;
