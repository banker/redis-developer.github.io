import React from 'react';

const Node = ({ color = '#83CD29', ...rest }) => (
  <svg width="83" height="94" xmlns="http://www.w3.org/2000/svg" {...rest}>
    <path
      d="M79.393 21.135L45.261 1.337c-2.15-1.225-4.967-1.225-7.135 0l-34.4 19.798C1.51 22.412 0 24.811 0 27.378v39.544c0 2.566 1.54 4.966 3.76 6.25l9.069 5.171c4.35 2.144 5.556 2.144 7.535 2.144 6.445 0 9.791-3.897 9.791-10.693v-39.04c0-.551.345-1.371-.197-1.371H25.61c-.55 0-1.641.82-1.641 1.37v39.04c0 3.013-2.796 6.011-7.888 3.465l-9.373-5.423a1.037 1.037 0 01-.523-.913V27.378c0-.373.358-.747.689-.938L41.189 6.675c.32-.181.775-.181 1.094 0l33.993 19.76c.326.196.274.558.274.943v39.544c0 .377.071.745-.25.926L42.176 87.624a1.003 1.003 0 01-.994 0l-8.75-5.218c-.264-.153-.582-.208-.836-.067-2.431 1.379-2.883 1.562-5.164 2.353-.562.196-1.391.535.315 1.492l11.443 6.769a7.184 7.184 0 003.593.963c1.27 0 2.512-.33 3.608-.963l34.003-19.781c2.22-1.293 3.342-3.684 3.342-6.25V27.378c0-2.567-1.123-4.96-3.343-6.243zm-27.025 39.52c-9.067 0-11.064-2.5-11.73-7.01-.078-.485-.49-1.066-.985-1.066h-4.43c-.548 0-.99.665-.99 1.211 0 5.773 3.14 12.768 18.135 12.768 10.855 0 17.08-4.218 17.08-11.683 0-7.401-5.001-9.344-15.529-10.737-10.64-1.406-11.722-2.117-11.722-4.61 0-2.055.916-4.796 8.795-4.796 7.04 0 9.634 1.51 10.702 6.256.092.446.5.766.96.766h4.449c.274 0 .534-.11.726-.306.186-.21.284-.474.26-.757-.69-8.172-6.119-11.98-17.098-11.98-9.767 0-15.593 4.124-15.593 11.037 0 7.5 5.797 9.571 15.173 10.499 11.215 1.1 12.087 2.738 12.087 4.944 0 3.832-3.076 5.465-10.29 5.465z"
      fill={color}
      fillRule="nonzero"
    />
  </svg>
);

export default Node;
