'use client';

import React, { useState } from 'react';
import { Container } from 'react-bootstrap';

import styles from '@/styles/Components/Container/AaMatra.module.scss';

const CarMap = [
  { name: 'क', audioUrl: '/assets/mp3/vyanjan/क.mp3' },
  { name: 'ा', audioUrl: '/assets/mp3/matraein/ा.mp3' },
  { name: 'र', audioUrl: '/assets/mp3/vyanjan/र.mp3' }
];
const Car1Map = [
  { name: 'कार', audioUrl: '/assets/mp3/words/कार.mp3' }
];
const MalaMap = [
  { name: 'म', audioUrl: '/assets/mp3/vyanjan/म.mp3' },
  { name: 'ा', audioUrl: '/assets/mp3/matraein/ा.mp3' },
  { name: 'ल', audioUrl: '/assets/mp3/vyanjan/ल.mp3' },
  { name: 'ा', audioUrl: '/assets/mp3/matraein/ा.mp3' }
];
const Mala2Map = [
  { name: 'माला', audioUrl: '/assets/mp3/words/माला.mp3' }
];
const BajaMap = [
  { name: 'ब', audioUrl: '/assets/mp3/vyanjan/ब.mp3' },
  { name: 'ा', audioUrl: '/assets/mp3/matraein/ा.mp3' },
  { name: 'ज', audioUrl: '/assets/mp3/vyanjan/ज.mp3' },
  { name: 'ा', audioUrl: '/assets/mp3/matraein/ा.mp3' }
];
const Baja1Map = [
  { name: 'बाजा', audioUrl: '/assets/mp3/words/बाजा.mp3' }
];
const PalakMap = [
  { name: 'प', audioUrl: '/assets/mp3/vyanjan/प.mp3' },
  { name: 'ा', audioUrl: '/assets/mp3/matraein/ा.mp3' },
  { name: 'ल', audioUrl: '/assets/mp3/vyanjan/ल.mp3' },
  { name: 'क', audioUrl: '/assets/mp3/vyanjan/क.mp3' }
];
const Palak1Map = [
  { name: 'पालक', audioUrl: '/assets/mp3/words/पालक.mp3' }
];
const AasMap = [
  { name: 'आ', audioUrl: '/assets/mp3/swara/आ.mp3' },
  { name: 'स', audioUrl: '/assets/mp3/vyanjan/स.mp3' }
];
const Aas1Map = [
  { name: 'आस', audioUrl: '/assets/mp3/words/आस.mp3' }
];
const PasMap = [
  { name: 'प', audioUrl: '/assets/mp3/vyanjan/प.mp3' },
  { name: 'ा', audioUrl: '/assets/mp3/matraein/ा.mp3' },
  { name: 'स', audioUrl: '/assets/mp3/vyanjan/स.mp3' }
];
const Pas1Map = [
  { name: 'पास', audioUrl: '/assets/mp3/words/पास.mp3' }
];
const NamMap = [
  { name: 'न', audioUrl: '/assets/mp3/vyanjan/न.mp3' },
  { name: 'ा', audioUrl: '/assets/mp3/matraein/ा.mp3' },
  { name: 'म', audioUrl: '/assets/mp3/vyanjan/म.mp3' }
];
const Nam1Map = [
  { name: 'नाम', audioUrl: '/assets/mp3/words/नाम.mp3' }
];
const RedMap = [
  { name: 'ल', audioUrl: '/assets/mp3/vyanjan/ल.mp3' },
  { name: 'ा', audioUrl: '/assets/mp3/matraein/ा.mp3' },
  { name: 'ल', audioUrl: '/assets/mp3/vyanjan/ल.mp3' }
];
const Red1Map = [
  { name: 'लाल', audioUrl: '/assets/mp3/words/लाल.mp3' }
];
const GreenMap = [
  { name: 'ह', audioUrl: '/assets/mp3/vyanjan/ह.mp3' },
  { name: 'र', audioUrl: '/assets/mp3/vyanjan/र.mp3' },
  { name: 'ा', audioUrl: '/assets/mp3/matraein/ा.mp3' }
];
const Green1Map = [
  { name: 'हरा', audioUrl: '/assets/mp3/words/हरा.mp3' }
];
const BoatMap = [
  { name: 'न', audioUrl: '/assets/mp3/vyanjan/ह.mp3' },
  { name: 'ा', audioUrl: '/assets/mp3/matraein/ा.mp3' },
  { name: 'व', audioUrl: '/assets/mp3/vyanjan/व.mp3' }
];
const Boat1Map = [
  { name: 'नाव', audioUrl: '/assets/mp3/words/नाव.mp3' }
];
const EveningMap = [
  { name: 'श', audioUrl: '/assets/mp3/vyanjan/श.mp3' },
  { name: 'ा', audioUrl: '/assets/mp3/matraein/ा.mp3' },
  { name: 'म', audioUrl: '/assets/mp3/vyanjan/म.mp3' }
];
const Evening1Map = [
  { name: 'शाम', audioUrl: '/assets/mp3/words/शाम.mp3' }
];
const ComeMap = [
  { name: 'आ', audioUrl: '/assets/mp3/vyanjan/आ.mp3' },
  { name: 'न', audioUrl: '/assets/mp3/vyanjan/न.mp3' },
  { name: 'ा', audioUrl: '/assets/mp3/matraein/ा.mp3' }
];
const Come1Map = [
  { name: 'आना', audioUrl: '/assets/mp3/words/आना.mp3' }
];
const GoMap = [
  { name: 'ज', audioUrl: '/assets/mp3/vyanjan/आ.mp3' },
  { name: 'ा', audioUrl: '/assets/mp3/matraein/ा.mp3' },
  { name: 'न', audioUrl: '/assets/mp3/vyanjan/न.mp3' },
  { name: 'ा', audioUrl: '/assets/mp3/matraein/ा.mp3' }
];
const Go1Map = [
  { name: 'जाना', audioUrl: '/assets/mp3/words/जाना.mp3' }
];
const EatMap = [
  { name: 'ख', audioUrl: '/assets/mp3/vyanjan/ख.mp3' },
  { name: 'ा', audioUrl: '/assets/mp3/matraein/ा.mp3' },
  { name: 'न', audioUrl: '/assets/mp3/vyanjan/न.mp3' },
  { name: 'ा', audioUrl: '/assets/mp3/matraein/ा.mp3' }
];
const Eat1Map = [
  { name: 'खाना', audioUrl: '/assets/mp3/words/खाना.mp3' }
];
const PomegranateMap = [
  { name: 'अ', audioUrl: '/assets/mp3/swara/अ.mp3' },
  { name: 'न', audioUrl: '/assets/mp3/vyanjan/न.mp3' },
  { name: 'ा', audioUrl: '/assets/mp3/matraein/ा.mp3' },
  { name: 'र', audioUrl: '/assets/mp3/vyanjan/र.mp3' }
];
const Pomegranate1Map = [
  { name: 'अनार', audioUrl: '/assets/mp3/words/अनार.mp3' }
];
const CloudMap = [
  { name: 'ब', audioUrl: '/assets/mp3/vyanjan/ब.mp3' },
  { name: 'ा', audioUrl: '/assets/mp3/matraein/ा.mp3' },
  { name: 'द', audioUrl: '/assets/mp3/vyanjan/द.mp3' },
  { name: 'ल', audioUrl: '/assets/mp3/vyanjan/ल.mp3' }
];
const Cloud1Map = [
  { name: 'बादल', audioUrl: '/assets/mp3/words/बादल.mp3' }
];
const HabitMap = [
  { name: 'आ', audioUrl: '/assets/mp3/swara/आ.mp3' },
  { name: 'द', audioUrl: '/assets/mp3/vyanjan/द.mp3' },
  { name: 'त', audioUrl: '/assets/mp3/vyanjan/त.mp3' }
];
const Habit1Map = [
  { name: 'आदत', audioUrl: '/assets/mp3/words/आदत.mp3' }
];
const RestMap = [
  { name: 'आ', audioUrl: '/assets/mp3/swara/आ.mp3' },
  { name: 'र', audioUrl: '/assets/mp3/vyanjan/द.mp3' },
  { name: 'ा', audioUrl: '/assets/mp3/matraein/ा.mp3' },
  { name: 'म', audioUrl: '/assets/mp3/vyanjan/म.mp3' }
];
const Rest1Map = [
  { name: 'आराम', audioUrl: '/assets/mp3/words/आराम.mp3' }
];
const CarrotMap = [
  { name: 'ग', audioUrl: '/assets/mp3/vyanjan/ग.mp3' },
  { name: 'ा', audioUrl: '/assets/mp3/matraein/ा.mp3' },
  { name: 'ज', audioUrl: '/assets/mp3/vyanjan/ज.mp3' },
  { name: 'र', audioUrl: '/assets/mp3/vyanjan/र.mp3' }
];
const Carrot1Map = [
  { name: 'गाजर', audioUrl: '/assets/mp3/words/गाजर.mp3' }
];
const HouseMap = [
  { name: 'म', audioUrl: '/assets/mp3/vyanjan/म.mp3' },
  { name: 'क', audioUrl: '/assets/mp3/vyanjan/क.mp3' },
  { name: 'ा', audioUrl: '/assets/mp3/matraein/ा.mp3' },
  { name: 'न', audioUrl: '/assets/mp3/vyanjan/न.mp3' }
];
const House1Map = [
  { name: 'मकान', audioUrl: '/assets/mp3/words/मकान.mp3' }
];
const HumanMap = [
  { name: 'म', audioUrl: '/assets/mp3/vyanjan/म.mp3' },
  { name: 'ा', audioUrl: '/assets/mp3/matraein/ा.mp3' },
  { name: 'न', audioUrl: '/assets/mp3/vyanjan/न.mp3' },
  { name: 'व', audioUrl: '/assets/mp3/vyanjan/व.mp3' },
];
const Human1Map = [
  { name: 'मानव', audioUrl: '/assets/mp3/words/मानव.mp3' }
];
const TomatoMap = [
  { name: 'ट', audioUrl: '/assets/mp3/vyanjan/ट.mp3' },
  { name: 'म', audioUrl: '/assets/mp3/vyanjan/म.mp3' },
  { name: 'ा', audioUrl: '/assets/mp3/matraein/ा.mp3' },
  { name: 'ट', audioUrl: '/assets/mp3/vyanjan/ट.mp3' },
  { name: 'र', audioUrl: '/assets/mp3/vyanjan/र.mp3' },
];
const Tomato1Map = [
  { name: 'टमाटर', audioUrl: '/assets/mp3/words/टमाटर.mp3' }
];


