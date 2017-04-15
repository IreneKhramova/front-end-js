export default function showData(response) {
  const elements = document.querySelector('.elements');
  let data = JSON.parse(response);

  data.goods.forEach(function (item) {
    let itemNode = document.createElement('div');
    itemNode.classList.add('item');

    let previewNode = document.createElement('span');
    previewNode.classList.add('preview');

    let imgNode = document.createElement('img');
    imgNode.src = 'goods/' + item.preview;

    let titleNode = document.createElement('span');
    titleNode.classList.add('title');
    titleNode.appendChild(document.createTextNode(item.title));

    let priceNode = document.createElement('span');
    priceNode.classList.add('price');
    priceNode.appendChild(document.createTextNode(item.price + ' P'));

    previewNode.appendChild(imgNode);

    itemNode.appendChild(previewNode)
    itemNode.appendChild(titleNode)
    itemNode.appendChild(priceNode)

    elements.appendChild(itemNode);
  });
}