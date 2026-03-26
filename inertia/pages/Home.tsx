import { Head } from '@inertiajs/react'
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  Stack,
  Chip,
} from '@mui/material'
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch'

export default function Home() {
  return (
    <>
      <Head title="Home" />
      <Container maxWidth="md">
        <Box
          sx={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Card sx={{ width: '100%', maxWidth: 600 }}>
            <CardContent sx={{ textAlign: 'center', py: 6 }}>
              <RocketLaunchIcon sx={{ fontSize: 64, color: 'primary.main', mb: 2 }} />
              <Typography variant="h3" component="h1" gutterBottom>
                Welcome
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
                AdonisJS + Inertia + React + MUI + MySQL
              </Typography>
              <Stack direction="row" spacing={1} justifyContent="center" flexWrap="wrap">
                <Chip label="AdonisJS" color="primary" />
                <Chip label="Inertia.js" color="secondary" />
                <Chip label="React" color="info" />
                <Chip label="MUI" color="success" />
                <Chip label="MySQL" color="warning" />
              </Stack>
            </CardContent>
          </Card>
        </Box>
      </Container>
    </>
  )
}
