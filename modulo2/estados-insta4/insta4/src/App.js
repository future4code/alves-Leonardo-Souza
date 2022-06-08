import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'leonardojcsl'}
          fotoUsuario={'https://scontent.fsdu9-1.fna.fbcdn.net/v/t1.6435-9/80586930_3816872898326608_2287726923058511872_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGGDHUv1i0MwEVXvlw4HHYFCUrKpXO45UoJSsqlc7jlSv5Ka112QDaG6q-4C_KOLaFdLD3wc5c6GI8YEZltw7KB&_nc_ohc=cYZXPwoA5tQAX8zUgl7&_nc_ht=scontent.fsdu9-1.fna&oh=00_AT-q-jj1_q4n7r-jKEMli9xq-QPZrf2_vGr_faWaHY5Wsw&oe=62C6338C'}
          fotoPost={'https://scontent.fsdu9-1.fna.fbcdn.net/v/t1.18169-9/11245511_874357685955068_8432827419129774076_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeGi6ZAxtdgp5cQZHMgWfIjYY_aOqlLW83Nj9o6qUtbzc9czoeZWljunwdWM_BLNVjRLfzfbYRdgUeJrFlR3Zpx2&_nc_ohc=qszTY0D67egAX9GBTGo&_nc_ht=scontent.fsdu9-1.fna&oh=00_AT_oWvJ1UUc8XzhXaLNeJdOZJ_tNA3UQiteN4Lxi2Cac1g&oe=62C68FD9'}
        />
        <Post
          nomeUsuario={'raggamuffin42'}
          fotoUsuario={'https://scontent.fsdu9-1.fna.fbcdn.net/v/t1.6435-9/156620370_4010879795622169_4271485966396740500_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHIPgkU2Z3wVppOY0VNQpIoMRkgQ57leg0xGSBDnuV6DWPdMV4YvCa20OBUaVD1i0ZLuc8dfakPQPWFk2Y_AMFy&_nc_ohc=TrDZ9FnsGsMAX-UagU7&_nc_ht=scontent.fsdu9-1.fna&oh=00_AT9I3LiyuyqRxCGrunuMg2Xe_U3W7GESMe2Hj0qL8WYpPA&oe=62C7D4B5'}
          fotoPost={'https://scontent.fsdu9-1.fna.fbcdn.net/v/t1.18169-9/15107242_1534336649913589_7297193039857959285_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeEFDgovmcrjescUuM22AZnelyDwR5Zf3eWXIPBHll_d5RbP1SlJVT6zTdUnCDV4ZTwpTyo4sGYJUdzowqTEU5Jh&_nc_ohc=nCYTsbvlwzUAX_GIgHa&_nc_ht=scontent.fsdu9-1.fna&oh=00_AT9SXbGuJgbB1TLZYsNy64nyA_-cUnD32ZTo9-2FaKom8g&oe=62C5D57A'}
        />
        <Post
          nomeUsuario={'jessicabsousap'}
          fotoUsuario={'https://scontent.fsdu9-1.fna.fbcdn.net/v/t1.6435-9/45411333_2001679176556241_8755941065174810624_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEiRr5wcyr1lqvHG7sQpIA8YIScOc0hwFZghJw5zSHAVrw1_QX4Bm2z9w-KYcQlsE0a4yL_pFXm1SbifLX3TsvW&_nc_ohc=Y-qBxZEmjfkAX9Ls-4W&_nc_ht=scontent.fsdu9-1.fna&oh=00_AT_-DVP2gYH36FZ09KXTab4HJcrFiu97Mj0pgKH5bgI4Yw&oe=62C5DD78'}
          fotoPost={'https://scontent.fsdu9-1.fna.fbcdn.net/v/t1.18169-9/1098064_1040801762630002_7212346732467826475_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeGRY-j-gws62wJ2_PkK_bZT9g5otRFE1JL2Dmi1EUTUkg_E9ClHOXQEiCmz77Dw44YKZMLE3FMR3SGqzcX_AETH&_nc_ohc=Oye5K7sZnKUAX8ugO4D&_nc_ht=scontent.fsdu9-1.fna&oh=00_AT9LaNF2hl5q37Hvzj3B4L0PeJIzXvXHtUg0VlHZlzjvKA&oe=62C6419C'}
        />
      </MainContainer>
    );
  }
}

export default App;
