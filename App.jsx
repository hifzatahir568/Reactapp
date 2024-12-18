import React from 'react';

const App = () => {
  const productsData = [
    {
      title: 'Open Ear Headphones',
      price: '$29',
      rating: '4.6 out of 5 stars',
      review_count: '10 ratings',
      url: 'https://www.amazon.com/example',
      about_this_item: 'Innovative Open Earbud Design',
    },
    {
      title: 'TOZO HT2 Hybrid Noise Cancelling Headphones',
      price: '$39',
      rating: '4.5 out of 5 stars',
      review_count: '9,663 ratings',
      url: 'https://www.amazon.com/example',
      about_this_item: 'ANC Noise Cancellation | 60 Hours Playtime',
    },
    {
      title: 'Beats Flex Wireless Earbuds',
      price: 'N/A',
      rating: '',
      review_count: '54,577 ratings',
      url: 'https://www.amazon.com/example',
      about_this_item: '12 Hours of listening time',
    },
  ];

  return (
    <div style={{ padding: '20px', textAlign: 'center', fontFamily: 'Arial' }}>
      <h1 style={{ color: '#007bff' }}>Product Details Table</h1>
      <table
        style={{
          margin: '0 auto',
          borderCollapse: 'collapse',
          width: '80%',
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        }}
      >
        <thead>
          <tr style={{ backgroundColor: '#007bff', color: 'white' }}>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>Title</th>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>Price</th>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>
              Rating
            </th>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>
              Review Count
            </th>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>About</th>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>Link</th>
          </tr>
        </thead>
        <tbody>
          {productsData.map((product, index) => (
            <tr key={index}>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>
                {product.title}
              </td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>
                {product.price}
              </td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>
                {product.rating || 'N/A'}
              </td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>
                {product.review_count}
              </td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>
                {product.about_this_item}
              </td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>
                <a href={product.url} target='_blank' rel='noopener noreferrer'>
                  View Product
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
