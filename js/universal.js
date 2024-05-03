const univarsalCurd = async () => {
    const res = await fetch(`https://openapi.programming-hero.com/api/ai/tools`);
    const data = await res.json();
    const curdData = data.data.tools
    univarsalCurdDisplay(curdData)
}

const univarsalCurdDisplay = (data) => {
    // console.log(data);
    const curdContainer = document.getElementById('curd-container');
    data.forEach(datas => {
        const phoneCurd = document.createElement('div');
        phoneCurd.classList = `card w-96 bg-base-100 shadow-xl`
        phoneCurd.innerHTML = `
        <figure><img src="${datas.image}" alt="Shoes" /></figure>
        <div class="card-body">
            <h2 class="card-title">Features</h2>
            <div class='p-4'>
            <li>${datas.features[0]}</li>
            <li>${datas.features[1]}</li>
            <li>${datas.features[2]}</li>
            </div>
             <div class='flex justify-between items-center border-y-2 border-gray-200 p-4'>
                <div class=''>
                <h1 class=' font-bold' >${datas.name}</h1>
                <p><span><i class="fa-solid fa-calendar p-2"></i></span>${datas.published_in}</p>
                </div>
                <div>
                <i onclick="handleShowDetails()" class="fa-solid fa-arrow-right text-orange-700"></i>
                </div>
             </div>
        </div>
        `
        curdContainer.appendChild(phoneCurd)

    });
}

const handleShowDetails = async(id) =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/ai/tool${id}`);
    const data = await res.json();
     
    // console.log(data);
    showAllModalDetails(data)
}

const showAllModalDetails = (data) => {
    console.log(data);
    const showAllCourdContainer = document.getElementById('show-modal-details');
    showAllCourdContainer.innerHTML = `
    <img class="w-1/3 mx-auto text-center" src=" " alt="">
    <h3 class="font-bold text-lg"> </h3>
    <p class="py-4"> </p>
    <p class="py-4"> </p>
    `

    show_all_details.showModal()
}


univarsalCurd()