type Props = {
    children: React.ReactNode;
}

export const MasterRoot = ({ children }: Props) => {
    return (
        <div className="w-full">
            { children }
        </div>
    )
}