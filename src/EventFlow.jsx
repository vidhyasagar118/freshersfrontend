
import React from 'react'
import "./EventFlow.css"
const EventrFlow = () => {
    
const eventFlow = [
  {
    time: "04:00 PM – 05:00 PM",
    title: "Grand Welcome & Fresher Introduction",
    desc: [
      "SPARK NIGHT begins with a graceful inauguration, symbolizing the start of a vibrant new journey.",
      "The ceremony is followed by a traditional Vandana and inspiring words from our respected faculty and special guests.",
      "Our freshers then take the spotlight as they confidently introduce themselves, setting the tone for an evening full of energy and excitement."
    ]
  },
  {
    time: "05:00 PM – 05:30 PM",
    title: "Interactive Surprise Segment",
    desc: [
      "An engaging and fun-filled surprise activity awaits, designed to break the ice and bring smiles all around.",
      "Expect laughter, spontaneous moments, and exciting interactions that make the evening even more memorable."
    ]
  },
  {
    time: "05:30 PM – 06:00 PM",
    title: "Soulful Singing Performances",
    desc: [
      "Talented freshers captivate the audience with melodious singing performances.",
      "From soothing vocals to energetic tracks, each performance adds warmth and magic to the atmosphere."
    ]
  },
  {
    time: "06:00 PM – 07:00 PM",
    title: "Power-Packed Dance Performances",
    desc: [
      "Get ready for an electrifying dance showcase where rhythm meets passion.",
      "A blend of classical elegance, Bollywood beats, and modern dance forms brings the stage alive with energy."
    ]
  },
  {
    time: "07:00 PM – 08:00 PM",
    title: "Grand Dance Finale",
    desc: [
      "The excitement reaches its peak with breathtaking group and solo dance performances.",
      "This segment highlights creativity, coordination, and the vibrant spirit of our freshers."
    ]
  },
  {
    time: "08:00 PM – 08:30 PM",
    title: "Awards, Photo Session & Closing Ceremony",
    desc: [
      "The evening concludes with the much-awaited award ceremony, including Mr. & Ms. Fresher and the Star of the Night Award.",
      "A grand photo session follows, capturing smiles and memories, before we bid farewell to a truly unforgettable night."
    ]
  }
];

  return (
<div className="event-container">
      <h1 className="eventheading">✨ SPARK NIGHT 2K26-EVENT FLOW ✨</h1>
      <p className="eventsubheading">Where New Beginnings Sparkle</p>

      {eventFlow.map((item, index) => (
        <div className="event-card" key={index}>
          <span className="event-time">{item.time}</span>
          <h2>{item.title}</h2>
          {item.desc.map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </div>
      ))}
    </div>
  )
}

export default EventrFlow
