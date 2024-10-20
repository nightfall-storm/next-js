import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import Link from "next/link";
import CustomLink from "./CustomLink";

function MenuBar() {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                <CustomLink href={{ pathname: 'login' }}>
                    Login
                </CustomLink>
                <CustomLink href={{ pathname: 'register' }}>
                    Register
                </CustomLink>
                <CustomLink href={{ pathname: 'logout' }}>
                    Logout
                </CustomLink>
            </NavigationMenuList>
        </NavigationMenu>

    );
}
export default MenuBar;