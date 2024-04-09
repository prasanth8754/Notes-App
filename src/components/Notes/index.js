import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import NoteItem from '../NoteItem'

import {
  BgCont,
  Cont,
  Heading,
  FromCont,
  Input,
  Button,
  NoView,
  Img,
  UlCont,
} from './styledComponents'

const Notes = () => {
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')
  const [notes, setNotes] = useState([])

  const onChangeTitle = event => {
    setTitle(event.target.value)
  }

  const onChangeDesc = event => {
    setDesc(event.target.value)
  }

  const onSubmitNotes = event => {
    event.preventDefault()

    const newNote = {
      id: uuidv4(),
      title,
      desc,
    }
    setNotes(prevState => [...prevState, newNote])
    setTitle('')
    setDesc('')
  }

  return (
    <BgCont>
      <Cont>
        <Heading head>Notes</Heading>
        <FromCont onSubmit={onSubmitNotes}>
          <Input
            type="text"
            placeholder="Title"
            onChange={onChangeTitle}
            value={title}
          />
          <Input
            textarea
            value={desc}
            rows="4"
            cols="50"
            as="textarea"
            placeholder="Take a Note..."
            onChange={onChangeDesc}
          />
          <Button type="submit">Add</Button>
        </FromCont>

        {notes.length === 0 && (
          <NoView>
            <Img
              src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
              alt="notes empty"
            />
            <Heading>No Notes Yet</Heading>
            <Heading as="p" para>
              Notes you add will appear here
            </Heading>
          </NoView>
        )}

        {notes.length > 0 && (
          <UlCont>
            {notes.map(eachItem => (
              <NoteItem key={eachItem.id} noteDetails={eachItem} />
            ))}
          </UlCont>
        )}
      </Cont>
    </BgCont>
  )
}

export default Notes
