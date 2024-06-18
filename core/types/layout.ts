import {NextPage} from "next";
import {ComponentType,ReactElement,ReactNode} from "react";

export type NextPageWithLayout<P = {},IP = P> = NextPage<P,IP> & {
    getLayout?: (_page: ReactElement,pageProps?: P) => ReactNode;
    layout?: ComponentType;
};
