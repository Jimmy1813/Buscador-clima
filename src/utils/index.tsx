export const formatTemperature = (temperature: number) : number => {
    const Kelvin = 273.15
    return parseInt((temperature -Kelvin).toString())
}