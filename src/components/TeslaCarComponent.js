export function TeslaCarComponent({wheels, speed})  {
    return ( 
     <div className="tesla-car">
    <div className="tesla-wheels">
      <div
        className={`tesla-wheel tesla-wheel--front tesla-wheel--${wheels.value}--${speed.value}`}
      />
      <div
        className={`tesla-wheel tesla-wheel--rear tesla-wheel--${wheels.value}--${speed.value}`}
      />
    </div>
  </div>
  )
}