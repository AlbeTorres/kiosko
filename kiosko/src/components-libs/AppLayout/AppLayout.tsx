import { ReactNode, useEffect, useState } from "react";
import AppHeader from "./AppHeader";
import AppSidenav, { SidenavItem } from "./AppSidenav";

export type AppLayoutProps<K = any> = {
  appName?: string;
  children: ReactNode;
  current?: K;
  navs?: SidenavItem<K>[];
  title?: ReactNode;
  mainAction?: ReactNode;
};

export default function AppLayout<K = any>({
  appName,
  children,
  title,
  current,
  navs = [],
  mainAction,
}: AppLayoutProps<K>) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  return (
    <div className="relative flex min-h-screen w-full justify-center px-5">
      <div className="flex w-full max-w-screen-lg pt-header">
         <AppHeader title={title} onMenu={() => setOpen(true)} /> 

        <AppSidenav
          appName={appName}
          current={current}
          navs={navs}
          open={open}
          onClose={() => setOpen(false)}
          mainAction={mainAction}
        />

        <div className="w-full pl-0 lg:pl-sidebar">
          <main className="py-5 pl-0 lg:pl-5">{children}</main>
        </div>
      </div>
    </div>
  );
}
