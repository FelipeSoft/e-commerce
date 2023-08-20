type Props = {
    icon: React.ReactNode;
    label: string;
}

export const Card = ({ icon, label }: Props) => {
    return (
        <div className="w-full flex items-center p-4 rounded-md bg-white shadow-xl">
            { icon }
            { label }
        </div>
    )
}