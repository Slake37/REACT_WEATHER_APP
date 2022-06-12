import {Link} from 'react-router-dom'
import { useEffect ,useState} from 'react';
import axios from 'axios'
import Loading from '../components/Loading'
import Forecast from '../components/Forecast'


function Home({location}) {
    const[weather, setWeather] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    

      useEffect(() => {
        const getWeather = async () => {
            setIsLoading(true)
            const response = await axios(`https://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_API_KEY}&q=${location}&days=3&aqi=no&alerts=no
            `)
            console.log(response.data)
            setWeather(response);
            console.log(weather)
            setIsLoading(false)
           }
           getWeather()
        
       
      }, [location])

     
      

  return isLoading ? (
      <Loading/>) :(
    <div className='h-screen bg-blue-600 flex flex-col justify-center align-middle p-auto md:w-1/2 m-auto'>
        <header>
            <div className='flex flex-col  align-middle justify-center text-center px-1 text-lg font-bold md:text-xl text-white'>
                <p>{weather.data.location.name},</p>
                <p>{weather.data.location.country}</p> 
                <p className='text-sm'>{weather.data.location.localtime}</p>
                <p>{weather.data.current.temp_c} {'\u00b0'}C</p>
                <img 
                src={weather.data.current.condition.icon} 
                alt={weather.data.current.condition.text}
                className=' text-center m-auto' />
            </div>
        </header>
        <section className='flex flex-col justify-center align-middle text-center my-1 text-white'>
            <h2 className='mb-2 text-lg font-bold'>3 Day Forecast</h2>
            <div className='grid grid-cols-3'>
                <Forecast 
                    className='flex flex-col text-center align-middle justify-center'
                    date={weather.data.forecast.forecastday[0].date}
                    icon={weather.data.forecast.forecastday[0].day.condition.icon}
                    iconText={weather.data.forecast.forecastday[0].day.condition.text}
                    temperature={weather.data.forecast.forecastday[0].day.maxtemp_c}
                />
                <Forecast 
                    date={weather.data.forecast.forecastday[1].date}
                    icon={weather.data.forecast.forecastday[1].day.condition.icon}
                    iconText={weather.data.forecast.forecastday[1].day.condition.text}
                    temperature={weather.data.forecast.forecastday[1].day.maxtemp_c}
                />
                <Forecast 
                    date={weather.data.forecast.forecastday[2].date}
                    icon={weather.data.forecast.forecastday[2].day.condition.icon}
                    iconText={weather.data.forecast.forecastday[2].day.condition.text}
                    temperature={weather.data.forecast.forecastday[2].day.maxtemp_c}
                />
            </div>
        </section>
        <Link to='/'>
            <button className="bg-green-600 py-2 px-3 m-5 md:w-1/3 text-white rounded-md self-center">
                Go Back to Search
            </button>
        </Link>
    </div>
  )
}

export default Home