import { Rounded } from "./styled";

export const MenuInstitutionIcon = () => {
  return (
    <svg
      width="24"
      height="10"
      viewBox="0 0 24 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.9492 9C14.1584 9 15.9492 7.20914 15.9492 5C15.9492 2.79086 14.1584 1 11.9492 1C9.74008 1 7.94922 2.79086 7.94922 5C7.94922 7.20914 9.74008 9 11.9492 9Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1 5H6.95"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.959 5H22.909"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const NotifyIcon = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_4_75)">
        <rect width="20" height="20" fill="white" fill-opacity="0.01" />
        <path
          d="M10.0024 20.0011C10.6655 20.0011 11.3014 19.7377 11.7702 19.2689C12.239 18.8 12.5024 18.1641 12.5024 17.5011H7.50244C7.50244 18.1641 7.76583 18.8 8.23467 19.2689C8.70352 19.7377 9.3394 20.0011 10.0024 20.0011ZM10.0024 2.3986L9.00619 2.59985C7.87614 2.8301 6.86035 3.44373 6.13076 4.33688C5.40116 5.23003 5.00256 6.34783 5.00244 7.5011C5.00244 8.2861 4.83494 10.2473 4.42869 12.1786C4.22869 13.1373 3.95869 14.1361 3.59994 15.0011H16.4049C16.0462 14.1361 15.7774 13.1386 15.5762 12.1786C15.1699 10.2473 15.0024 8.2861 15.0024 7.5011C15.002 6.34805 14.6033 5.23054 13.8737 4.33764C13.1442 3.44475 12.1285 2.83131 10.9987 2.6011L10.0024 2.39735V2.3986ZM17.7774 15.0011C18.0562 15.5598 18.3787 16.0023 18.7524 16.2511H1.25244C1.62619 16.0023 1.94869 15.5598 2.22744 15.0011C3.35244 12.7511 3.75244 8.6011 3.75244 7.5011C3.75244 4.4761 5.90244 1.9511 8.75869 1.37485C8.74125 1.20104 8.76042 1.02551 8.81498 0.859568C8.86955 0.693627 8.95828 0.540963 9.07547 0.411424C9.19266 0.281884 9.33569 0.178344 9.49536 0.107482C9.65502 0.0366195 9.82776 7.62939e-06 10.0024 7.62939e-06C10.1771 7.62939e-06 10.3499 0.0366195 10.5095 0.107482C10.6692 0.178344 10.8122 0.281884 10.9294 0.411424C11.0466 0.540963 11.1353 0.693627 11.1899 0.859568C11.2445 1.02551 11.2636 1.20104 11.2462 1.37485C12.659 1.66223 13.9292 2.42905 14.8415 3.54548C15.7538 4.6619 16.2523 6.05932 16.2524 7.5011C16.2524 8.6011 16.6524 12.7511 17.7774 15.0011Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_4_75">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const AdminYellowBar = () => (
  <svg
    width="6"
    height="26"
    viewBox="0 0 6 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <line
      x1="3"
      y1="23"
      x2="3"
      y2="3"
      stroke="#B38755"
      strokeWidth="6"
      strokeLinecap="round"
    />
  </svg>
);

export const EditIcon = () => {
  return <img src="/src/assets/images/edit.svg" alt="" />;
};

export const RemoveIcon = () => {
  return <img src="/src/assets/images/remove.svg" alt="" />;
};

interface IActionRow {
  onClick: () => void;
}

export const RoundedDeleteIcon = (props: IActionRow) => (
  <Rounded onClick={props.onClick}>
    <button>
      {" "}
      <RemoveIcon />{" "}
    </button>
  </Rounded>
);

export const RoundedEditIcon = (props: IActionRow) => (
  <Rounded onClick={props.onClick}>
    <button>
      {" "}
      <EditIcon />{" "}
    </button>
  </Rounded>
);
