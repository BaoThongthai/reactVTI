import React from 'react';
import { Card } from 'react-bootstrap';
import productHomepage from '../image/3.jpg';
import ScrollbarComponent from './ScrollbarComponent';

const HomePage = () => {
  return (
    <div
      style={{
        fontFamily: 'Arial, sans-serif',
        marginLeft: '50px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center', // Căn giữa theo chiều ngang
        marginTop: '78px',
      }}
    >
      <div style={{ width: '400px', marginBottom: '20px' }}>
        <Card>
          <Card.Img
            variant="top"
            src={productHomepage}
            alt="productHomepage"
            style={{
              width: '400px',
              height: 'auto',
              borderRadius: '8px',
            }}
          />
        </Card>
      </div>

      <div style={{ width: '100%', maxWidth: '800px' }}>
        <h1 style={{ fontWeight: 'bold', color: 'red', textAlign: 'center' }}>
          Giới Thiệu Về Trà Sữa Xingfucha
        </h1>
        <p>
          Chào mừng bạn đến với trang giới thiệu của chúng tôi về trà sữa Xingfucha - một hành trình thưởng thức độc đáo và ngon miệng. Xingfucha mang đến cho bạn không chỉ là một đồ uống, mà còn là trải nghiệm đầy hương vị và sự độc đáo.
        </p>

        <h2>Chất Lượng Nguyên Nguyên Chất</h2>
        <p>
          Trà sữa Xingfucha tự hào về chất lượng nguyên liệu nguyên chất. Chúng tôi lựa chọn những lá trà tươi ngon nhất và sử dụng sữa tươi chất lượng cao để tạo nên sự kết hợp hoàn hảo, đem lại hương vị tinh tế và độ phong phú mà bạn chưa từng trải nghiệm.
        </p>

        <h2>Đa Dạng Hương Vị</h2>
        <p>
          Với một loạt các hương vị phong phú, từ trà sữa truyền thống đến những sáng tạo mới lạ, Xingfucha mang đến cho bạn sự đa dạng để bạn có thể tận hưởng và khám phá hương vị mỗi ngày.
        </p>

        <h2>Chăm Sóc Sức Khỏe</h2>
        <p>
          Chúng tôi luôn quan tâm đến sức khỏe của khách hàng. 
          Trà sữa Xingfucha không chỉ là một đồ uống thơm ngon,
          mà còn là sự kết hợp lý tưởng giữa sức khỏe và hương vị,
        </p>
      </div>

      <div style={{ width: '100%', maxWidth: '800px', marginTop: '20px' }}>
        <ScrollbarComponent />
      </div>
    </div>
  );
};

export default HomePage;
