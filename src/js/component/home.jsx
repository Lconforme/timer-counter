import React, { useEffect, useState } from "react";

const Home = () => {
	
const [seconds, setSeconds]=useState(0);
const [minutes, setMinutes]=useState(0);

var timer;
useEffect(()=>{

timer= setInterval(()=>{

	setSeconds(seconds+1);

		if(seconds===59){
			setMinutes(minutes+1);
			setSeconds(0);
		}

},1000)

return()=> clearInterval(timer);

});

const restart=() => {
	setSeconds(0);
	setMinutes(0);
}

const stop=() => {
	clearInterval(timer);
}
	return (
		<div className="timer text-center">
			<div className="container">
				<div classname="timer-container">
					<h1>Timer</h1>
					<h1>{minutes<10? "0"+minutes: minutes}:{seconds<10? "0"+seconds: seconds}</h1>
					<button className="restart" onClick={restart}>Restart</button>
					<button className="stop" onClick={stop}>Stop</button>
				</div>
			</div>
		</div>
	);
};

export default Home;
