import { getCharacter } from '../../../helper'
import './files.css'

export default function Files ({files}){


  return(
    <div className="files">
        {files.map(file => <span key={file}>{getCharacter(file)}</span>)}
    </div>
  )

}