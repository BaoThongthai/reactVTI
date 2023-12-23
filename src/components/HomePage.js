import React from 'react';
import { Card } from 'react-bootstrap';

const HomePage = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', marginLeft: '20px', display: 'flex', flexWrap: 'wrap' }}>
      <div style={{ flex: '1', marginRight: '20px' }}>
        <Card style={{ width: '100%' }}>
          <Card.Img
            variant="top"
            src="https://scontent-xsp1-2.xx.fbcdn.net/v/t39.30808-6/407261129_670959721834772_389033561569337500_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeHvLB3PXzgVbdT0gzZJw8B7q_2CG5bbq96r_YIbltur3pEPo63DlKG3PJm_ZpwhTtaonuvUHy7BxumK3243QGwz&_nc_ohc=w8FdpvtVIt4AX9KXsIv&_nc_ht=scontent-xsp1-2.xx&oh=00_AfBvnNBmkhRO9Tzkk45mTgVXNrk4C-rde8LejCsYlo3Rhg&oe=6586BC8C"
            alt="Trà Sữa Xingfucha 1"
            style={{
              width: '100%',
              height: 'auto',
              borderRadius: '8px',
            }}
          />
        </Card>
      </div>

      <div style={{ flex: '2' }}>
	  
        <h1 style={{ fontWeight: 'bold', color: 'red', textAlign: 'center' }}>Giới Thiệu Về Trà Sữa Xingfucha</h1>
        <p>
          Chào mừng bạn đến với trang giới thiệu của chúng tôi về trà sữa Xingfucha - một hành trình thưởng thức độc đáo và ngon miệng. Xingfucha mang đến cho bạn không chỉ là một đồ uống, mà còn là trải nghiệm đầy hương vị và sự độc đáo.
        </p>

        <h2 >Chất Lượng Nguyên Nguyên Chất</h2>
        <p>
          Trà sữa Xingfucha tự hào về chất lượng nguyên liệu nguyên chất. Chúng tôi lựa chọn những lá trà tươi ngon nhất và sử dụng sữa tươi chất lượng cao để tạo nên sự kết hợp hoàn hảo, đem lại hương vị tinh tế và độ phong phú mà bạn chưa từng trải nghiệm.
        </p>

        <h2 >Đa Dạng Hương Vị</h2>
        <p>
          Với một loạt các hương vị phong phú, từ trà sữa truyền thống đến những sáng tạo mới lạ, Xingfucha mang đến cho bạn sự đa dạng để bạn có thể tận hưởng và khám phá hương vị mỗi ngày.
        </p>

        <h2 >Chăm Sóc Sức Khỏe</h2>
        <p>
          Chúng tôi luôn quan tâm đến sức khỏe của khách hàng. Trà sữa Xingfucha không chỉ là một đồ uống thơm ngon, mà còn là sự kết hợp lý tưởng giữa sức khỏe và hương vị, giúp bạn thư giãn và cảm nhận những khoảnh khắc đặc biệt.
        </p>
      </div>
    </div>
  );
};

export default HomePage;
