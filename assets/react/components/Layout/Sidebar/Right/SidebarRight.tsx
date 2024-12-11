// @ts-ignore
import AvatarImage from '@/images/avatar.jpg';
import * as React from "react";
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu, SidebarMenuButton, SidebarMenuItem,
    SidebarSeparator
} from "@/components/ui/sidebar";
import NavUser from "@/react/components/Layout/Sidebar/Right/NavUser";
import DatePicker from "@/react/components/Layout/Sidebar/Right/DatePicker";
import Calendars from "@/react/components/Layout/Sidebar/Right/Calendars";
import {Plus} from "lucide-react";

const data = {
    user: {
        name:'Levy Nkeneng',
        email: 'user@nexteam.com',
        avatar: AvatarImage
    },
    calendars: [
        {
            name: 'My Calendars',
            items: ['Personal', 'Work', 'Family']
        },
        {
            name: "Favorites",
            items: ["Holidays", "Birthdays"],
        },
        {
            name: "Other",
            items: ["Travel", "Reminders", "Deadlines"],
        },
    ]
}

export default function ({ ...props }: React.ComponentProps<typeof Sidebar>) {
    return (
        <Sidebar collapsible='none' {...props} className="sticky hidden lg:flex top-0 h-svh border-l">
            <SidebarHeader className="h-16 border-b border-sidebar-border">
                <NavUser user={data.user} />
            </SidebarHeader>

            <SidebarContent>
                <DatePicker />
                <SidebarSeparator className="mx-0" />
                <Calendars calendars={data.calendars} />
            </SidebarContent>

            <SidebarFooter>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton>
                            <Plus />
                            <span>New Calendar</span>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
        </Sidebar>
    );
}