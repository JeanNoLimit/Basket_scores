export function Select({nbJournee}) {

    // const [data, setData] = useState(undefined);
    
    const getOptions = () => {
        let content = [];
        for (let i=1; i<=nbJournee; i++) {
            content.push(<option key={i}>Journée {i}</option>)
        }
        return content;
    }

    return <div>
        <select className="form-select">
            <option defaultValue> Choisir une journée à afficher...</option>
           {getOptions()}
        </select>
    </div>
}