/* eslint-disable no-unused-vars */
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardMedia,
  Dialog,
  DialogTitle,
  Grid,
  styled,
  Typography,
} from '@mui/material'
import React, { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close'
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload'
import classes from './bannerSetting.module.scss'

const SelectedCard = styled(Card)(() => ({
  outline: '4px #1d3557 inset',
}))

export default function BannerSetting({
  opened,
  defaultBanners,
  upload,
  currentBanner,
  setOpen,
  selected,
  action,
}) {
  return (
    <Dialog open={opened} fullWidth maxWidth="xl" id="dialog">
      <Grid container direction="column">
        <Grid item>
          <Card>
            <DialogTitle>
              <Grid container sx={{ justifyContent: 'space-between' }}>
                <Grid item>
                  <Typography variant="h6">
                    <strong>Change Banner</strong>
                  </Typography>
                </Grid>
                <Grid item>
                  <CloseIcon
                    onClick={() => {
                      setOpen(false)
                    }}
                    id="closeButton"
                  />
                </Grid>
                <Grid
                  container
                  spacing={2}
                  className={classes.defaultBannerContainer}
                >
                  {defaultBanners.map((data) => (
                    <Grid
                      key={data.name}
                      item
                      xs={6}
                      onClick={() => {
                        action.setSelected(data.name)
                      }}
                      id={data.name}
                    >
                      {data.name !== selected ? (
                        <Card>
                          <CardActionArea>
                            <CardMedia
                              component="img"
                              height="50"
                              image={data.imageUrl}
                              title="default banner"
                            />
                          </CardActionArea>
                        </Card>
                      ) : (
                        <SelectedCard>
                          <CardActionArea>
                            <CardMedia
                              component="img"
                              height="50"
                              image={data.imageUrl}
                              title="default banner"
                            />
                          </CardActionArea>
                        </SelectedCard>
                      )}
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </DialogTitle>
          </Card>
        </Grid>
        <Grid item>
          <Grid
            container
            direction="column"
            spacing={3}
            className={classes.container}
            sx={{
              alignItems: 'center',
            }}
          >
            <Grid item>
              <Grid
                container
                direction="column"
                sx={{
                  alignItems: 'center',
                }}
              >
                <Grid item>
                  <Button
                    display="flex"
                    sx={{ justifyContent: 'center', alignItems: 'center' }}
                  >
                    <DriveFolderUploadIcon
                      sx={{ height: '40%', width: '40%' }}
                    />
                  </Button>
                </Grid>
                <Grid item>
                  <Grid item className={classes.typography}>
                    <Typography>
                      <strong>Choose image from your device</strong>
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>

            <Grid item alignSelf="center">
              <Button
                variant="contained"
                onClick={() => action.handleSave()}
                className={classes.saveButton}
                id="saveButton"
              >
                Save
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Dialog>
  )
}
