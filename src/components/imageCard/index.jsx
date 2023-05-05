import Image from '../image'
import Heading from '../heading';
import Text from '../text';
import './index.css'
import Button from '../button/button';

const ImageCard = ({image, heading, text, link}) => {
  return (
    <div className="imageCard">
      <Image src={image} alt={heading} className="imageCard__image"/>
      <div className='imageCard__content'>
        <Heading level={3}>{heading}</Heading>
        <Text className="imageCard__text"> {text} </Text>
        <Button colorType="inverted" style={{ border: 'none' }} small>
          <a href={link} style={{ color: 'inherit' }}>
            Read More
          </a>
        </Button>
      </div>
    </div>
  )
};

export default ImageCard;
