import React, { useState, useCallback } from 'react';
import { VerticalTimeline } from 'react-vertical-timeline-component';
import { Container } from 'react-bootstrap';
import { first_date, engagement, wedding, meet_again, met } from '../assets';
import Lightbox from 'react-image-lightbox';
import TimelineItem from '../components/TimelineItem';

function Timeline() {
  const timelineData = [
    {
      title: 'How We Met',
      image: met,
      date: 'Bandung, 2006',
      description:
        'Our first met was in elementary school. At that time, Kevin was a transfer student in the 3th grade of elementary school and he sat at the same table with Shalma. From there, we often joked and liked each other like elementary school children.',
    },
    {
      title: 'How We Met (Again)',
      image: meet_again,
      date: 'Bandung, 2016',
      description:
        'After graduating from elementary school on 2009, we lost contact for almost 7 years and we started to meet again on the elementary school reunion. Long story short, it turns out that Kevin still have a crush on Shalma. From that day, Kevin ask her to go on a date.',
    },
    {
      title: 'First Date',
      image: first_date,
      date: 'Bandung, 2016',
      description:
        "Our first date was going to the mall, we spend our time chit-chat like 'a lost buddy' that had never seen each other in a long time. We flashback on our Elementary School life, and we ask each other why we never see each other even our High School is in the same neighborhood. Maybe it's some God plans that we met again after 7 years. lol",
    },
    {
      title: 'Engagement',
      image: engagement,
      date: 'Bandung, 2021',
      description:
        "It's been almost 5 years since we've been in a relationship and we started planning for a more serious relationship. Finally, we decided to get engaged on May 29, 2021.",
    },
    {
      title: 'Wedding Day',
      image: wedding,
      date: 'Bandung, 2022',
      description:
        'We never thought that it started from elementary school friends and ended up on the aisle to become friends for life on February 20, 2022.',
    },
  ];

  const [currentImage, setCurrentImage] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const openLightbox = (index) => {
    setCurrentImage(index);
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setCurrentImage(0);
    setIsOpen(false);
  };

  console.log(timelineData[currentImage].image);

  return (
    <Container className="my-5">
      <h2 className="font-playfair text-center">Our Story</h2>
      <VerticalTimeline>
        {timelineData.map((item, index) => (
          <TimelineItem
            image={item.image}
            title={item.title}
            date={item.date}
            description={item.description}
            onClickImage={() => openLightbox(index)}
            key={index}
          />
        ))}
      </VerticalTimeline>
      {isOpen && (
        <Lightbox
          mainSrc={timelineData[currentImage].image}
          nextSrc={timelineData[(currentImage + 1) % timelineData.length].image}
          prevSrc={
            timelineData[
              (currentImage + timelineData.length - 1) % timelineData.length
            ].image
          }
          onCloseRequest={closeLightbox}
          onMovePrevRequest={() =>
            setCurrentImage(
              (currentImage + timelineData.length - 1) % timelineData.length
            )
          }
          onMoveNextRequest={() =>
            setCurrentImage((currentImage + 1) % timelineData.length)
          }
        />
      )}
    </Container>
  );
}

export default Timeline;
