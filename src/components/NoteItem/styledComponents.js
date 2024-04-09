import styled from 'styled-components'

// LiCont

export const LiCont = styled.li`
  padding: 15px;
  border: 1px solid #475569;
  border-radius: 10px;
  width: 100%;
  @media screen and (min-width: 768px) {
    min-width: 200px;
    max-width: 100%;
    width: 250px;
    flex-grow: 1;
    flex-shrink: 0;
  }
`
