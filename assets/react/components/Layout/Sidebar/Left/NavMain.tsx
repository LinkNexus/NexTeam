import {LucideIcon} from "lucide-react";
import {SidebarMenu, SidebarMenuButton, SidebarMenuItem} from "@/components/ui/sidebar";

interface Item {
    title: string;
    url: string;
    icon: LucideIcon;
    isActive?: boolean
}
export default function ({ items }: { items: Item[]}) {
    return (
        <SidebarMenu>
            {items.map((item: Item) => (
                <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton isActive={item.isActive} asChild>
                        <a href={item.url}>
                            <item.icon />
                            <span>{item.title}</span>
                        </a>
                    </SidebarMenuButton>
                </SidebarMenuItem>
            ))}
        </SidebarMenu>
    )
}