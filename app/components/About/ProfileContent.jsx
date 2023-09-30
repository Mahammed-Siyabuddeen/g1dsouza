'use client';
import React, { useState } from 'react'
import style from './style.module.css'

function ProfileContent({ isKannada }) {
    const [readMore, setReadMore] = useState(false)
    const text = `My father Joseph D'Souza, based in Nelyadi (547229) near Mangalore in Dakshina Kannada district of Karnataka, started a photography and videography studio in 1999 in Nelyadi town. I have been with him since I was a child, used the cameras of those days and got interested in photography. And then after completing studies, I joined 'Neo Film School' in Kochi, Kerala to learn about photography and gain experience with the latest and new mirrorless cameras and completed more courses on photography. Along with my father, I have been taking photos and videography of all the meetings and ceremonies at Joseph Studio, which is still in operation.
    Now, along with all the meeting ceremonies, modelling concept photoshoots, we have also started photo frame work with the studio in 2021. I am happy to have made a well-designed frame work and achieved something in photography as well.
    With more inspiration, I went to different cities for wedding, pre-wedding, post-wedding and other types of videos and photography and mastered the "mirrorless" camera attitude and shoot.
    My perspective about photo and videography is that one should shoot as if there is a story and emotion in each pose, the idea that I learned in Neo Film School is 100% true. My hope is that my photography work is a testament to emotional connection, affirmation and equality.
    Now I am able to do photography and videography independently. It is a matter of happiness for me to lead Nelyadi's 'Joseph Studio', which was started by my father since 1999, for 2 years and has won the love and appreciation of people's customers.
    I hereby request you to contact me for photography and videography of any meeting functions.`
    const text1 = ` PS: In my spare time if other any studio owners want to shoot photo or videos, please contact me.`
    const text2 = `With kind regards,`
    const kannadaText = `ಕರ್ನಾಟಕದ ದಕ್ಷಿಣ ಕನ್ನಡ ಜಿಲ್ಲೆಯ ಮಂಗಳೂರು ಸಮೀಪದ ನೆಲ್ಯಾಡಿ (547229) ಎಂಬಲ್ಲಿ ವಾಸ್ತವ್ಯವಿದ್ದು, ನೆಲ್ಯಾಡಿ ಪೇಟೆಯಲ್ಲಿ 1999 ರಲ್ಲಿ ಫೋಟೋ ಮತ್ತು ವಿಡಿಯೋಗ್ರಾಫಿಯ  ಸ್ಟುಡಿಯೋವನ್ನು ಪ್ರಾರಂಭಿಸುತ್ತಾರೆ. ನಾನು ಚಿಕ್ಕದಿನಿಂದಲೆ ಅವರ ಜೊತೆಗಿದ್ದುಕೊಂಡು, ಅಂದಿನ ಕ್ಯಾಮೆರಾಗಳನ್ನು ಬಳಸಿ ನೋಡಿ, ಫೋಟೋಗ್ರಾಫಿಯ ಬಗ್ಗೆ ಆಸಕ್ತನಾದೆ. ತದನಂತರ ಹೆಚ್ಚಿನ ವಿದ್ಯಾಭಯಾಸವನ್ನು ಮುಗಿಸಿದ ಬಳಿಕ, ಫೋಟೋಗ್ರಾಫಿಯ ಬಗ್ಗೆ ಇತ್ತೀಚಿನ ನ್ಯೂ ಮಿರರ್ ಲೆಸ್ ಕ್ಯಾಮೆರಾಗಳ ಬಗ್ಗೆ ತಿಳಿದುಕೊಂಡು ಅನುಭವ ಪಡೆಯಲು ಕೇರಳದ ಕೊಚ್ಚಿಯಲ್ಲಿರುವ 'ನಿಯೋ ಫಿಲ್ಮ್ ಸ್ಕೂಲ್' ಗೆ ಸೇರಿಕೊಂಡು ಫೋಟೋ ಮತ್ತು ಫೋಟೋಗ್ರಾಫಿಯ ಬಗ್ಗೆ ಹೆಚ್ಚಿನ ಕೋರ್ಸ್ ನ್ನು ಪೂರ್ಣಗೊಳಿಸಿರುತ್ತೇನೆ. ಈಗಲೂ ಚಾಲ್ತಿಯಲ್ಲಿರುವ ಜೋಸೆಫ್ ಸ್ಟುಡಿಯೋದಲ್ಲಿ ನನ್ನ ತಂದೆಯವರ ಜೊತೆಗಿದ್ದುಕೊಂಡು, ಎಲ್ಲಾ ಸಭೆ ಸಮಾರಂಭಗಳ ಫೋಟೋ ಮತ್ತು ವಿಡಿಯೋಗ್ರಾಫಿಯನ್ನು ಮಾಡಿಕೊಂಡು ಬಂದಿರುತ್ತೇನೆ.
    ಇದೀಗ ಎಲ್ಲಾ ಸಭೆ ಸಮಾರಂಭಗಳ, ಮಾಡೆಲಿಂಗ್ ಪರಿಕಲ್ಪನೆಯ ಫೋಟೋಶೂಟ್ ಗಳ ಜೊತೆಗೆ 2021ರಲ್ಲಿ ಸ್ಟುಡಿಯೋ ದ ಜೊತೆಗೆ ಫೋಟೋಫ್ರೇಮ್ ವರ್ಕ್ ನ್ನು ಕೂಡಾ ಪ್ರಾರಂಭಿಸಿರುತ್ತೇವೆ.ಉತ್ತಮ ವಿನ್ಯಾಸದ ಫ್ರೇಮ್ ವರ್ಕ್ ಮಾಡಿಕೊಂಡು, ಫೋಟೋಗ್ರಾಫಿಯಲ್ಲೂ ಸೈ ಏನಿಸಿಕೊಂಡಿರುವುದು ನನಗೆ ಸಂತೋಷದ ವಿಚಾರವೇ ಆಗಿದೆ.
    ಜೊತೆಗೆ ಇನ್ನಷ್ಟು ಸ್ಫೂರ್ತಿಗೊಂಡು, ರೊಮ್ಯಾಂಟಿಕ್ (ಲವ್) ವೆಡ್ಡಿಂಗ್, ಪ್ರಿ ವೆಡ್ಡಿಂಗ್,ಪೋಸ್ಟ್ ವೆಡ್ಡಿಂಗ್ ಇನ್ನಿತರ ಬೇರೆ ಬೇರೆ ರೀತಿಯ ವಿಡಿಯೋ ಮತ್ತು ಫೋಟೋಗ್ರಫಿಯನ್ನು ಬೇರೆ ಬೇರೆ ಊರುಗಳಿಗೆ ತೆರಳಿ "ಮಿರರ್ ಲೆಸ್" ಕ್ಯಾಮೆರಾದ ವೈಖರಿಯ ಬಗ್ಗೆ, ಶೂಟ್ ಬಗ್ಗೆ ನಾನು ಕರಗತ ಮಾಡಿಕೊಂಡಿರುತ್ತೇನೆ.
    ಫೋಟೋ ಮತ್ತು ವಿಡಿಯೋ ಬಗ್ಗೆ ನಾನು ಹೇಳುವ ವಿಷಯವೇನೆಂದರೆ ಪ್ರತಿಯೊಂದು ಭಾವನೆಯ ಭಂಗಿಯಲ್ಲಿ ಒಂದೊಂದು ಕಥೆ ಇದ್ದೆ ಇರುವಂತೆ ಶೂಟ್ ಮಾಡಲೇಬೇಕು ಎನ್ನುವುದನ್ನು ನಾನು ನಿಯೋ ಫಿಲ್ಮ್ ಸ್ಕೂಲ್ ನಲ್ಲಿ ಕಲಿತಿರುವ ವಿಚಾರ ನೂರಕ್ಕೆ ನೂರು ಸತ್ಯವೇ ಸರಿ. ನನ್ನ ಫೋಟೋಗ್ರಾಫಿ ಕೆಲಸವು ಭಾವನೆ ಸಂಪರ್ಕ ದೃಢೀಕರಣ ಮತ್ತು ಸಮಾನತೆಗೆ ಸಾಕ್ಷಿ ಎಂಬಂತೆ ಇರಬೇಕೆನ್ನುವುದು ನನ್ನ ಆಶಾ ಭವಾನೆಯಾಗಿರುತ್ತದೆ. 
    ಇದೀಗ ನಾನು ಸ್ವತಂತ್ರವಾಗಿ ಫೋಟೊ ವಿಡಿಯೋಗ್ರಾಫಿಯನ್ನು ಮಾಡಲು ಸಮರ್ಥನಾಗಿದ್ದೇನೆ. 1990 ರಿಂದ ನನ್ನ ತಂದೆಯವರು ಪ್ರಾರಂಭಿಸಿದ್ದ ನೆಲ್ಯಾಡಿಯ 'ಜೋಸೆಫ್ ಸ್ಟುಡಿಯೋ' ವನ್ನು ಇದೀಗ 2 ವರ್ಷಗಳಿಂದ ಮುನ್ನಡೆಸುತ್ತಾ ಜನರ ಗ್ರಾಹಕರ ಪ್ರೀತಿಗೆ ಪಾತ್ರನಾಗಿ, ಮೆಚ್ಚುಗೆ ಗಳಿಸಿರುವುದು ನನಗೆ ಸಂತೋಷದ ವಿಚಾರವೇಸರಿ.
    ಯಾವುದೇ ಸಭೆ ಸಮಾರಂಭಗಳ ಫೋಟೋಗ್ರಾಫಿ ಮತ್ತು ವೀಡಿಯೋಗ್ರಾಫಿ ಬಗ್ಗೆ ಅಗತ್ಯವಿದ್ದಲ್ಲಿ ನನ್ನನ್ನು ಸಂಪರ್ಕಿಸಬೇಕಾಗಿ ಈ ಮೂಲಕ ವಿನಂತಿಸಿಕೊಳ್ಳುತ್ತೇನೆ.`
    const kannadaText1 = `ವಿ.ಸೂ: ನನ್ನ ಬಿಡುವಿನ ಸಮಯದಲ್ಲಿ ಇನ್ನಿತರ ಸ್ಟುಡಿಯೋ ಮಾಲಕರು, ಇನ್ನಿತರರು ಫೋಟೊ ವಿಡಿಯೋಗಳನ್ನು ತೆಗೆಯಲು ಇಚ್ಛಿಸಿದ್ದಲ್ಲಿ subwork (expose) ಫೋಟೊ ವೀಡಿಯೋ ಮಾಡಿಕೊಡಲು ನನ್ನನ್ನು ಸಂಪರ್ಕಿಸಬೇಕಾಗಿ ಕೇಳಿಕೊಳ್ಳುತ್ತೇನೆ.`
    const kannadaText2 = `ಇತೀ ವಂದನೆಗಳೊಂದಿಗೆ,`
    const displayText = () => {
        setReadMore(!readMore)
    }
    if (isKannada) {
        return (
            <div className={style.about_us_content}>
                <h2>ಪ್ರೀತಿಯ ವಂದನೆಗಳೊಂದಿಗೆ,</h2><br /><br />
                <p>{` ನಾನು ಜೀವನ್ ಡಿ'ಸೋಜ (Age:20)`}</p>
                <p>ಹಾರ ಮನೆ, ಕೊಕ್ಕಡ ಗ್ರಾಮ,ನೆಲ್ಯಾಡಿ ಅಂಚೆ, ಬೆಳ್ತಂಗಡಿ ತಾಲೂಕು, ದ.ಕ </p>
                <p>pin-574229</p>
                <p>Phone no- 9845637082<br />(Office)9448437519<br />(Office)9449157519</p>
                <p>{readMore ? kannadaText : kannadaText.slice(0, 500)}<span>{readMore ? kannadaText1 : ''}</span><span>{readMore ? kannadaText2 : ''}</span><span onClick={displayText} className={style.extendtext}>{readMore ? 'show less' : '....Read More'}</span></p>
            </div>
        )

    } else {

        return (
            <div className={style.about_us_content}>
                <h2>With loving regards,</h2><br /><br />
                <p>{` I am Jeevan D'Souza (Age:20).`}</p>
                <p> Hara Mane, Kokkada Village, Nelyadi Post, Belthangadi Taluk, DK</p>
                <p>pin-574229</p>
                <p>Phone no- 9845637082<br />9448437519<br /> 9449157519</p>
                <p>{readMore ? text : text.slice(0, 500)}<span>{readMore ? text1 : ''}</span><span>{readMore ? text2 : ''}</span><span onClick={displayText} className={style.extendtext}>{readMore ? 'show less' : '....Read More'}</span></p>
            </div>
        )
    }
}

export default ProfileContent