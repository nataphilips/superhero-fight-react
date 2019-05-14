import React, { Component } from 'react';
import styled from 'styled-components';
import Batman from '../models/superheroes/batman';
import CaptainAmerica from '../models/superheroes/captainamerica';
import Hulk from '../models/superheroes/hulk';
import Spiderman from '../models/superheroes/spiderman';
import Superman from '../models/superheroes/superman';
import Thor from '../models/superheroes/thor';
import Joker from '../models/villain/joker';
import LexLuthor from '../models/villain/lexluthor';
import Loki from '../models/villain/loki';
import Magneto from '../models/villain/magneto';
import Mystique from '../models/villain/mystique';
import Thanos from '../models/villain/thanos';

class App extends Component {
  constructor(props) {
    super(props);

    this.characters =  [
      new Batman(),
      new CaptainAmerica(),
      new Hulk(),
      new Spiderman(),
      new Superman(),
      new Thor(),
      new Joker(),
      new LexLuthor(),
      new Loki(),
      new Magneto(),
      new Mystique(),
      new Thanos()
    ]
  }

  render() {
    return (
      <AppBody>
        <HeroesContainer>
            {this.characters.map(x => (
              <CharacterCard image={x.picture}>
                <StatsWrapper className="stat">
                  {x.stats.map(s => ([
                    <StatsName>
                      {s.name}
                    </StatsName>,
                    <StatsBarWrap>
                      <StatsBar value={s.value} />
                    </StatsBarWrap>
                  ]
                  ))}
                </StatsWrapper>
              </CharacterCard>
            ))}
        </HeroesContainer>
      </AppBody>
    );
  }
}

const Flex = styled.div`
  display: flex;
`
const AppBody = styled(Flex)`
  background: #5d5b66;
  height: 100%;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const HeroesContainer = styled(Flex)`
  width: 90%;
  flex-direction: row;
  height: 100%;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
`
const StatsWrapper = styled(Flex)`
  min-width: 300px;
  height: 260px;
  padding: 20px;
  flex-direction: column;
  visibility: hidden;
  background-color: rgba(77, 73, 96, 0.7);
  max-height: 0;
`
const StatsName = styled(Flex)`
  width: 100%;
  color: #e9e5ff;
  padding-bottom: 3px;
  text-transform: uppercase;
`
const StatsBarWrap = styled(Flex)`
  border: 2px solid #e9e5ff;
  height: 10px;
  border-radius: 3px;
`
const StatsBar = styled(Flex)`
  width: ${props => props.value}%;
  height: 100%;
  background-color: #e9e5ff;
`
const CharacterCard = styled.div`
  min-width: 300px;
  height: 300px;
  margin: 10px;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  cursor: pointer;

  &:hover {
    .stat {
      visibility: visible;
      /* transform: translateY(50px); */
      /* transition-duration: 2s; */
      overflow-y: hidden;
    	max-height: 260px;
    	transition-property: all;
    	transition-duration: .5s;
    	transition-timing-function: cubic-bezier(0.25, 0.25, 0.5, 1);
    }
  }
 `

export default App;
