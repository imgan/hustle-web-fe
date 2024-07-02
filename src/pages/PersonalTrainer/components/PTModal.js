import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { Box, useMediaQuery } from '@mui/material';
import '../../Homepage/style.css';
import { useTheme } from '@mui/material/styles';
import { url_image } from '../../../service/api';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiPaper-root': {
    /* xlargeDeviceSize */
    '@media (min-width: 1199.99px)': {},
    /* largeDeviceSize */
    '@media (min-width: 900px)': {
      minWidth: '800px',
    },
    /* mediumDeviceSize */
    '@media (max-width: 899.99px)': {
      width: '100%',
    },
    /* smallDeviceSize */
    '@media (max-width: 767.98px)': {},
    /* xSmallDevice */
    '@media (max-width: 575.98px)': {},
    /* xxSmallDevice */
    '@media (max-width: 400px)': {},
    backgroundColor: '#171717',
  },
  '& .MuiDialogContent-root': {
    //   padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export default function PTModal(props) {
  const { onClose, open, detailPT } = props;

  const xSmallDevice = useMediaQuery('(max-width: 575.98px)')
  const smallDeviceSize = useMediaQuery('(max-width: 767.98px)')
  const mediumDeviceSize = useMediaQuery('(max-width: 991.98px)')
  const largeDeviceSize = useMediaQuery('(max-width: 1199.98px)')
  const xLargeDeviceSize = useMediaQuery('(min-width: 1199.99px)')

  const handleClose = () => {
    onClose();
  };

  return (
    <div>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="dialog-title">
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: 'white',
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent className='text-white' sx={{ pb: '0.5rem !important' }}>
          <Box className='row'>
            <Box className='d-flex justify-content-center align-items-start col-md-6 col-sm-12'>
              <div className='bg-pt' style={{backgroundColor: detailPT.image ? '' : '#D9D9D9', backgroundImage: `url(${url_image(detailPT.image)})`}} />
            </Box>
            <Box className='col-md-6 col-sm-12 hg-pt'>
              <Box className={`${smallDeviceSize ? 'text-center' : ''}`}><Typography fontSize={smallDeviceSize ? '16px' : '32px'} className='mb-2 Din-700'>{detailPT.name}</Typography></Box>
              <Box><h6 className='Din-700 s-1026 mb-14'>Specialization</h6></Box>
              <div className='d-flex detail-PT flex-wrap w-100'>
                {detailPT?.specializations.map((item, i) => {
                  return (
                    <p className='Din-400'>{item} </p>
                  )
                })}
                </div>
              {/* </Box> */}
              <Box>
              <p className='Din-400 s-14i' dangerouslySetInnerHTML={{__html: detailPT.text}}></p>
                {/* <Typography fontSize={'14px'} className='Din-400'>{detailPT.text}</Typography> */}
                </Box>
            </Box>
          </Box>
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
}