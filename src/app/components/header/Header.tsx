"use client"
import {FC, useState} from "react";
import HeaderMobileMenu from "@/app/components/header/HeaderMobileMenu";
import HeaderProfilePopup from "@/app/components/header/HeaderProfilePopup";

const Header: FC = () => {
    const [isHeaderMobileMenuOpen, setIsHeaderMobileMenuOpen] = useState(false);
    const [isProfilePopupOpen, setIsProfilePopupOpen] = useState(false);

    return (
        <header>
            <nav className="bg-primary">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <h1 className="text-primary-rose font-bold text-2xl cursor-pointer">Instagran</h1>
                            </div>
                            <div className="hidden md:block">
                                <div className="ml-10 flex items-baseline space-x-4">
                                    <a href="#"
                                       className="bg-primary-rose text-primary rounded-md px-3 py-2 text-sm font-medium"
                                       aria-current="page">Homepage</a>
                                </div>
                            </div>
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-4 flex items-center md:ml-6">
                                <button type="button"
                                        className="relative rounded-full text-primary-rose hover:text-primary-rose focus:outline-none focus:ring-2 focus:ring-primary-rose focus:ring-offset-2 focus:ring-offset-primary">
                                    <span className="absolute -inset-1.5"></span>
                                    <span className="sr-only">View notifications</span>
                                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                         stroke="currentColor" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                              d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"/>
                                    </svg>
                                </button>

                                <div className="relative ml-3">
                                    <div>
                                        <button type="button"
                                                className="relative flex max-w-xs items-center rounded-full bg-primary-rose text-sm focus:outline-none focus:ring-2 focus:ring-primary-rose focus:ring-offset-2 focus:ring-offset-primary"
                                                id="user-menu-button" aria-expanded="false" aria-haspopup="true"
                                                onClick={() => setIsProfilePopupOpen(!isProfilePopupOpen)}>
                                            <span className="absolute -inset-1.5"></span>
                                            <span className="sr-only">Open user menu</span>
                                            <img className="h-8 w-8 rounded-full"
                                                 src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                 alt=""/>
                                        </button>
                                    </div>
                                    {isProfilePopupOpen && <HeaderProfilePopup/>}
                                </div>
                            </div>
                        </div>
                        <div className="-mr-2 flex md:hidden">
                            <button type="button"
                                    className="relative inline-flex items-center justify-center rounded-md bg-primary p-2 text-primary-rose hover:bg-primary hover:text-primary-rose focus:outline-none focus:ring-2 focus:ring-primary-rose focus:ring-offset-2 focus:ring-offset-primary"
                                    aria-controls="mobile-menu" aria-expanded="false"
                                    onClick={() => setIsHeaderMobileMenuOpen(!isHeaderMobileMenuOpen)}>
                                <span className="absolute -inset-0.5"></span>
                                <span className="sr-only">Open main menu</span>
                                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                     stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
                                </svg>
                                <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                     stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {isHeaderMobileMenuOpen && <HeaderMobileMenu/>}
            </nav>
        </header>
    );
};

export default Header;