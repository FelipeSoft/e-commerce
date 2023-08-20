type Props = {
    icon: React.ReactNode;
    label: string;
}

export const Card = ({ icon, label }: Props) => {
    return (
        <div className="w-full flex items-center border-2 border-gray-200 p-4 rounded-md">
            { icon }
            { label }
        </div>
    )
}