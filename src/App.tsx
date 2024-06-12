import 'dayjs/locale/es';
import React from "react";
import { IonApp } from '@ionic/react';
import AppRouter from "@app/routes/AppRouter";
import { BrowserRouter } from "react-router-dom";
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

export default function App() {
  return (
    <React.Fragment>
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="es">
        <BrowserRouter basename="/React-UribiaOnlineFrontend">
          <IonApp>
            <AppRouter />
          </IonApp>
        </BrowserRouter>
      </LocalizationProvider>
    </React.Fragment>
  );
}
