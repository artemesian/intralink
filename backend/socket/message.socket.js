const io=require('socket.io');
let ID='';
let message={messages:[]};

io.on('connection',(socket)=>{
	console.log('un client socket vient de se connecter')

   socket.on('idCour',(data)=>{ ID=data
   	console.log(data)
   	Forum.find({idCour:data})
   	.then(mess=>
   		{
   			console.log(mess)
   	    socket.emit('initilisation',{message:mess})
         })
   	.catch(error=>console.log("error _id"))
   })

   socket.on('newMessage', (data)=>
   	{
   	socket.broadcast.emit('newMessage', data);
   		message.messages.push(data)
   		console.log(message)
	Forum.updateOne({idCour:ID},{...message})
		.then(()=>console.log('message save'))
		.catch(error=>console.log(error))

   	})


	socket.on('disconnect',(data)=>{
		console.log('un client deconnecté')
	})
})