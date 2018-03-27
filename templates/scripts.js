
module.exports = (items) => `
  <script src="/lib/react.development.js"></script>
  <script src="/lib/react-dom.development.js"></script>

  ${items.map(item => {
    console.log('item is', item)
    return `<script src="/services/${item}.js"></script>`;
  }).join('\n')}

  <script>
    ${items.map(item => {
      console.log('item here is', item)
      return `ReactDOM.hydrate(
        React.createElement(${item}),
        document.getElementById('${item}')
      );`;
    }).join('\n')}
  </script>
`;
