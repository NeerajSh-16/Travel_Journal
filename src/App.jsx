import Header from './assets/components/header'
import Card from './assets/components/entry'
export default function App(){
  return(
    <>
      <Header/>
      <Card
          img="./src/assets/MountFuji.jpg"
          country="JAPAN"
          location="https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu"
          name="Mount Fuji"
          description="Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists."
      />
      <Card
          img="./src/assets/TajMahal.jpg"
          country="INDIA"
          location="https://www.google.com/maps/place/taj+mahal/data=!4m2!3m1!1s0x39747121d702ff6d:0xdd2ae4803f767dde?sa=X&ved=1t:155783&ictx=111"
          name="Taj Mahal"
          description="The Taj Mahal is a breathtaking white marble mausoleum in India, built as a symbol of eternal love by Emperor Shah Jahan."
      />
      <Card
          img="./src/assets/colosseum.jpeg"
          country="ROME"
          location="https://www.google.com/maps/place/colosseum/data=!4m2!3m1!1s0x132f61b6532013ad:0x28f1c82e908503c4?sa=X&ved=1t:155783&ictx=111"
          name="Colosseum"
          description="The Colosseum in Rome is an ancient amphitheater known for its impressive size and engineering, once hosting gladiator battles and public spectacles."
      />
      <Card
          img="./src/assets/ArtmeisTemple.jpg"
          country="TURKEY"
          location="https://www.google.com/maps/place/temple+of+artemis+at+ephesus/data=!4m2!3m1!1s0x14b94d56fca57281:0xfaa6e359607f4524?sa=X&ved=1t:155783&ictx=111"
          name="Mount Fuji"
          description="The Temple of Artemis at Ephesus was an extraordinary architectural feat, known for its stunning marble columns and intricate design dedicated to the goddess Artemis."
      />
    </>
  )
}