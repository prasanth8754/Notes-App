import {Heading} from '../Notes/styledComponents'
import {LiCont} from './styledComponents'

const NoteItem = props => {
  const {noteDetails} = props
  const {title, desc} = noteDetails

  return (
    <LiCont>
      <Heading>{title}</Heading>
      <Heading as="p" para>
        {desc}
      </Heading>
    </LiCont>
  )
}

export default NoteItem
