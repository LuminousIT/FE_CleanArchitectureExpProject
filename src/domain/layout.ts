export type RouteProps = {
    path: string;
    element: React.ReactNode;
    children?: Array<RouteProps>;
};

export type RoutesProp = Array<RouteProps>;

export type SidebarMenuProps = {
    title: string;
    path: string;
    icon: React.ReactNode;
    iconClosed?: React.ReactNode;
    iconOpen?: React.ReactNode;
    children?: Array<SidebarMenuProps> | null;
};

export type SidebarProps = {
    handleMainLayoutRespMargin: (val: string) => void;
};

export type SubMenuProps = {
    item: SidebarMenuProps;
};
