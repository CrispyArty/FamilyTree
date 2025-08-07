export const rootUrl = process.env.NEXT_PUBLIC_ROOT_URL;

export const appRootUrl = process.env.NEXT_PUBLIC_APP_ROOT_URL || rootUrl;
export const apiRootUrl = process.env.NEXT_PUBLIC_API_ROOT_URL || rootUrl;

// export enum Breakpoints {
//   XXSOnly = '(max-width: 375px)',
//   XSOnly = '(max-width: 576px)',
//   MobileOnly = '(max-width: 767px)',
//   TabletAndGreater = '(min-width: 768px)',
//   MobileAndTablet = '(max-width: 1023px)',
//   DesktopAndGreater = '(min-width: 1024px)',
//   LAndGreater = '(min-width: 992px)',
//   XLAndGreater = '(min-width: 1280px)',
//   WideAndGreater = '(min-width: 1440px)',
// }
