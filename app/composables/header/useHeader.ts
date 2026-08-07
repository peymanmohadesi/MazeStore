export function useHeader() {

    const isMobileMenuOpen = useState<boolean>(
        'header-mobile-menu-open',
        () => false
    )

    const call = ()=> {
        if(typeof window !== 'undefined') {
        window?.open("tel:09904994187")
        }
    }

    const openMobileMenu = () => {
        isMobileMenuOpen.value= true;
    }

    const closeMobileMenu = () => {
        isMobileMenuOpen.value= false;
    }

    return {
        call,
        isMobileMenuOpen,
        openMobileMenu,
        closeMobileMenu
    }
}