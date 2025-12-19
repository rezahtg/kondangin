import { VerticalTimeline } from 'react-vertical-timeline-component';
import { Container } from 'react-bootstrap';
import TimelineItem from '../components/TimelineItem';

function Timeline() {
  const timelineData = [
    {
      title: 'Awal Bertemu',
      date: '2024',
      description:
        'Tahun 2024 bulan 6 kami saling mengenal di Tiktok, berawal dari dm dan berubah menjadi obrolan Santai dan lama kelamaan berubah menjadi pertemanan yang akrab',
    },
    {
      title: 'Menjalin hubungan',
      date: '2024',
      description:
        'Tanpa banyak drama, kami membangun komunikasi perlahan tepat di tanggal 05-07-2024 kami Jadian (LDR) Malaysia - Palembang Di setiap tantangan yang ada membuat kami semakin yakin bahwa kami di ciptakan untuk saling melengkapi😅 tanggal 07-03-2025 merupakan tanggal di mana kami bertemu tatap muka pertama kali',
    },
    {
      title: 'Lamaran',
      date: '2024',
      description:
        "Dengan keberanian dan doa kami meminta restu kepada orang tua, menguatkan kami untuk bersama dalam suka maupun duka",
    },
    {
      title: 'Pernikahan',
      date: '2025',
      description:
        "Dengan penuh rasa syukur dan bahagia, kami siap mengikat janji suci, mempersembahkan kisah cinta ini untuk menjadi perjalanan seumur hidup",
    },
  ];

  return (
    <Container className="my-5">
      <h2 className="font-playfair text-center">Our Story</h2>
      <VerticalTimeline>
        {timelineData.map((item, index) => (
          <TimelineItem
            title={item.title}
            date={item.date}
            description={item.description}
            key={index}
          />
        ))}
      </VerticalTimeline>
    </Container>
  );
}

export default Timeline;
