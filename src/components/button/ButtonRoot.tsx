type Props = {
    children: React.ReactNode;
    label: string;
    defaultTextColor: string;
    hoverTextColor: string;
}

export const ButtonRoot = ({ children, label, defaultTextColor, hoverTextColor }: Props) => {
    return (
        <button className="group flex items-center relative mt-6">
            { children }
            <a href="" className={`${defaultTextColor} ml-12 z-10 group-hover:${hoverTextColor} pr-4`}>{ label }</a>
        </button>
    )
} 