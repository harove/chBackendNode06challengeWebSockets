const socket = io();

socket.on('newProduct',({products})=>{
    console.log(products)
})