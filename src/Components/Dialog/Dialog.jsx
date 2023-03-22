import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function FormDialog({
    open, setOpen,setRow
}) {
  const [state, setState] = React.useState({
    tipoDeMercancia:"",
    //descripcion:"",
    cant:"",
    //numEtiq:"",
    PesoUno:"",  //(lb.)
    valorDeclarado:"", //(Factura)
    //numBulto:"",
    HBL: 30804000000,
    Fecha:"",
    Consignatario:"",
    PasaporteC:"",
    cIdentidad:"",
    DireccionDelCon:"",
    Telefono:"",
    Embarcador:"",
    Remitente:"",
    PasaporteR:"",
    Direccion:"",
    Volumen:"",
    Valor:"",
    numSaco:"",
  })

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
    
    
    setRow(prevState => {
        console.log([...prevState, state], ...prevState)    
        return [...prevState, state]
    });
    setState(prevState => ({...prevState, HBL : prevState.HBL+1}))
    setOpen(false);
    
  };
  const handleChange = (e) => {
    setState((prevalue) => {
        return {
            ...prevalue,
            [e.target.name]: e.target.value
        }      
    })
}

  return (
    <div>
      
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Nuevo Prod</DialogTitle>
        <DialogContent>
          <TextField
          value={state.tipoDeMercancia}
            onChange={handleChange}
            margin="dense"
            label="TipoDeMercancia"
            name='tipoDeMercancia'
            fullWidth
            variant="standard"
          />
         {/*  <TextField
          value={state.descripcion}
            onChange={handleChange}
            margin="dense"
            label="Descripcion"
            type="text"
            name='descripcion'
            fullWidth
            variant="standard"
          /> */}
          {<TextField
          value={state.cant}
            onChange={handleChange}
            margin="dense"
            id="name"
            label="Cantidad"
            type="text"
            name='cant'
            fullWidth
            variant="standard"
          />}
          {/* <TextField
          value={state.numEtiq}
            onChange={handleChange}
            margin="dense"
            id="name"
            label="Número de Etiqueta"
            type="text"
            name="numEtiq"
            fullWidth
            variant="standard"
          /> */}
          <TextField
          value={state.PesoUno}
            onChange={handleChange}
            margin="dense"
            id="name"
            label="Peso(Kg)"
            name="PesoUno"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
          value={state.valorDeclarado}
            onChange={handleChange}
            margin="dense"
            id="name"
            label="valorDeclarado" name="valorDeclarado"
            type="text"
            fullWidth
            variant="standard"
          />
          {/* <TextField
          value={state.numBulto}
            onChange={handleChange}
            margin="dense"
            id="name"
            label="numBulto" name="numBulto"
            type="text"
            fullWidth
            variant="standard"
          /> */}
          <TextField
          value={state.HBL}
            onChange={handleChange}
            margin="dense"
            id="name"
            label="HBL" 
            name="HBL"
            type="number"
            fullWidth
            variant="standard"
          />
          <TextField
          value={state.Fecha}
            onChange={handleChange}
            margin="dense"
            id="name"
            label="Fecha" name="Fecha"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
          value={state.Consignatario}
            onChange={handleChange}
            margin="dense"
            id="name"
            label="Consignatario(Catcher)" name="Consignatario"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
          value={state.PasaporteC}
            onChange={handleChange}
            margin="dense"
            id="name"
            label="PasaporteConsignatario" name="PasaporteC"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
          value={state.cIdentidad}
            onChange={handleChange}
            margin="dense"
            id="name"
            label="cIdentidad" name="cIdentidad"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
          value={state.DireccionDelCon}
            onChange={handleChange}
            margin="dense"
            id="name"
            label="DireccionDelCon" name="DireccionDelCon"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
          value={state.Telefono}
            onChange={handleChange}
            margin="dense"
            id="name"
            label="Telefono" name="Telefono"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
          value={state.Embarcador}
            onChange={handleChange}
            margin="dense"
            id="name"
            label="Embarcador" name="Embarcador"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
          value={state.Remitente}
            onChange={handleChange}
            margin="dense"
            id="name"
            label="Remitente" name="Remitente"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
          value={state.PasaporteR}
            onChange={handleChange}
            margin="dense"
            id="name"
            label="PasaporteRemitente" name="PasaporteR"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
          value={state.Direccion}
            onChange={handleChange}
            margin="dense"
            id="name"
            label="Direccion" name="Direccion"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
          value={state.Volumen}
            onChange={handleChange}
            margin="dense"
            id="name"
            label="Volumen" name="Volumen"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
          value={state.Valor}
            onChange={handleChange}
            margin="dense"
            id="name"
            label="Valor(QUEDA POR VER)" name="Valor"
            type="text"
            fullWidth
            variant="standard"
          />
          {/* <TextField
          value={state.numSaco}
            onChange={handleChange}
            margin="dense"
            label="numeroSaco(NI IDEA, Estaba en el de Aero Varadero)"
            name='numSaco'
            fullWidth
            variant="standard"
          /> */}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>CERRAR</Button>
          <Button onClick={handleSave}>GUARDAR</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
