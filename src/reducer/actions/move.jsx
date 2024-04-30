import actionTypes from "../actionTypes"

export function makeNewMove({newPosition}){
  return{
    type : actionTypes.NEW_MOVE,
    payload : {newPosition}
  }
}

export function generateCandidateMoves({candidateMoves}){
  return{
    type : actionTypes.GENERATE_CANDIDATE_MOVES,
    payload : {candidateMoves}
  }
}

export function clearCandidates(){
  return{
    type : actionTypes.CLEAR_CANDIDATE_MOVES,
  }
}