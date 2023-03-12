import { useState } from 'react'
import {
  getDatabase,
  ref,
  set,
  onValue,
  update,
  push,
  child,
} from 'firebase/database'
import { app } from './init'
import { Reaction } from 'types'
import { broadsides, broadsidesList } from 'data'
import { useObject } from 'react-firebase-hooks/database'
// Follow this pattern to import other Firebase services

const db = getDatabase(app)

export type Vote = { type: Reaction; add: boolean }

// writing a whole record, only using this for initial set up
function writeUserData(broadsideId: number) {
  const data: Record<Reaction, number> = {
    enjoyable: 0,
    funny: 0,
    sad: 0,
  }
  set(ref(db, 'votes/' + broadsideId), data)
}


export const votesRef = ref(db, 'votes/')

// export const useDb = () => {
//   const [snapshot, loading, error] = useObject(votesRef);

//   const [voteData, setVoteData] = useState({})
//   onValue(votesRef, (snapshot) => {
//     const data = snapshot.val()
//     console.log(data)
//     setVoteData(data)
//     // set(votesRef, data)
//   })
//   return {
//     voteData,
//     setVoteData,
//   }
// }

// update child node
export function writeVote(broadsideId: string, vote: Vote) {
  const updateUrl = ref(db, 'votes/' + broadsideId)
  console.log('vote value ', updateUrl.toJSON())
  // ServerValue.increment(1)
  return
  const postData = vote
  // need to get current value...
  const newPostKey = push(child(ref(db), 'votes')).key

  const updates = { ['/votes/' + broadsideId]: postData }

  return update(ref(db), updates)
}
