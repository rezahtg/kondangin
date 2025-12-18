import React from 'react';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import { BsFillHeartFill } from 'react-icons/bs';
function TimelineItem(props) {
  const { image, title, date, description, onClickImage } = props;
  return (
    <VerticalTimelineElement
      className="font-playfair"
      iconStyle={{ background: 'rgb(230, 175, 83)', color: '#fff' }}
      icon={<BsFillHeartFill />}
    >
      <img src={image} alt="First Date" className="photo-timeline cursor-pointer mb-4" onClick={() => onClickImage()}/>
      <h3 className="vertical-timeline-element-title fw-bold ">{title}</h3>
      <h5 className="vertical-timeline-element-subtitle ">{date}</h5>
      <p>{description}</p>
    </VerticalTimelineElement>
  );
}

export default TimelineItem;
