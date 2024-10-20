import Link from "next/link";
import { NavigationMenuLink, navigationMenuTriggerStyle } from "./ui/navigation-menu";

export default function CustomLink({ children, ...props }) {
    return <Link {...props} legacyBehavior passHref>
        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            {children}
        </NavigationMenuLink>
    </Link>

}