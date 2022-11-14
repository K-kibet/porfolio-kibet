import { Facebook, GitHub, Instagram, LinkedIn, Twitter, YouTube } from '@mui/icons-material'
import React from 'react'

export default function Footer() {
  return (
    <footer className="footer">
      <section className="follow">
        <h1>Let's connect</h1>
        <div>
        <a href="https://www.facebook.com/kibetkorirc" target="_blank"><Facebook /></a>
        <a href="https://twitter.com/ancientpupy" target="_blank"><Twitter /></a>
        <a href="https://www.instagram.com/ancientpupy" target="_blank"><Instagram /></a>
        <a href="https://www.linkedin.com/in/kibetkorir" target="_blank"><LinkedIn /></a>
        <a href="https://github.com/K-kibet/" target="_blank"><GitHub /></a>
        <a href="https://youtube.com/k-kibet" target="_blank"><YouTube /></a>
        </div>
      </section>
      <div>
        <p>&copy;Kkibet 2022 </p>
        <a href="#faq">FAQ</a>
      </div>
    </footer>
  )
}
