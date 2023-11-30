const spanCount = document.querySelector('#spanCount');
const spanAverageCost = document.querySelector('#spanAverageCost');
const ul = document.querySelector('ul');

const freelancer = [
    {name: 'Dr. Slice', cost: 25, job: 'gardener'},
    {name: 'Dr. Pressure', cost: 51, job: 'programmer'}
];

const names = ['Jimmy', 'Bob', 'Catherine', 'Samantha', 'Daniel', 'Clara', 'Prof', 'Forrest', 'Dom', 'Chris'];
const jobs = ['Engineer', 'Plumber', 'Gardener', 'Programmer', 'Tutor'];

function render(){
    spanCount.innerHTML = freelancer.length;
    let sum = 0;
    freelancer.forEach((person)=>{
        sum = sum + person.cost;
    });
    const average = sum / freelancer.length;
    console.log(average);
    spanAverageCost.innerHTML = average.toFixed(2);

    const html = freelancer.map((person)=>{return `
    <li>
    ${person.name}, Price: ${person.cost.toFixed(2)}}, Occupation: ${person.job}}
    </li>
    `
}).join('');
ul.innerHTML = html;

};

render();

const interval = setInterval(()=> {
    const namesIndex = Math.floor(Math.random()*names.length);
    const name = names[namesIndex];
    const jobIndex = Math.floor(Math.random()*jobs.length);
    const job = jobs[jobIndex];
    const cost = Math.random()*10;
    const randomPerson = {
        name: name,
        job: job,
        cost: cost
    };
    freelancer.push(randomPerson);
    render();
    if(freelancer.length === 20){
        clearInterval(interval);
    }
}, 1000);