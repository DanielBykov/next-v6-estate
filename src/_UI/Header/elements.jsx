import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/outline";
import {Dialog, DialogPanel} from "@headlessui/react";
import {SignedIn, SignedOut, SignInButton, SignUpButton, UserButton} from "@clerk/nextjs";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {ButtonV1} from "@/_UI/_shadcnCustom/ButtonV1";
import {Home, Shield, Award} from "lucide-react";

export const New = ({children}) => (
  <div className="" data-ui="">
    {children}
  </div>
);

export const TrustIndicatorsBar = ({children}) => (
  <div className="bg-muted py-2">
    <div className="container mx-auto px-4">
      <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <Shield className="h-4 w-4 text-green-600" />
          <span>Verified Listings</span>
        </div>
        <div className="flex items-center gap-2">
          <Award className="h-4 w-4 text-green-600" />
          <span>Top Rated Agents</span>
        </div>
        <div className="flex items-center gap-2">
          <Home className="h-4 w-4 text-green-600" />
          <span>{"10,000+ Properties"}</span>
        </div>
      </div>
    </div>
  </div>
);

export const HeaderBox = ({children}) => (
  <div className="container inset-x-0 bg-gray-50 mx-auto" data-ui="">
    {children}
  </div>
);

export const NavBox = ({children}) => (
  <div aria-label="Global" className="flex items-center justify-between p-6 lg:px-8 max-w-7xl mx-auto" data-ui="">
    {children}
  </div>
);

export const Logo = () => (
  <a href="/" className="-m-1.5 p-1.5" data-ui="Logo">
    <div className="flex items-center relative overflow-hidden">
      <Home className="h-8 w-8 text-emerald-600 mr-3" />
      <h1 className="text-2xl font-bold text-primary font-sans">Estate Vibe</h1>
      <div className="absolute w-full h-0.5 bottom-px left-[42px] bg-emerald-600/70"/>
    </div>
  </a>
);
export const LogoLG = () => (
  <div className="flex lg:flex-1" data-ui="LogoLG">
    <Logo/>
  </div>
);

export const MobileMenuButton = ({onClick}) => (
  <div className="flex lg:hidden" data-ui="MobileMenuButton">
    <button
      type="button"
      onClick={onClick}
      className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
    >
      <span className="sr-only">Open main menu</span>
      <Bars3Icon aria-hidden="true" className="size-6"/>
    </button>
  </div>
);

export const NavigationItems = ({items}) => {
  const pathname = usePathname();
  const isActiveItem = href => {
    return href.split('/').filter(e => e)[0] === pathname.split('/').filter(e => e)[0];
  };
  return (
    <div className="hidden lg:flex lg:gap-x-5" data-ui="Navi">
      {items.map((item) => (
        <ButtonV1
          key={item.name}
          asChild
          variant={isActiveItem(item.href) ? "secondary":"outline"}
          rounded="full"
          >
          <Link href={item.href}>{item.name}</Link>
        </ButtonV1>

      ))}
    </div>
  );
};


export const NaviMobileDialog = ({mobMenu, setMobMenu, navigationItems}) => (
  <Dialog open={mobMenu} onClose={setMobMenu} className="lg:hidden" data-ui="NaviMobileDialog">
    <div className="fixed inset-0 z-50"/>
    <DialogPanel
      className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
      <div className="flex items-center justify-between">

        <Logo/>

        <button
          type="button"
          onClick={() => setMobMenu(false)}
          className="-m-2.5 rounded-md p-2.5 text-gray-700"
        >
          <span className="sr-only">Close menu</span>
          <XMarkIcon aria-hidden="true" className="size-6"/>
        </button>
      </div>

      <div className="mt-6 flow-root">
        <div className="-my-6 divide-y divide-gray-500/10">
          <div className="space-y-2 py-6">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="py-6">
            <a
              href="#"
              className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
            >
              Log in
            </a>
          </div>
        </div>
      </div>
    </DialogPanel>
  </Dialog>
);

export const SignInOut = () => (
  <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-3" data-ui="SignInOut">

    <SignedOut>
      <ButtonV1 asChild variant="none" rounded="full" className="border text-emerald-600 bg-white border-emerald-600 cursor-pointer hover:opacity-50">
        <SignInButton />
      </ButtonV1>
      <ButtonV1 asChild variant="none" className="text-white bg-emerald-600 cursor-pointer hover:opacity-70" rounded="full">
        <SignUpButton />
      </ButtonV1>
    </SignedOut>

    <SignedIn>
      <UserButton />
    </SignedIn>
  </div>
);

export const LoginLG = () => (
  <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-3" data-ui="LoginLG">
    <SignInOut/>
  </div>
);

