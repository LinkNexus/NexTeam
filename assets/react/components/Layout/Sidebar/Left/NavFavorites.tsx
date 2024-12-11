import {
    SidebarGroup,
    SidebarGroupLabel,
    SidebarMenu, SidebarMenuAction,
    SidebarMenuButton,
    SidebarMenuItem, SidebarMenuSubItem,
    useSidebar
} from "@/components/ui/sidebar";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import {Link, MoreHorizontal, StarOff, Trash2} from "lucide-react";

interface Favorite {
    name: string;
    url: string;
    emoji: string;
}

export default function ({ favorites }: { favorites: Favorite[]}) {
    const {isMobile} = useSidebar();
    const options = [
        {
            label: 'Remove from Favorites',
            icon: StarOff
        },
        {
            label: 'Copy Link',
            icon: Link
        },
        {
            label: 'Delete',
            icon: Trash2
        }
    ]

    return (
        <SidebarGroup className="group-data-[collapsible=icon]:hidden">
            <SidebarGroupLabel>Favorites</SidebarGroupLabel>
            <SidebarMenu>
                {favorites.map((item: Favorite) => (
                    <SidebarMenuItem key={item.name}>
                        <SidebarMenuButton asChild>
                            <a href={item.url} title={item.name} >
                                <span>{item.emoji}</span>
                                <span>{item.name}</span>
                            </a>
                        </SidebarMenuButton>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <SidebarMenuAction showOnHover >
                                    <MoreHorizontal />
                                    <span className='sr-only'>More</span>
                                </SidebarMenuAction>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent
                                className="w-56 rounded-lg"
                                side={isMobile ? "bottom" : "right"}
                                align={isMobile ? "end" : "start"}
                            >
                                {options.map((option, index: number) => (
                                    <>
                                        <DropdownMenuItem>
                                            <option.icon className='text-muted-foreground' />
                                            <span>{option.label}</span>
                                        </DropdownMenuItem>
                                        {index !== options.length - 1 && <DropdownMenuSeparator />}
                                    </>
                                ))}
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </SidebarMenuItem>
                ))}
                <SidebarMenuSubItem>
                    <SidebarMenuButton className="text-sidebar-foreground/70">
                        <MoreHorizontal />
                        <span>More</span>
                    </SidebarMenuButton>
                </SidebarMenuSubItem>
            </SidebarMenu>
        </SidebarGroup>
    )
}