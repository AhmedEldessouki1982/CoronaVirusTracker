
export default function Sorting (props) {
    let out = props.map (
        country => (
            {
                name: country.name,
                CasesTotal: country.totalCases
            }
        )
    )

    let sortedOut = out.sort (
        (a,b) => {
            return (b.CasesTotal - a.CasesTotal)
        }
    )
    return sortedOut;
}