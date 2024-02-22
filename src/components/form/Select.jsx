

export function Select({nbJournee, onChange,handleModalClose }) {
    
    const getOptions = () => {
        let content = [];
        for (let i=1; i<=nbJournee; i++) {
            content.push(<option key={i} value={i}  >Journée {i}</option>)
        }
        return content;
    }

    return (
    
        <div className="mx-3 form-floating" style={{ width: 210 }} onChange={handleModalClose}>
            <select 
                className="form-select px-3" 
                onChange={(e)=> {onChange(e.target.value)}}
                id="floatingSelect"
                >
                {getOptions()}
            </select>
            <label className="" htmlFor="floatingSelect"> Selectionnez une journée : </label>
        </div>
    );     
}