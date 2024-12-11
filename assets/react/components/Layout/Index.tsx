import {SidebarInset, SidebarProvider, SidebarTrigger} from "@/components/ui/sidebar";
import SidebarLeft from "@/react/components/Layout/Sidebar/Left/SidebarLeft";
import {Separator} from "@/components/ui/separator";
import {Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage} from "@/components/ui/breadcrumb";
import SidebarRight from "@/react/components/Layout/Sidebar/Right/SidebarRight";

export default function Layout() {
    return (
        <SidebarProvider>
            <SidebarLeft />

            <SidebarInset>
                <header className="sticky top-0 flex h-14 shrink-0 items-center gap-2 bg-background">
                    <div className="flex flex-1 items-center gap-2 px-3">
                        <SidebarTrigger/>
                        <Separator orientation="vertical" className="mr-2 h-4"/>
                        <Breadcrumb>
                            <BreadcrumbLink>
                                <BreadcrumbItem>
                                    <BreadcrumbPage className="line-clamp-1">
                                        Project Management & Task Tracking
                                    </BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbLink>
                        </Breadcrumb>
                    </div>
                </header>
                <div className="flex flex-1 flex-col gap-4 p-4">
                    <div className="mx-auto h-24 w-full max-w-3xl rounded-xl bg-muted/50"/>
                    <div className="mx-auto h-[100vh] w-full max-w-3xl rounded-xl bg-muted/50"/>
                </div>
            </SidebarInset>
            <SidebarRight />
        </SidebarProvider>
    );
}