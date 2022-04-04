interface Breakpoints {
  desktop: number;
  laptopL: number;
  laptop: number;
  tablet: number;
  mobileL: number;
  mobileM: number;
  mobileS: number;
}

interface DeviceSizes {
  desktop: string;
  laptopL: string;
  laptop: string;
  tablet: string;
  mobileL: string;
  mobileM: string;
  mobileS: string;
}

const size: Breakpoints = {
  desktop: 2560,
  laptopL: 1440,
  laptop: 1024,
  tablet: 768,
  mobileL: 425,
  mobileM: 375,
  mobileS: 320,
};

const device: DeviceSizes = {
  desktop: `(max-width: ${size.desktop}px)`,
  laptopL: `(max-width: ${size.laptopL}px)`,
  laptop: `(max-width: ${size.laptop}px)`,
  tablet: `(max-width: ${size.tablet}px)`,
  mobileL: `(max-width: ${size.mobileL}px)`,
  mobileM: `(max-width: ${size.mobileM}px)`,
  mobileS: `(max-width: ${size.mobileS}px)`,
};

export default device;
