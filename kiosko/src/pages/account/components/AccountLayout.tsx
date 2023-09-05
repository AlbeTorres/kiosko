import { ReactNode } from "react";
import { AppLayout } from "../../../components-libs/AppLayout";
import { appUrls } from "../../../constants";
import { FaCalendar, FaLock, FaUser } from "react-icons/fa";

  
  export type AccountNavKey =
    | "general"
    | "bookings"
    | "reviews"
    | "invoices"
    | "memberships"
    | "change-password";
  
  type Props = { children: ReactNode; title?: ReactNode; current?: AccountNavKey };
  
  export default function AccountLayout({ children, title, current = "general" }: Props) {

    return (
      <AppLayout<AccountNavKey>
        appName={'Perfil'}
        current={current}
        title={title}
        navs={[
          {
            key: "general",
            label: "Información general",
            href: appUrls.account.index,
            icon: <FaUser />,
            iconActive: <FaUser className="text-black" />,
          },
          {
            key: "bookings",
            label: "Mis envíos",
            href: appUrls.account.bookings,
            icon: <FaCalendar />,
            iconActive: <FaCalendar className="text-black"/>,
          },
          {
            key: "change-password",
            label: "Cambiar contraseña",
            href: appUrls.account.changePassword,
            icon: <FaLock />,
            iconActive: <FaLock className="text-black" />,
          },
        ]}
      >
        {children}
      </AppLayout>
    );
  }
  