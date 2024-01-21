import React, { useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ScrollbarComponent = () => {
  const contentRef = useRef();

  useEffect(() => {
    const contentElement = contentRef.current;
    let scrollInterval;

    // Hàm cuộn tự động mỗi giây
    const autoScroll = () => {
      contentElement.scrollTop += 1; // Điều chỉnh giá trị tùy theo nhu cầu
    };

    // Bắt đầu cuộc họp mỗi giây
    scrollInterval = setInterval(autoScroll, 1000);

    // Xóa cuộc họp khi component unmount
    return () => clearInterval(scrollInterval);
  }, []);

  // Đường link của các hình ảnh
  const imageUrls = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8JV15SFqFQeomEs0xKG-x0YrpfbpbOEqeLw&usqp=CAU',
	'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8JV15SFqFQeomEs0xKG-x0YrpfbpbOEqeLw&usqp=CAU',
	'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8JV15SFqFQeomEs0xKG-x0YrpfbpbOEqeLw&usqp=CAU',
	'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8JV15SFqFQeomEs0xKG-x0YrpfbpbOEqeLw&usqp=CAU',
	'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8JV15SFqFQeomEs0xKG-x0YrpfbpbOEqeLw&usqp=CAU',
    'https://placekitten.com/120/120',
    'https://placekitten.com/140/140',
    // Thêm các đường link hình ảnh khác tại đây
  ];

  return (
    <div style={{ overflowY: 'auto', maxHeight: '800px' }} ref={contentRef}>
      <div className="d-flex flex-row">
        {imageUrls.map((imageUrl, index) => (
          <img
            key={index}
            src={imageUrl}
            alt={`Image ${index + 1}`}
            className="img-fluid mr-2"
            style={{ maxHeight: '400px' }}
          />
        ))}
      </div>
    </div>
  );
};

export default ScrollbarComponent;
