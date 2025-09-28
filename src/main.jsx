import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import SlideAnimationTimer from './SlideShow.jsx';
import App from './App.jsx'

const images = [
'https://media.geeksforgeeks.org/wp-content/uploads/20230407153931/gfg-tshirts.jpg',
'https://media.geeksforgeeks.org/wp-content/uploads/20240103185847/black-hoodie.webp',
'https://media.geeksforgeeks.org/wp-content/uploads/20240103185713/hoodie.jpg'
];

createRoot(document.getElementById('root')).render(    
	<SlideAnimationTimer />,
)
