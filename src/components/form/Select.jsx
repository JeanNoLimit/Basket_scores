export function Select({nbJournee, onChange }) {
    
    const getOptions = () => {
        let content = [];
        for (let i=1; i<=nbJournee; i++) {
            content.push(<option key={i} value={i}  >Journée {i}</option>)
        }
        return content;
    }

    return <div className="position-absolute top-50 end-0 translate-middle-y me-5 form-floating" style={{ width: 230 }}>
        
        <select 
            className="form-select " 
            onChange={(e)=> onChange(e.target.value)}
            id="floatingSelect"
            >
            <option defaultValue> Selection...</option>
            {getOptions()}
        </select>
        <label className="" for="floatingSelect"> Selectionnez une journée : </label>
        
    </div>
}