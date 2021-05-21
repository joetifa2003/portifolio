import { SystemProps, Theme } from "@xstyled/emotion";
import { DetailedHTMLProps, ElementType, HTMLAttributes } from "react";

export type styeldProps = SystemProps<Theme> & {
    as?: ElementType<any>;
    theme?: Theme;
} & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
