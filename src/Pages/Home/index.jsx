import React, { useState } from 'react';
import { Box, Typography, Button, Modal, TextField, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import profileImg from '../../assets/profile.png';

function Hero() {
  const [showModal, setShowModal] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Submitted!');
    setShowModal(false);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'center',
        justifyContent: 'space-between',
        py: { xs: 3, sm: 5, md: 6 },
        px: { xs: 1, sm: 4, md: 10 },
        minHeight: '80vh',
        color: 'white',
        position: 'relative',
      }}
    >
      {/* Left Content */}
      <Box
        sx={{
          flex: 1,
          mt: { xs: 0, md: -10 },
          textAlign: { xs: 'center', md: 'left' },
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: '2rem', sm: '3rem', md: '5rem', lg: '7rem' },
            fontWeight: 'bold',
            color: 'rgb(241, 241, 247)',
            textShadow: '4px 4px 15px rgb(247, 238, 238)',
            animation: 'fadeIn 2s ease-in-out',
          }}
        >
          Sidra Tufail
        </Typography>

        <Box
  sx={{
    mt: 3,
    px: { xs: 2, sm: 3 },
    py: { xs: 1.5, sm: 2 },
    maxWidth: { xs: 280, sm: 400, md: 500 },
    borderRadius: 3,
    border: '2px solid rgba(255, 255, 255, 0.2)',
    backgroundColor: 'rgba(255,255,255,0.05)',
    boxShadow: '0 0 20px rgba(255,255,255,0.1)',
    backdropFilter: 'blur(4px)',
    mx: { xs: 'auto', md: '0' }
  }}
>
  <Typography
    sx={{
      fontSize: { xs: 14, sm: 18, md: 22 },
      fontWeight: 600,
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      borderRight: '2px solid white',
      animation: 'typing 4s steps(40, end), blink 0.75s step-end infinite',
      color: '#fff'
    }}
  >
    I am a passionate Frontend Developer
  </Typography>
</Box>


        <Typography
          sx={{
            fontSize: { xs: 12, sm: 14, md: 18 },
            fontWeight: 600,
            mt: 3,
            color: '#d0d0d0',
            opacity: 0,
            animation: 'fadeIn 3s ease-in-out 1s forwards',
          }}
        >
          I specialize in building responsive, user-friendly web applications using the latest technologies.
        </Typography>

        <Button
          onClick={() => setShowModal(true)}
          sx={{
            mt: 4,
            px: 4,
            py: 1.5,
            fontSize: 18,
            fontWeight: 'bold',
            borderRadius: 2,
            backgroundColor: 'white',
            color: 'black',
            border: '2px solid black',
            '&:hover': {
              backgroundColor: 'rgb(18, 17, 63)',
              color: 'hsl(30, 16.70%, 95.30%)',
              transform: 'scale(1.05)',
            }
          }}
        >
          Get in Touch
        </Button>
      </Box>

      {/* Right Content */}
      <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center', mt: { xs: 4, md: 0 } }}>
        <Box
          component="img"
          src={profileImg}
          alt="Sidra Tufail"
          sx={{
            width: { xs: 180, sm: 220, md: 300 },
            borderRadius: '10%',
            border: '10px solid hwb(252 91% 7%)',
            boxShadow: '10px 10px 30px rgb(248, 247, 247)',
            padding: '8px',
            animation: 'moveImage 2s ease-out forwards',
            transition: 'all 0.3s ease-in-out',
            '&:hover': {
              transform: 'scale(1.05)',
              boxShadow: '4px 4px 30px rgb(252, 250, 250)',
              borderColor: 'hwb(247 12% 71%)',
              cursor: 'pointer'
            }
          }}
        />
      </Box>

      {/* Modal */}
      <Modal open={showModal} onClose={() => setShowModal(false)}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bgcolor: 'white',
            color: 'white',
            p: 4,
            borderRadius: 2,
            width: { xs: '90%', sm: 500 },
            boxShadow: '0 0 20px rgba(255,255,255,0.1)'
          }}
        >
          <Typography variant="h5" mb={2}>Contact Me</Typography>
          <form onSubmit={handleSubmit}>
            <TextField fullWidth label="Name" required variant="outlined" sx={{ mb: 2 }} />
            <TextField fullWidth label="Email" type="email" required variant="outlined" sx={{ mb: 2 }} />
            <TextField fullWidth label="Message" required multiline rows={4} variant="outlined" sx={{ mb: 2 }} />
            <Button type="submit" variant="contained" sx={{ backgroundColor: '#013302', '&:hover': { backgroundColor: '#45a049' }, mr: 2 }}>
              Submit
            </Button>
            <Button onClick={() => setShowModal(false)} sx={{ backgroundColor: '#360455', color: 'white', '&:hover': { backgroundColor: '#be3d09' } }}>
              Go Back
            </Button>
          </form>
        </Box>
      </Modal>
    </Box>
  );
}

export default Hero;
