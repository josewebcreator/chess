import { Status } from '../../constant';
import { useAppContext } from '../../contexts/context';
import { closePopup } from '../../reducer/actions/popup';
import './popup.css'
import PromotionBox from './promotionBox/promotionBox';


export function Popup (){

  const { appState, dispatch } = useAppContext();

  if(appState.status === Status.ongoing){
    return null;
  }
  
  function onClosePopup(){
    dispatch(closePopup());
  }


  return (
    <div className="popup">
      <PromotionBox onClosePopup={onClosePopup}/>
    </div>
  )

}

export default Popup;