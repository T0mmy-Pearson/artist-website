import React from 'react'
import BackArrow from './BackArrow';

export default function Sound({ setSelected }: { setSelected?: (val: string | null) => void }) {
  return (
    <div>
      {setSelected && <BackArrow onClick={() => setSelected(null)} />}
      <ul>
        <li>The Sun/The Throat, EP, <a href="https://sgarabtapes.bandcamp.com/album/the-sun-the-throat"> Sgarab Tapes</a>, 2024</li>
        <li>Erotomania I, <a href="https://soundcloud.com/user-212901004">Radiophrenia Festival</a>, 2020</li>
        <li><a href="https://soundcloud.com/radiobuenavida/algia-radio-buena-vida-300621">algiaxradiobuenavida</a> radio show for poetry and sound, 2020-2021</li>
      </ul>
    </div>
  )
}
