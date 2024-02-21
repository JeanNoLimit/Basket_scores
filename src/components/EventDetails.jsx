

export function EventDetails({event}){
    console.log(event);
    return (
        event === undefined ? 
            (<div>PAs de match selectionné pour l'instant </div>) : 
            (
                <div className="text-center">
                    {event.strEvent}
                </div>
            )
    );
}