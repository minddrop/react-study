import React, { useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'

const forecastWeather = async (cityName: string) => {
  const apiKey = process.env.REACT_APP_WEATHER_API_KEY
  const url = 'https://api.openweathermap.org/data/2.5/forecast'
  const params = { q: cityName, appid: apiKey }
  try {
    const res = await axios.get(url, { params })
    return { isSucess: true, data: res.data, error: null }
  } catch (error) {
    return { isSucess: false, data: null, error }
  }
}

export const Weather: React.FC = () => {
  const [city, changeCity] = useState('')
  const [forecast, changeForecast] = useState<any>(null)

  const handleOnSearchButton = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault()
    const result = await forecastWeather(city)
    if (result.isSucess) {
      console.log(result.data)
      changeForecast(result.data)
    } else window.alert(String(result.error))
  }

  return (
    <Wrapper>
      <div>
        <Title>Weather Forecast</Title>
        <SearchForm>
          <Input
            placeholder="Search location."
            onChange={(event): void => changeCity(event.target.value)}
          ></Input>
          <SearchButton
            onClick={event => handleOnSearchButton(event)}
            disabled={!city}
          >
            Search
          </SearchButton>
        </SearchForm>
        {forecast && (
          <ResultContent>
            {forecast.list.map((item: any) => {
              return (
                <Result key={item.dt}>{item.weather[0].description}</Result>
              )
            })}{' '}
          </ResultContent>
        )}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
`

const Title = styled.h1`
  font-size: 24px;
  text-align: center;
`

const SearchForm = styled.form`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`

const Input = styled.input`
  display: block;
  padding: 10px;
`

const ResultContent = styled.div`
  margin-top: 20px;
`

const Result = styled.div``

const SearchButton = styled.button`
  margin-left: 10px;
  border: none;
  cursor: pointer;
  &:disabled {
    cursor: not-allowed;
  }
`
