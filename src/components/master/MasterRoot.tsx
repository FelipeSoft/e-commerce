type Props = {
    children: React.ReactNode;
}

export const MasterRoot = ({ children }: Props) => {
    return (
        <div className="w-full bg-gray-100">
            { children }
        </div>
    )
}