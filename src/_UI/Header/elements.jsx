import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/outline";
import {Dialog, DialogPanel} from "@headlessui/react";
import {SignedIn, SignedOut, SignInButton, SignUpButton, UserButton} from "@clerk/nextjs";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {ButtonC} from "@/_UI/_shadcnCustom/ButtonC";

export const Logo = () => (
  <a href="/public" className="-m-1.5 p-1.5" data-ui="Logo">
    {/*<span className="sr-only">Estate Vibe logo</span>*/}
    <svg width="200" height="60" viewBox="0 0 200 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15 15l12 9v21h-8v-12h-8v12H3V24l12-9z" fill="#1e3a8a" stroke="#1e3a8a" strokeWidth="1" strokeLinejoin="round"/>
      <path d="M15 15l12 9H3l12-9z" fill="#fbbf24"/>

      <text x="45" y="25" fontFamily="Arial, sans-serif" fontSize="18" fontWeight="700" fill="#1e3a8a">Estate</text>
      <text x="45" y="42" fontFamily="Arial, sans-serif" fontSize="18" fontWeight="400" fill="#6b7280">Vibe</text>
    </svg>
    {/*<img*/}
    {/*  alt=""*/}
    {/*  src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"*/}
    {/*  className="h-8 w-auto"*/}
    {/*/>*/}
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

export const Navi = ({items}) => {
  const pathname = usePathname();
  const isActiveItem = href => {
    return href.split('/').filter(e => e)[0] === pathname.split('/').filter(e => e)[0];
  };
  return (
    <div className="hidden lg:flex lg:gap-x-12" data-ui="Navi">
      {items.map((item) => (
        <ButtonC
          key={item.name}
          asChild
          variant={isActiveItem(item.href) ? "menuActive":"menu"}
          rounded="full"
          >
          <Link href={item.href}>{item.name}</Link>
        </ButtonC>

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
      <ButtonC asChild className="border border-indigo-700/50 cursor-pointer hover:opacity-50" rounded="full">
        <SignInButton />
      </ButtonC>
      <ButtonC asChild className="text-white bg-indigo-700/50 cursor-pointer hover:opacity-70" rounded="full">
        <SignUpButton />
      </ButtonC>
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

