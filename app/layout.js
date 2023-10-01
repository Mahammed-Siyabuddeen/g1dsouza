import './globals.css'
import { Inter } from 'next/font/google'
import Header from './components/Header/Header'
import Footer from './components/footer/Footer'


export const metadata = {
  title: 'g1.d.souza Photographer/Videographer',
  description: `My father Joseph D'Souza, based in Nelyadi (547229) near Mangalore in Dakshina Kannada district of Karnataka, started a photography and videography studio in 1999 in Nelyadi town. I have been with him since I was a child, used the cameras of those days and got interested in photography. And then after completing studies, I joined 'Neo Film School' in Kochi, Kerala to learn about photography and gain experience with the latest and new mirrorless cameras and completed more courses on photography. Along with my father, I have been taking photos and videography of all the meetings and ceremonies at Joseph Studio, which is still in operation.
  Now, along with all the meeting ceremonies, modelling concept photoshoots, we have also started photo frame work with the studio in 2021. I am happy to have made a well-designed frame work and achieved something in photography as well.
  With more inspiration, I went to different cities for wedding, pre-wedding, post-wedding and other types of videos and photography and mastered the "mirrorless" camera attitude and shoot.
  My perspective about photo and videography is that one should shoot as if there is a story and emotion in each pose, the idea that I learned in Neo Film School is 100% true. My hope is that my photography work is a testament to emotional connection, affirmation and equality.
  Now I am able to do photography and videography independently. It is a matter of happiness for me to lead Nelyadi's 'Joseph Studio', which was started by my father since 1999, for 2 years and has won the love and appreciation of people's customers.
  I hereby request you to contact me for photography and videography of any meeting functions.`,
  openGraph: {
    title: 'g1.d.souza Photographer/Videographer',
    description: `My father Joseph D'Souza, based in Nelyadi (547229) near Mangalore in Dakshina Kannada district of Karnataka, started a photography and videography studio in 1999 in Nelyadi town. I have been with him since I was a child, used the cameras of those days and got interested in photography. And then after completing studies, I joined 'Neo Film School' in Kochi, Kerala to learn about photography and gain experience with the latest and new mirrorless cameras and completed more courses on photography. Along with my father, I have been taking photos and videography of all the meetings and ceremonies at Joseph Studio, which is still in operation.
  Now, along with all the meeting ceremonies, modelling concept photoshoots, we have also started photo frame work with the studio in 2021. I am happy to have made a well-designed frame work and achieved something in photography as well.
  With more inspiration, I went to different cities for wedding, pre-wedding, post-wedding and other types of videos and photography and mastered the "mirrorless" camera attitude and shoot.
  My perspective about photo and videography is that one should shoot as if there is a story and emotion in each pose, the idea that I learned in Neo Film School is 100% true. My hope is that my photography work is a testament to emotional connection, affirmation and equality.
  Now I am able to do photography and videography independently. It is a matter of happiness for me to lead Nelyadi's 'Joseph Studio', which was started by my father since 1999, for 2 years and has won the love and appreciation of people's customers.
  I hereby request you to contact me for photography and videography of any meeting functions.`,
  },
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
