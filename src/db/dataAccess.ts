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
// Follow this pattern to import other Firebase services

const db = getDatabase(app)

export type Vote = {type: Reaction, add: boolean}

// writing a whole record, only using this for initial set up
function writeUserData(broadsideId: number) {
  const data: Record<Reaction, number> = {
    enjoyable: 0,
    funny: 0,
    sad: 0
  }
  set(ref(db, 'votes/' + broadsideId), data)
}

// listen for updates
const starCountRef = ref(db, 'posts/' + '1234' + '/starCount')
onValue(starCountRef, (snapshot) => {
  const data = snapshot.val()
  // updateStarCount(postElement, data);
})

// update child node
export function writeVote(broadsideId: string, vote: Vote) {
  const updateUrl = ref(db, 'votes/' + broadsideId )
  console.log('vote value ', updateUrl.toJSON())
  // ServerValue.increment(1)
  return
  const postData = vote
  // need to get current value...
  const newPostKey = push(child(ref(db), 'votes')).key

  const updates = { ['/votes/' + broadsideId]: postData}

  return update(ref(db), updates)
}
