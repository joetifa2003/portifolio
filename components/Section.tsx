import { x } from "@xstyled/emotion";
import { Element } from "react-scroll";
import { styeldProps } from "utils/types";
import Header from "./Header";

// calc(100vh - var(--nav-height))

function Section({
    name,
    styledProps,
    fullscreen,
    children,
    title,
}: {
    children?;
    styledProps?: styeldProps;
    fullscreen?: boolean;
    name: string;
    title?: string;
}) {
    return (
        <Element name={name}>
            <x.section
                container
                pt="var(--nav-height)"
                mx="auto"
                display="flex"
                flexDirection="column"
                justifyContent="center"
                overflow="hidden"
                minH={fullscreen ? "100vh" : ""}
                maxH="max-content"
                {...styledProps}
            >
                {title && <Header title={title} />}
                <x.div
                    flex={1}
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                >
                    {children}
                </x.div>
            </x.section>
        </Element>
    );
}

export default Section;
