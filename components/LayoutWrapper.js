import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
// import Logo from '@/data/logo.svg'
import Link from './Link'
import SectionContainer from './SectionContainer'
import Footer from './Footer'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'

const Logo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} viewBox="0 0 115.71 122.36">
    <defs>
      <linearGradient
        id="linear-gradient"
        x1="36.18"
        y1="40.15"
        x2="25.7"
        y2="30.32"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#fff" />
        <stop offset="0.92" />
      </linearGradient>
      <linearGradient
        id="linear-gradient-2"
        x1="12.13"
        y1="65.76"
        x2="1.66"
        y2="55.93"
        xlinkHref="#linear-gradient"
      />
    </defs>
    <g className="cls-1">
      <g id="Layer_2" dataName="Layer 2">
        <g id="Layer_1-2" dataName="Layer 1">
          <path
            className="cls-2"
            d="M113.88,18.11c2.78-9.66.61-14.44-10.12-15.2-19.31-1.38-48,11.71-67.43,26,4.11,7.79,8.13,15.66,12.18,23.33.39.73,1,1.88,1.64,3.13,1.31-3.36,2.61-7.06,4-10C59.34,34.46,74,9,87.64,9.68c26.25,1.42,23.3,74,20,92.73-.87,5-5,26.86-14.6,17.77l-2.25-2.71c4.18,4.16,7.86,6.63,10.79,0,8-18.32,1.61-72.89-8.71-90.64-5.68-9.79-8.36-6.18-15.09,2.11C66.72,42.5,65,49.11,58.47,64.43c-2.59,6-7.59,9.37-12.95,4.33-3.2-3-14.63-26.14-17.55-31.63l-.51-1c-1.39,1.27-2.69,2.52-3.88,3.75C19.71,44,16.19,48,14,52.59c-.45,7.69-1.24,16.93-3.41,20C8.47,75.48,2.2,74.84.85,69.5A29.82,29.82,0,0,1,2.67,50.21C4,33.55,6.05,11.34,10.41,5.45s10.48-4.09,14,1.84c2.55,4.33,5,8.77,7.47,13.26C51.59,9.05,88.08-4.54,107.48,1.47c9.28,2.87,9.59,8.49,6.4,16.64ZM22.52,26.73c-1.61-3-3.29-6.15-4.78-8.8-.92,4.27-1.63,9.73-2.18,14.68a80.87,80.87,0,0,1,7-5.88Z"
          />
          <g className="cls-3">
            <path
              className="cls-4"
              d="M36.33,29a58.19,58.19,0,0,0-11.77,10c.92-.92,1.87-1.84,2.9-2.78l.51,1c1.19,2.23,3.78,7.39,6.66,12.92,2.63-3.79,5.15-7.42,7.25-10.46C40,36,38.2,32.49,36.33,29Z"
            />
            <path
              className="cls-5"
              d="M2.41,72.38c2.4,2.55,6.53,2.45,8.14.2,2.17-3.06,3-12.3,3.41-20,.1-.19.21-.38.31-.58A181.85,181.85,0,0,0,2.41,72.38Z"
            />
          </g>
        </g>
      </g>
    </g>
  </svg>
)

const LayoutWrapper = ({ children }) => {
  return (
    <SectionContainer>
      <div className="flex h-screen flex-col justify-between">
        <header className="flex items-center justify-between py-10">
          <div>
            <Link href="/" aria-label={siteMetadata.headerTitle}>
              <div className="flex items-center justify-between">
                <div className="mr-3">
                  <Logo />
                </div>
                {typeof siteMetadata.headerTitle === 'string' ? (
                  <div className="hidden h-6 text-2xl font-semibold sm:block">
                    {siteMetadata.headerTitle}
                  </div>
                ) : (
                  siteMetadata.headerTitle
                )}
              </div>
            </Link>
          </div>
          <div className="flex items-center text-base leading-5">
            <div className="hidden sm:block">
              {headerNavLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4"
                >
                  {link.title}
                </Link>
              ))}
            </div>
            <ThemeSwitch />
            <MobileNav />
          </div>
        </header>
        <main className="mb-auto">{children}</main>
        <Footer />
      </div>
    </SectionContainer>
  )
}

export default LayoutWrapper
