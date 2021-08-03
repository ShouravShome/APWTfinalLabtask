import {useState, useEffect} from 'react';

export const useFatch = (url, callback)=>{
	const getUserdata = async fetch(url);
	const data = await response.json();
	return data;
}

useEffect(()=>{
	const getJsonData = async  ()=> await getUserdata();
	getJsonData().then(data=>callback(data));
}, []);
}