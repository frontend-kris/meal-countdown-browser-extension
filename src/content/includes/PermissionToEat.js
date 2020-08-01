import React from 'react'
import { Button } from '@material-ui/core'

const PermissionToEat = (props) => {
    return(
        <div className="diet__alert">
            <p className="diet__header">Nadeszła pora posiłku</p>
            <div className="diet__advice">
                Zjedz go teraz!<br />
                Odłożenie posiłku skutkuje odłożeniem tkanki tłuszczowej.<br />
                Przyzwyczajaj organizm, by nie musiał tego robić.
            </div> 
            <Button onClick={props.confirmEating}>OK, zjadłem!</Button>
        </div>
    )
}

export default PermissionToEat;
 