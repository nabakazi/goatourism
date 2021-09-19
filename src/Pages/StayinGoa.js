import React from 'react';
import Container from '@material-ui/core/Container';
import OutlinedButtons from '../Components/textbutton';
import OutlinedButtons1 from '../Components/textbutton1';
import OutlinedButtons2 from '../Components/textbuttons2';
import stayingoa from '../Assets/stayingoa.jpg';

export default function Stay() {
  return (
    <React.Fragment>
      <Container fixed>
      <p>
          Stay in Goa 
      </p>
      <img src = {stayingoa} className= "Stay in Goa" alt= "Stay in Goa"/>
      <p>
      Accommodation in Goa is plentiful with a variety of hotels, resorts and guest houses to suit every budget and every taste. There are simple and bare rooms available for the thriftiest of back-packers and five-star deluxe luxury suites for those that want to indulge their fancies. 
Almost all round the year, travellers are usually assured of finding a room – if not in a hotel, then at least in a private house. However, come the peak season of December and January, you are likely to experience problems, unless you book your rooms well in advance.
Just around Christmas until the dawn of the new year, Goa is in festive mood and plays host to hundreds and thousands of visitors from all over India and around the world. So accommodation is at a premium everywhere.
      </p>
     <OutlinedButtons/>
     <OutlinedButtons1/>
     <OutlinedButtons2/>

      </Container>
    </React.Fragment>
  );
}