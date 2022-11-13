const tedButton = document.getElementById("btn1");
const tedxButton = document.getElementById("btn2");
const tedfcButton = document.getElementById("btn3");
const para = document.getElementById("para1")


const renderTed = () => {
    para.innerHTML = "Nulla vitae ornare nisl, vitae malesuada enim. Cras mi quam, egestas quis ultrices eget, iaculis sit amet mi. Nam luctus, dui et dictum consequat, justo tellus rhoncus arcu, sit amet varius leo elit luctus odio. Fusce mi nisi, commodo egestas rutrum eget, venenatis et felis. Nullam sit amet fermentum mauris. Phasellus viverra massa at mauris suscipit fringilla. Aliquam sem arcu, efficitur porttitor vestibulum vel, imperdiet eu erat. Donec aliquam lorem quis augue consectetur, in lobortis libero maximus."
}
const renderTedx = () => {
    para.innerHTML = "Mauris dignissim dapibus elit fermentum tincidunt. Vivamus faucibus efficitur tellus sit amet imperdiet. Sed ultrices pulvinar sapien, at pretium enim porttitor ut. Donec nec arcu fringilla, ultricies eros ac, efficitur tortor. Nam mauris lorem, placerat at tellus sit amet, placerat volutpat odio. Proin condimentum ante quam, non finibus lorem vestibulum quis. Pellentesque mollis dui quis tincidunt rutrum. Duis scelerisque sollicitudin tristique. Mauris tempus ornare feugiat. Proin placerat enim a odio tempor, eget vestibulum nisi consequat. Nunc eu elit ac ex scelerisque posuere. Nullam sapien risus, ornare ut ligula sit amet, ultricies finibus mauris. Aenean vitae nisl nunc. Quisque eu pellentesque felis, vitae tincidunt ante."
}
const renderTedFC = () => {
    para.innerHTML = "Cras finibus feugiat dui, venenatis maximus neque luctus non. In facilisis mauris turpis, id porttitor massa pretium et. Praesent vel lectus in nibh cursus vulputate. Maecenas tempus lacus dictum cursus consectetur. Ut sit amet urna eget urna sagittis tempor eu vel ante. Mauris non nunc nisl. Nulla rhoncus, erat at sollicitudin lobortis, dui lectus commodo mi, eget porttitor dolor enim eget urna. Donec venenatis leo eget facilisis consequat. Praesent sed mauris quis odio sollicitudin mollis. Duis vel diam quis sem elementum aliquam a nec justo."
}

tedButton.addEventListener("click",renderTed)
tedxButton.addEventListener("click",renderTedx)
tedfcButton.addEventListener("click",renderTedFC)