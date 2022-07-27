import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const ShareArt = (props) => {
  return (
    <div>
      <h1>Share Your Talent Below!</h1>
      <section className="shareForm"></section>
    </div>
  )
}

export default ShareArt
