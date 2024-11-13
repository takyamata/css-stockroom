import React, { type FC } from "react";
import { NavLink } from "react-router-dom";

interface SideMenuProps {
}

interface menuItem {
    text: string;
    path: string;
    // icon: React.ComponentType;
}

const SideMenu: FC<SideMenuProps> = ({
}) => {
    const MenuItems: menuItem[] = [
        { text: "Home", path: "/" },
        { text: "Home2", path: "/home2" },
        { text: "Home3", path: "/home3" },
    ];
    return (
        <div>
            <div>
                {MenuItems.map((item, index) => (
                    <NavLink key={item.text} to={item.path} >
						<div key={index}>
							{item.text}
						</div>
					</NavLink>
                ))}
            </div>
        </div>
    );
};

export default SideMenu;
