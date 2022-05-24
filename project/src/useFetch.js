import { useEffect, useState } from 'react';

const useFetch = (url)=>{
    console.log('in useFetch')

    const [data, setData] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);
	const [refetch, setRefetch] = useState(false)

	const retry = () =>{
		console.log('retrying request')
		setIsLoading(true)
		setError(null)
		setData(null)
		setRefetch(prev => !prev)
	}

    useEffect(()=>{
        console.log("useEffect")
    })
    
	useEffect(() => {
        let isMounted = true
		const abortCont = new AbortController();
		const fetchData = async() =>{

            try{
                console.log('fetching')
                const resp = await fetch(url, { 
                    signal: abortCont.signal,
                    method:'GET'
                }).then((res)=>res.json())

                if(isMounted){
                    setData(resp);
                    console.log('returning data', resp)
                    setIsLoading(false);
                    setError(null);
                }

            }catch(err){
                if (err.name === 'AbortError') {
                    console.log('Fetch aborted');
                } else {
                    console.log(err.message)
                    if (isMounted){

                        setError(err.message);
                        setIsLoading(false);
                    }
                }
            }
		}
		fetchData()
		return () => {isMounted=false; abortCont.abort()};
	}, []);

	return { data, isLoading, error, retry };
}
export {useFetch}