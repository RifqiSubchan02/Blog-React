import { Container } from "react-bootstrap";
import { BgRegister } from '../../assets';
import './detailblog.scss';

const DetailBlog = () => {
  return (
    <Container>
      <img src={BgRegister} alt="..." className="img-fluid img-detail-blog mb-4"></img>
      <h1>Title</h1>
      <h5>Author - Category</h5>
      <h6 className="mb-4">Date</h6>
      <p className="text-break indent">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam molestiae repellendus, reprehenderit rerum a commodi distinctio id quo perspiciatis dignissimos consectetur doloremque maxime fuga maiores. Voluptatibus, asperiores blanditiis. Illum, quas?</p>
    </Container>
  )
}

export default DetailBlog;