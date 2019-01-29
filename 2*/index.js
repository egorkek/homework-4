const dataTable = [
    {
        name: 'name1',
        value: '1'
    },
    {
        name: 'name2',
        value: '2'
    },
    {
        name: 'name3',
        value: '3'
    },
    {
        name: 'name4',
        value: '4'
    },
];
const table=document.querySelector('table')
dataTable.map((obj)=>{
    table.innerHTML+=`<tr><th>${obj.name}</th><th>${obj.value}</th></tr>`
})