import { createStyles } from '@mantine/core'
import React from 'react'
import SwitchCase from '../SwitchCase/SwitchCase';

const useStyles = createStyles((theme) => ({
    image: {
        width: '100%',
        height: 440,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderRadius: '5px',
        zIndex: '0',},

    tit: {
        width: 950,
        height: 440,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderRadius: '5px',
        backgroundImage: 'url(image2.jpg)',
        zIndex: '0',
        opacity: 0.9
    },
    letter: {
        width: 950,
        height: 440,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderRadius: '5px',
        fontSize: 32,
        lineHeight: 1.55,
        textDecoration: 'none',
        color: 'white',
        opacity: 0.9,
        fontWeight: 700,
        textTransform: 'uppercase',
        fontFamily: `Greycliff CF ${theme.fontFamily}`,
        marginLeft: 80,
        marginTop: 45,
    },
        
    
    }));





const SecondaryCard = () => {

    const { classes } = useStyles();

  return (
    <>
    <article>
        <div className={classes.tit}>
        <h3
        className={classes.letter}
        >Project change your theme</h3>    
        <SwitchCase/>
        </div>



    </article>
    
    
    
    
    </>
  )
}

export default SecondaryCard