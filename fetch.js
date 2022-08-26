const fetchButton = document.querySelector('#fetchButton');
const fetchImg = document.querySelector('#fetchImg');
console.log(fetchImg);

fetchButton.addEventListener('click', async (e) => {
    e.preventDefault();
    const response = await fetch('https://cataas.com/cat?json=true');
    const data = await response.json()
    fetchImg.src = `https://cataas.com/${data.url}`;
});

const cursor = document.querySelector("#cursor");
    const mouseMove = function (e) {
    let x = e.clientX;
    let y = e.clientY;
    cursor.style.left = x + "px";
    cursor.style.top = y + "px";
};
document.addEventListener("mousemove", mouseMove); 