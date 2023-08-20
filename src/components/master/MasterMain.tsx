type Props = {
    children: React.ReactNode;
}

export const MasterMain = ({ children }: Props) => {
    return (
        <div className="container mx-auto py-4 flex items-center w-full gap-4">
            { children }
        </div>
    )
}