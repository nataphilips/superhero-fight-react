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

    this.state = {
      slotPointer: 0,
      fightSlots: [undefined, undefined],
    }
  }

  choose(x) {
    const newState = this.state;
    newState.fightSlots[newState.slotPointer] = x;
    newState.slotPointer = (newState.slotPointer === 0 ? 1 : 0);

    this.setState(newState);
  }

  clearSlot(i) {
    const newState = this.state;
    newState.fightSlots[i] = undefined;
    newState.slotPointer = i;

    this.setState(newState);
  }

  render() {
    return (
      <AppBody>
        <BattleContainer>
          <Header>Epic Superhuman Battle</Header>

          <ChosenHero
            image={this.state.fightSlots[0] && this.state.fightSlots[0].picture}
            onClick={() => this.clearSlot(0)}>
            <PickText image={this.state.fightSlots[0] && this.state.fightSlots[0].picture}>
              Pick a hero
            </PickText>
          </ChosenHero>

          <VSBlock>
            <VSText>VS</VSText>
            <FightButton>FIGHT!</FightButton>
          </VSBlock>

          <ChosenHero
            image={this.state.fightSlots[1] && this.state.fightSlots[1].picture}
            onClick={() => this.clearSlot(1)}>
              <PickText image={this.state.fightSlots[1] && this.state.fightSlots[1].picture}>
                Pick a hero
              </PickText>
          </ChosenHero>
        </BattleContainer>
        <HeroesContainer>
            {this.characters.map(x => (
              <CardWrapper>
              <CharacterCard image={x.picture} key={x.id} onClick={() => this.choose(x)}>
                <StatsWrapper className="stat">
                  {x.stats.map(s => (
                    <div key={x.id + '-stat-' + s.name}>
                      <StatsName>
                        {s.name}
                      </StatsName>
                      <StatsBarWrap>
                        <StatsBar value={s.value} />
                      </StatsBarWrap>
                    </div>
                  ))}
                </StatsWrapper>
              </CharacterCard>
              <HeroName>{x.name}</HeroName>
              </CardWrapper>
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
const BattleContainer = styled(Flex)`
  width: 100%;
  height: 380px;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`
const Header = styled(Flex)`
  color: white;
  font-size: 50px;
  width: 100%;
  justify-content: center;
  min-width: 600px;
`
const ChosenHero = styled(Flex)`
  min-width: 250px;
  height: 250px;
  border: 2px dashed grey;
  color: grey;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  background-image: url(${props => props.image});
  background-size: 250px 250px;
  filter: drop-shadow(2px 0px 20px white);
`
const PickText = styled(Flex)`
  ${props => props.image && `
    visibility: hidden;
  `}
`
const VSBlock = styled(Flex)`
  color: white;
  font-size: 80px;
  margin: 0px 80px;
  flex-direction: column;
`
const VSText = styled(Flex)`
  justify-content: center;
`
const FightButton = styled.button`
  color: white;
  font-size: 40px;
  background-color: black;
`
const HeroName = styled(Flex)`
  align-items: center;
  justify-content: center;
  padding-bottom: 10px;
`
const CardWrapper = styled(Flex)`
  color: white;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  border: 2px solid grey;
  flex-direction: column;
  flex-wrap: wrap;
  margin: 3px;
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
  min-width: 250px;
  height: 250px;
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
  font-size: 13px;
`
const StatsBarWrap = styled(Flex)`
  border: 2px solid #e9e5ff;
  height: 7px;
  border-radius: 3px;
`
const StatsBar = styled(Flex)`
  width: ${props => props.value}%;
  height: 100%;
  background-color: #e9e5ff;
`
const CharacterCard = styled.div`
  min-width: 250px;
  height: 250px;
  margin: 10px;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  cursor: pointer;
  filter: drop-shadow(2px 0px 5px white);

  &:hover {
    .stat {
      visibility: visible;
      overflow-y: hidden;
    	max-height: 210px;
    	transition-property: all;
    	transition-duration: .5s;
    	transition-timing-function: cubic-bezier(0.25, 0.25, 0.5, 1);
    }
  }
 `

export default App;
