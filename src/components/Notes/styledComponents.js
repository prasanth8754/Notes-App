import styled from 'styled-components'

// {BgCont,Cont,Heading,FromCont,Input,Button,NoView,Img,UlCont}

export const BgCont = styled.div`
  min-height: 100vh;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 30px;
`
export const Cont = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 768px) {
    width: 70%;
  }
`
export const Heading = styled.h1`
  ${props => {
    if (props.para) {
      return `color: #334155;
        font-size:16px;
        font-family:"Roboto";
        `
    }
    if (props.head) {
      return `color:#4c63b6;
          font-family:"Bree Serif";
          font-size:25px;
          `
    }
    return `color:#1e293b;
        font-size:23px;
        font-family:"Roboto";
        `
  }}
`
export const FromCont = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 4px 16px 0px #aab8c8;
  color: #475569;
  padding: 15px;
  border-radius: 8px;
  margin-top: 30px;
  margin-bottom: 40px;
`
export const Input = styled.input`
  border: 0px;
  background: transparent;
  outline: none;
  padding-left: 20px;
  color: ${props => (props.textarea ? '#475569' : '#334155')};
  font-weight: ${props => (props.textarea ? 'normal' : 'bold')};
  width: 100%;
  height: 40px;
  margin-bottom: 20px;
`
export const Button = styled.button`
  background-color: #4c63b6;
  border: 0px;
  outline: none;
  cursor: pointer;
  width: 100px;
  height: 45px;
  color: #ffffff;
  align-self: flex-end;
  border-radius: 4px;
`
export const NoView = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const Img = styled.img`
  width: 100px;
`
export const UlCont = styled.ul`
  list-style-type: none;
  padding-left: 0px;
  display: flex;
  align-items: center;
  gap: 20px;
  align-self: flex-start;
  flex-wrap: wrap;
`
