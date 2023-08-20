export const CardList = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="w-full flex items-center gap-8 my-8">
            { children }
        </div>
    )
}