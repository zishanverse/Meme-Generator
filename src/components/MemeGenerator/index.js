import {Component} from 'react'
import {
  MainContainer,
  Card,
  Heading,
  Label,
  Input,
  Button,
  ImageMeme,
  Para,
} from './styledComponents'
import './index.css'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]

class MemeGenerator extends Component {
  state = {
    imgUrl: '',
    topText: '',
    bottomText: '',
    selected: fontSizesOptionsList[0].optionId,
    showMeme: false,
  }

  inputUrl = event => this.setState({imgUrl: event.target.value})

  selectFontSize = event => this.setState({selected: event.target.value})

  inputBottomText = event => this.setState({bottomText: event.target.value})

  inputTopText = event => this.setState({topText: event.target.value})

  generatePhoto = event => {
    event.preventDefault()
    this.setState({showMeme: true})
  }

  render() {
    const {imgUrl, topText, bottomText, selected, showMeme} = this.state
    return (
      <MainContainer>
        <Card>
          <div className="content">
            <Heading>Meme Generator</Heading>
            <form onSubmit={this.generatePhoto}>
              <Label htmlFor="url">Image URL</Label>
              <Input
                type="text"
                id="url"
                placeholder="Enter the Image URL"
                onChange={this.inputUrl}
                value={imgUrl}
              />
              <br />

              <Label htmlFor="top">Top Text</Label>
              <Input
                type="text"
                id="top"
                placeholder="Enter the Top Text"
                onChange={this.inputTopText}
                value={topText}
              />
              <br />

              <Label htmlFor="bottom">Bottom Text</Label>
              <Input
                type="text"
                id="bottom"
                placeholder="Enter the Botttom Text"
                onChange={this.inputBottomText}
                value={bottomText}
              />
              <br />

              <Label htmlFor="url">Font Size</Label>
              <br />
              <select
                className="select"
                value={selected}
                onChange={this.selectFontSize}
              >
                {fontSizesOptionsList.map(each => (
                  <option key={each.optionId}>{each.displayText}</option>
                ))}
              </select>
              <br />

              <Button type="submit">Generate</Button>
            </form>
          </div>
        </Card>
        {showMeme ? (
          <ImageMeme bgImage={imgUrl} data-testid="meme">
            <Para fontSize={selected}>{topText}</Para>
            <Para fontSize={selected}>{bottomText}</Para>
          </ImageMeme>
        ) : null}
      </MainContainer>
    )
  }
}

export default MemeGenerator
