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
import FightController from '../models/fightcontroller';

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
      displayResult: false,
      battleResult: {},
    }
  }

  stats(character) {
    return Object.keys(character.stats).map(x => ({ name: x, value: character.stats[x] }));
  }

  choose(x) {
    const newState = this.state;
    if (newState.fightSlots[0] !== x && newState.fightSlots[1] !== x) {
      newState.fightSlots[newState.slotPointer] = x;
      newState.slotPointer = (newState.slotPointer === 0 ? 1 : 0);
    }
    this.setState(newState);
  }

  clearSlot(i) {
    const newState = this.state;
    newState.fightSlots[i] = undefined;
    newState.slotPointer = i;

    this.setState(newState);
  }

  battle() {
    const controller = new FightController()
    this.setState({ displayResult: true })
    const battleResult = controller.fight(this.state.fightSlots[0], this.state.fightSlots[1], false);
    this.setState({ battleResult : battleResult});
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

          <Battlefield>
          <ImageBattle />
            <VSBlock hidden={this.state.displayResult}>
              <VSText>VS</VSText>
              <FightButton onClick={() => this.battle()}>FIGHT!</FightButton>
            </VSBlock>
            <BattleResult hidden={!this.state.displayResult}>
              {this.state.battleResult.escaper === 'None' && (
                <Winner>
                  {this.state.battleResult.winner} won
                </Winner>
              )}
              {this.state.battleResult.escaper !== 'None' && (
                <Winner>
                  {this.state.battleResult.escaper} ESCAPED!
                </Winner>
              )}
              <ResultStatsWrapper>
                <ResultStats>
                  Avg Damage: {this.state.battleResult.p1AvgDamage}
                  <br />
                  Avg Dodging: {this.state.battleResult.p1Dodging}%
                </ResultStats>
                <ResultStats>
                  Avg Damage: {this.state.battleResult.p2AvgDamage}
                  <br />
                  Avg Dodging: {this.state.battleResult.p2Dodging}%
                </ResultStats>
              </ResultStatsWrapper>
              <FightButton small={true} onClick={() => this.battle()}>FIGHT</FightButton>
            </BattleResult>
          </Battlefield>

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
            <CardWrapper key={x.id}>
              <CharacterCard image={x.picture} onClick={() => this.choose(x)}>
                <StatsWrapper className="stat">
                  {this.stats(x).map(s => (s.name != "accuracy" &&
                    <div key={x.id + '-stat-' + s.name}>
                      <StatsName>
                        {s.name}
                      </StatsName>
                      <StatsBarWrap>
                        <StatsBar value={s.value} />
                      </StatsBarWrap>
                    </div>
                  ))}
                  {x.superPowers.map(sp => (
                    <div key={x.id + '-pow-'}>
                      <StatsName name={true}>
                        {sp.name}
                      </StatsName>
                      <StatsName>
                        {sp.description}
                      </StatsName>
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
  font-family: 'Roboto', sans-serif;
`
const BattleContainer = styled(Flex)`
  min-width: 890px;
  width: 80%;
  min-height: 380px;
  height: 30%;
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
  border: 2px solid grey;
  color: grey;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  background-image: url(${props => props.image});
  background-size: 250px 250px;
  filter: drop-shadow(2px 0px 20px white);
  border-radius: 5%;
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
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-100%, -50%);
  background: rgba(200,200,200,0.6);
  border-radius: 10%;
  ${props => props.hidden && `
    visibility: hidden;
  `}
`
const BattleResult = styled(Flex)`
  color: white;
  font-size: 36px;
  width: 100%;
  height: 100%;
  flex-direction:column;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(0,0,0,0.6);
  border-radius: 5%;
  justify-content: space-around;
  align-items: center;
  ${props => props.hidden && `
    visibility: hidden;
  `}
`
const ResultStatsWrapper = styled(Flex)`
  justify-content: space-between;
  flex-direction: row;
  width: 90%;
`
const Winner = styled(Flex)`
  justify-content: center;
`
const ResultStats = styled(Flex)`
  justify-content: center;
  background: rgba(200,200,200,0.5);
  font-size: 18px;
  width: 130px;
  padding: 5px;
  border-radius: 10%;
`
const VSText = styled(Flex)`
  justify-content: center;
`
const FightButton = styled.button`
  color: white;
  font-size: 40px;
  background-color: black;
  border-radius: 5%;
  font-family: 'Roboto', sans-serif;
  ${props => props.small && `
    font-size: 26px;
    border-radius: 5%;
  `}
`
const Battlefield = styled(Flex)`
  min-width: 350px;
  height: 250px;
  border: 2px grey solid;
  flex-direction: column;
  margin: 10px;
  align-items: center;
  justify-content: center;
  position: relative;
  border-radius: 5%;
`
const ImageBattle = styled(Flex)`
  min-width: 350px;
  height: 250px;
  flex-direction: column;
  background-image: url("pictures/dc-vs-marvel.jpg");
  background-size: cover;
  opacity: 0.5;
  border-radius: 5%;
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
  max-width: 250px;
  color: #e9e5ff;
  padding-bottom: 3px;
  text-transform: uppercase;
  font-size: 13px;
  ${props => props.name && `
    font-weight: bold;
    margin-top: 10px;
  `}
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
  border-radius: 5%;

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
