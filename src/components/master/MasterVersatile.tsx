type Props = {
    children: React.ReactNode;
}

export const MasterVersatile = ({ children }: Props) => {
    return (
        <div className="w-full h-full flex flex-col">
            { children }
        </div>
    )
}