import { useRef, useState } from 'react';
import Piece from './piece';
import './pieces.css'
//import { copyPosition, createPosition } from '../../helper';
import { useAppContext } from '../../contexts/context';
import { makeNewMove, clearCandidates } from '../../reducer/actions/move';
import arbiter from '../../arbiter/arbiter';
import { openPromotion } from '../../reducer/actions/popup';
import { getCastlingDirections } from '../../arbiter/getMoves';
import { updateCastling } from '../../reducer/actions/game';


export default function Pieces(){

  const ref = useRef();
  const { appState , dispatch } = useAppContext();
  const currentPosition = appState.position[appState.position.length-1]

  
  function calculateCoords(e){
    const {top,left,width} = ref.current.getBoundingClientRect()
    const size = width / 8
    const y = Math.floor((e.clientX - left) / size) 
    const x = 7 - Math.floor((e.clientY - top) / size)

    return {x,y}
  }

  function openPromotionBox({rank,file,x,y}){
    dispatch(openPromotion({
      rank : Number(rank),
      file : Number(file),
      x,
      y
    }));
  }

  function updateCastlingState({piece, rank, file}){
    const direction = getCastlingDirections({
      castleDirection:appState.castleDirection,
      piece,
      file,
      rank
    })
    if (direction){
      dispatch(updateCastling(direction))
    }
  }

  function move(e){
    const {x,y} = calculateCoords(e);


    const [piece,rank,file] = e.dataTransfer.getData('text').split(',');

    if (appState.candidateMoves?.find(m => m[0] === x && m[1] === y)){

      if((piece === 'wp' && x ===7) || (piece === 'bp' && x===0)){
        openPromotionBox({rank,file,x,y})
      }

      if(piece.endsWith('r') || piece.endsWith('k')){
        updateCastlingState({piece, rank, file})
      }

      const newPosition = arbiter.performMove({
        position : currentPosition,
        piece, rank, file,x,y
      });

      dispatch(makeNewMove({newPosition}));

    }    

    dispatch(clearCandidates());

  }

  function onDrop(e){
    e.preventDefault();
    
    move(e);

  }

  function onDragOver(e){
    e.preventDefault();
  }

  return (
    <div
      ref = {ref}
      className='pieces'
      onDrop={onDrop}
      onDragOver={onDragOver}
    >
      {
        currentPosition.map((r,rank)=>
          r.map((f,file)=>
          currentPosition[rank][file] ?
              
            <Piece
              key = {rank+'-'+file}
              rank = {rank}
              file = {file}
              piece = {currentPosition[rank][file]}
            
            />
            
            : 
              null
          )
        )
      }

    </div>
  );

}