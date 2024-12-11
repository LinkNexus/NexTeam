import * as React from "react";
import {
    Search,
    Home,
    Inbox,
    Sparkles,
    Calendar,
    Settings2,
    Trash2,
    MessageCircleQuestion,
    Command,
    AudioWaveform
} from 'lucide-react';
import {Sidebar, SidebarContent, SidebarHeader, SidebarRail} from "@/components/ui/sidebar";
import TeamSwitcher from "@/react/components/Layout/Sidebar/TeamSwitcher";
import NavMain from "@/react/components/Layout/Sidebar/NavMain";
import NavFavorites from "@/react/components/Layout/Sidebar/NavFavorites";
import NavWorkspaces from "@/react/components/Layout/Sidebar/NavWorkspaces";
import NavSecondary from "@/react/components/Layout/Sidebar/NavSecondary";

export default function ({ ...props }: React.ComponentProps<typeof Sidebar>): React.ReactElement {
    const data = {
        teams: [
            {
                name: 'Acme Inc',
                logo: Command,
                plan: "Free"
            },
            {
                name: "Acme Corp.",
                logo: AudioWaveform,
                plan: "Startup",
            },
            {
                name: "Evil Corp.",
                logo: Command,
                plan: "Free",
            },
        ],
        navMain: [
            {
                title: 'Search',
                url: '#',
                icon: Search,
            },
            {
                title: 'Home',
                url: '',
                icon: Home,
                isActive: true,
            },
            {
                title: 'Inbox',
                url: '#',
                icon: Inbox,
                badge: 10
            },
            {
                title: "Ask AI",
                url: "#",
                icon: Sparkles,
            },
        ],
        navSecondary: [
            {
                title: 'Calendar',
                url: '#',
                icon: Calendar,
            },
            {
                title: 'Settings',
                url: '#',
                icon: Settings2,
            },
            {
                title: 'Trash',
                url: '#',
                icon: Trash2,
            },
            {
                title: "Help",
                url: "#",
                icon: MessageCircleQuestion,
            },
        ],
        favorites: [
            {
                name: "Project Management & Task Tracking",
                url: "#",
                emoji: "📊",
            },
            {
                name: "Family Recipe Collection & Meal Planning",
                url: "#",
                emoji: "🍳",
            },
            {
                name: "Fitness Tracker & Workout Routines",
                url: "#",
                emoji: "💪",
            },
            {
                name: "Book Notes & Reading List",
                url: "#",
                emoji: "📚",
            },
            {
                name: "Sustainable Gardening Tips & Plant Care",
                url: "#",
                emoji: "🌱",
            },
            {
                name: "Language Learning Progress & Resources",
                url: "#",
                emoji: "🗣️",
            },
            {
                name: "Home Renovation Ideas & Budget Tracker",
                url: "#",
                emoji: "🏠",
            },
            {
                name: "Personal Finance & Investment Portfolio",
                url: "#",
                emoji: "💰",
            },
            {
                name: "Movie & TV Show Watchlist with Reviews",
                url: "#",
                emoji: "🎬",
            },
            {
                name: "Daily Habit Tracker & Goal Setting",
                url: "#",
                emoji: "✅",
            },
        ],
        workspaces: [
            {
                name: "Personal Life Management",
                emoji: "🏠",
                pages: [
                    {
                        name: "Daily Journal & Reflection",
                        url: "#",
                        emoji: "📔",
                    },
                    {
                        name: "Health & Wellness Tracker",
                        url: "#",
                        emoji: "🍏",
                    },
                    {
                        name: "Personal Growth & Learning Goals",
                        url: "#",
                        emoji: "🌟",
                    },
                ],
            },
            {
                name: "Professional Development",
                emoji: "💼",
                pages: [
                    {
                        name: "Career Objectives & Milestones",
                        url: "#",
                        emoji: "🎯",
                    },
                    {
                        name: "Skill Acquisition & Training Log",
                        url: "#",
                        emoji: "🧠",
                    },
                    {
                        name: "Networking Contacts & Events",
                        url: "#",
                        emoji: "🤝",
                    },
                ],
            },
            {
                name: "Creative Projects",
                emoji: "🎨",
                pages: [
                    {
                        name: "Writing Ideas & Story Outlines",
                        url: "#",
                        emoji: "✍️",
                    },
                    {
                        name: "Art & Design Portfolio",
                        url: "#",
                        emoji: "🖼️",
                    },
                    {
                        name: "Music Composition & Practice Log",
                        url: "#",
                        emoji: "🎵",
                    },
                ],
            },
            {
                name: "Home Management",
                emoji: "🏡",
                pages: [
                    {
                        name: "Household Budget & Expense Tracking",
                        url: "#",
                        emoji: "💰",
                    },
                    {
                        name: "Home Maintenance Schedule & Tasks",
                        url: "#",
                        emoji: "🔧",
                    },
                    {
                        name: "Family Calendar & Event Planning",
                        url: "#",
                        emoji: "📅",
                    },
                ],
            },
            {
                name: "Travel & Adventure",
                emoji: "🧳",
                pages: [
                    {
                        name: "Trip Planning & Itineraries",
                        url: "#",
                        emoji: "🗺️",
                    },
                    {
                        name: "Travel Bucket List & Inspiration",
                        url: "#",
                        emoji: "🌎",
                    },
                    {
                        name: "Travel Journal & Photo Gallery",
                        url: "#",
                        emoji: "📸",
                    },
                ],
            },
        ],
    }

    return (
        <Sidebar className='border-r-0' {...props}>
            <SidebarHeader>
                <TeamSwitcher teams={data.teams} />
                <NavMain items={data.navMain} />
            </SidebarHeader>
            <SidebarContent>
                <NavFavorites favorites={data.favorites} />
                <NavWorkspaces workspaces={data.workspaces} />
                <NavSecondary items={data.navSecondary} />
            </SidebarContent>
            <SidebarRail />
        </Sidebar>
    );
}