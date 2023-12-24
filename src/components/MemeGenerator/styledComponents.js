import styled from 'styled-components'

export const MainContainer = styled.div`
  height: 100vh;
  padding: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Card = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 70vw;
`

export const Heading = styled.h1`
  color: #35469c;
  font-family: 'Roboto';
  font-weight: bold;
`

export const Label = styled.label`
  color: #7e858e;
  font-family: 'Roboto';
`

export const Input = styled.input`
  border: 1px solid #d7dfe9;
  background-color: #fff;
  width: 100%;
  color: #5a7184;
  padding: 10px;
  border-radius: 5px;
  margin-top: 10px;
  margin-bottom: 20px;
  font-family: 'Roboto';
  outline: none;
`
export const Button = styled.button`
  color: #fff;
  background-color: #0b69ff;
  border: 0px;
  outline: none;
  border-radius: 10px;
  width: 50%;
  height: 40px;
`
export const ImageMeme = styled.div`
  background-image: url('${props => props.bgImage}');
  height: 300px;
  background-size: cover;
  width: 50%;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

export const Para = styled.p`
  font-size: ${props => props.fontSize}px;
  color: #fff;
`
