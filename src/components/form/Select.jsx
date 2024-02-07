export function Select({nbJournee, onChange }) {
    
    const getOptions = () => {
        let content = [];
        for (let i=1; i<=nbJournee; i++) {
            content.push(<option key={i} value={i}  >Journée {i}</option>)
        }
        return content;
    }

    return <div>
        <select 
            className="form-select" 
            onChange={(e)=> onChange(e.target.value)}
        >
            <option defaultValue> Choisir une journée à afficher...</option>
            {getOptions()}
        </select>
    </div>
}