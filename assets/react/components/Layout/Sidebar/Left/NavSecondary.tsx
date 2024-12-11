import {LucideIcon} from "lucide-react";
import * as React from "react";
import {
    Sidebar,
    SidebarGroup,
    SidebarGroupContent,
    SidebarMenu, SidebarMenuBadge,
    SidebarMenuButton,
    SidebarMenuItem
} from "@/components/ui/sidebar";

interface Item {
    title: string;
    url: string;
    icon: LucideIcon;
    badge?: React.ReactNode;
}

export default function ({ items, ...props}: {items: Item[]} & React.ComponentPropsWithoutRef<typeof Sidebar>) {
    return (
        <SidebarGroup {...props}>
            <SidebarGroupContent>
                <SidebarMenu>
                    {items.map((item: Item) => (
                        <SidebarMenuItem key={item.title}>
                            <SidebarMenuButton asChild>
                                <a href={item.url}>
                                    <item.icon />
                                    <span>{item.title}</span>
                                </a>
                            </SidebarMenuButton>
                            {item.badge && <SidebarMenuBadge>{item.badge}</SidebarMenuBadge>}
                        </SidebarMenuItem>
                    ))}
                </SidebarMenu>
            </SidebarGroupContent>
        </SidebarGroup>
    )
}