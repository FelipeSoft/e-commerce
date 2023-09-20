type Props = {
    label: string;
}

export const ButtonDefault = ({ label }: Props) => {
    return (
        <button className="m-4 py-2 px-6 text-white bg-indigo-700 hover:bg-indigo-900 rounded-full transition-all ">{ label }</button>
    )
}