type Props = {
    children: React.ReactNode;
}

export const MasterMain = ({ children }: Props) => {
    return (
        <div className="container mx-auto my-8 flex w-full gap-8">
            { children }
        </div>
    )
}