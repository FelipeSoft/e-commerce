type Props = {
    children: React.ReactNode;
}

export const MasterVersatile = ({ children }: Props) => {
    return (
        <div className="w-3/4 h-full flex flex-col">
            { children }
        </div>
    )
}