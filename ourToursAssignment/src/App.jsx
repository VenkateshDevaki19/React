import React from 'react'
import Title from './Components/Title'
import Article from './Components/Article'


const App = () => {

  const tours = [
    {
      image:
        "https://s3-alpha-sig.figma.com/img/2db3/5bb3/5b5c34cd6b1188091fae42bf52109191?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aszaIru2PygQbw9ZkYHHzFmVa00BXfJyTMSk-fi2uRWxmepobqglkWwNTCb~UVrE9lcjTODuRbQI6CzES7JmoxZBYSK--6j474BxDHylRbrVFF4cEJmQglzn1LaX-Xdnr5mTlLHgPds-O~eI8Avz~VYT0CrU~c7gnbT4iIQwcPc02qiI~YEz2v1WNeJVdwG01OTGKgg-B1AeCOldRAw-ZK6cgIbEH69h~JITLLIHbs1Cree4bfjPkiOnkKj8liVijO~25TVA-YrljCwlVudfvTcDLf7HBkz3qtK8BbzGgJO9BwcXsmKu0CIArhu06RvXcFCRYynQo9T8o6sk~R9DfA__",
      title: "Best of Paris in 7 Days Tour",
      id: 1,
      description:
        "Paris is synonymous with the finest things that culture can offer — in art, fashion, food, literature, and ideas. On this tour, your Paris-savvy Rick Steves guide will immerse you in the very best of ...",
    },
    {
      id: 2,
      image:
        "https://s3-alpha-sig.figma.com/img/36bb/fa3c/1f6a1e4f40a08a99e308512decf057a5?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=p4sX7uto~9idnmolFWF1pdSaVxvYC~y9oBnYAK9mOzxLWI389KHj~9O0-GmyXo5mf7Gehqay9b1Ckq7Y84bto8WZ447hE5rcSsS-ug244cuAda-fXJQFXhI2ji60uyMAyEdRcO-5DTADKNBhDrxVcOBNOEG1YMNOkv2I-hh1rGfndMLNsZHE2gPscHWe-hJjLD9xoLRJmPspACBepwDJzRKPgmiYA4UsZhYR9KCkn6M5d5UfQo8YZz2UZiImhFRlMPR5rO5Q0mGUpwYKlATs~ndsNvH4zKucKaHPeY5VNvEUQyOn0Z~g~SaBQj3VqPfx08KLqZUoLQz9qQzYozlz2w__",
      title: "Best of Ireland in 14 Days Tour",
      description:
        "Rick Steves' Best of Ireland tour kicks off with the best of Dublin, followed by Ireland's must-see historical sites, charming towns, music-filled pubs, and seaside getaways — including Kinsale, the D...",
    },
    {
      id: 3,
      image:
        "https://s3-alpha-sig.figma.com/img/8469/b1f2/07fab27b659ae094bc3a807bee89860c?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RsjBTeoVn8HtBakzym3ZUuPSHijFxlunq2MYZEAs7iStWxCmCk9sCLCeZ0N2zeTsA2kVzYU0FrQvf4Hd2-~cPaiBV4sooUxXjDbOJwHoCzrHcMfK72yQ49EtibBWvlLqAZmfHeN8Z1WcxAeIZ8fFoGZWC-Mx7knIVp1YL4Oraqc6XT3HwUd-cRhBlbs4GHECs3tI7LVV6WuP90vIkKm7HgQdgLZMCWkwL2w5M0QosqZ1eAJ4wdUpBhnh6v8Idm3r6eQsv3d~~mhrHnO22~Es0wrBvUzKse3qH65Xl4ok87E81I5SJNkqRI7~NgMHxaaX3OxTwHejYIcloCNemRLG4g__",
      title: "Best of Salzburg & Vienna in 8 Days Tour",
      description:
        "Let's go where classical music, towering castles, and the-hills-are-alive scenery welcome you to the gemütlichkeit of Bavaria and opulence of Austria's Golden Age. Your Rick Steves guide will bring th...",
    },
    {
      id: 4,
      image:
        "https://s3-alpha-sig.figma.com/img/1093/b5cd/a518aeafd93a2a15c3a89dbf8d016a45?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=itAygBhrSuaCkqLHN~r8c4FIq5ZN9WgkB9vRBzjhswQEc5RirUF~HiUCvOxKF5zDttch~qEVeeyUW35iBJN~iU5BJrd9q8S4yfblQVedp4Agz8WkHCDb0rkfkZkwwbeESA894gibHmALRyGfXKChTAulllyokZLmKARw5AeH9qxl0A4shD8yTr1vtZ3vcBDo8xBkjMg2Pw8c4vZWik7Ro81lRIhnjMrPM-eIockrhbAyokLj47NCxN0~4~nDMEAeZJIRwpgsWCQ9vOwHLwzhQofSS3qoFksehd-qqlhRFyAmRIXdPUwgAXwVujIVFrqEiS95LryKhdL2ppvI5iKG2g__",
      title: "Best of Rome in 7 Days Tour",
      description:
        "Our Rome tour serves up Europe's most intoxicating brew of dazzling art, earth-shaking history, and city life with style. On this Rome vacation, your tour guide will resurrect the grandeur of ancient ...",
    },
    {
      id: 5,
      image:
        "https://s3-alpha-sig.figma.com/img/52ba/c3a2/e6829595a8f4b202a6e238b41f27577b?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LO4~MM2ww8ykPgYXZ475Bjz0jvWrhsiP-hcJNxOts0-hBg0752OKpduAV0NNLQaoDkrX48asT6ijYlarKtpoATZPSrMRXQIjMq8deo8UgsYN33LH4IqfmdvY5IxUBexKM-1pv-yiGmLaotMMrs9oDV-Sj8PqCsLcWUiFNaC4HiRPyf~k07fdIeeLCoiPCpzemgtD8GJs1Q8rZk35Jty5t8wqrnpkP8UDos7tKb-dVb8WUu68bSObkPjcEA7VmmMCpposM6-CS5wIZQYc0tRh6D6kkZoYoGmBUPhrdP4cDGdQbpt8SSLfNEtDZr2QzXSDVhySYRWcWrHInW368sC4FA__",
      title: "Best of Poland in 10 Days Tour",
      description:
        "Starting in the colorful port city of Gdańsk, you'll escape the crowds and embrace the understated elegance of ready-for-prime-time Poland for 10 days. With an expert Rick Steves guide at your side, y...",
    },
  ];
  return (
    <div className="tours-container">
      <Title />
      {tours.map((tour) => (
        <Article
          key={tour.id}
          image={tour.image}
          title={tour.title}
          description={tour.description}
        />
      ))}
    </div>
  );
};

  // return (
  //   <div>
  //     <Title />
  //     <Article />
  //   </div>
  // )

export default App