function Index() {
  const [selectedValue, setSeletedValue] = useState<string>('');
  const BaloonImg = '/assets/images/yellow_baloon.png';

  const handlePlayAudio = (audioUrl: string, name: string) => {
    setSeletedValue(name);
    const audio = new Audio(audioUrl);
    audio.play();
  };

  return (
    <>
      <div className={styles.LearningPage}>
        <div className={styles.LearningWrap}>
          <Container>
            <div className={styles.baloonTitle}>
              <h2>आ Matra - Pop all the balloons! 🤪🎈🎊</h2>
            </div>
            <div className={styles.baloonGroup1}>
              <div className={styles.aaMatraWrap}>
                {CarMap.map((item: any, index: number) => (
                  <div key={index} className={styles.SingleBaloon}>
                    <div className={styles.BaloonImg}>
                      <img src={BaloonImg} alt="Balloon" />
                    </div>
                    <div className={styles.SvarWrap}>
                      <h5 onClick={() => handlePlayAudio(item.audioUrl, item.name)} style={{ cursor: 'pointer' }}>
                        {item.name}
                      </h5>
                    </div>
                  </div>
                ))}
              </div>
              <div className={styles.aaMatraRightWrap}>
                {Car1Map.map((item: any, index: number) => (
                  <div className={styles.NameBg}>
                    <h6 onClick={() => handlePlayAudio(item.audioUrl, item.name)} style={{ cursor: 'pointer' }}>
                      {item.name}
                    </h6>
                    <div className={styles.englishName}>Car</div>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.baloonGroup1}>
              <div className={styles.aaMatraWrap}>
                {MalaMap.map((item: any, index: number) => (
                  <div key={index} className={styles.SingleBaloon}>
                    <div className={styles.BaloonImg}>
                      <img src={BaloonImg} alt="Balloon" />
                    </div>
                    <div className={styles.SvarWrap}>
                      <h5 onClick={() => handlePlayAudio(item.audioUrl, item.name)} style={{ cursor: 'pointer' }}>
                        {item.name}
                      </h5>
                    </div>
                  </div>
                ))}
              </div>
              <div className={styles.aaMatraRightWrap}>
                {Mala2Map.map((item: any, index: number) => (
                  <div className={styles.NameBg}>
                    <h6 onClick={() => handlePlayAudio(item.audioUrl, item.name)} style={{ cursor: 'pointer' }}>
                      {item.name}
                    </h6>
                    <div className={styles.englishName}>Garland</div>
                  </div>
                ))}
              </div>
            </div>
            
          </Container>
        </div>
      </div>
    </>
  );
}

export default Index;
