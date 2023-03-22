import * as React from 'react';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import EnhancedTableHead from "./Table/TableHead";
import EnhancedTableToolbar from './Table/Toolbar';
import FormDialog from './Dialog/Dialog';
import { useState } from 'react';
import { Button } from '@mui/material';

function createData(
  
    tipoDeMercancia,
    //descripcion,
    cant,
    /* numEtiq, // AUTOGENERADO */
    PesoUno,
    valorDeclarado,
    //numBulto,
    HBL,
    Fecha,
    Consignatario,
    PasaporteC,
    cIdentidad,
    DireccionDelCon,
    Telefono,
    Embarcador,
    Remitente,
    PasaporteR,
    Direccion,
    Volumen,
    Valor,
    ) {
  return {
    tipoDeMercancia,
    //descripcion,
    cant,
    /* numEtiq, // AUTOGENERADO */
    PesoUno,  //(lb.)
    valorDeclarado, //(Factura)
    //numBulto,
    
    /* Manifiesto,
    Guía,
    Clasificación, */
    HBL,
    Fecha,
    /* Entrada, */
    
    Consignatario,
    PasaporteC,
    cIdentidad,
    DireccionDelCon,
    Telefono,
    
    Embarcador,
    Remitente,
    PasaporteR,
    Direccion,
    
    Volumen,
    Valor,
  };
}
/**
 
tipoDeMercancia={}&
    descripcion={}&
    cant={}&
    numEtiq={}&
    PesoUno={}&
    valorDeclarado={}&
    //numBulto={}&
    HBL={}&
    Fecha={}&
    Entrada={}& 
    Consignatario={}&
    PasaporteC={}&
    cIdentidad={}&
    DireccionDelCon={}&
    Telefono={}&
    Embarcador={}&
    Remitente={}&
    PasaporteR={}&
    Direccion={}&
    Volumen={}&
    Valor={}
 */


function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// Since 2020 all major browsers ensure sort stability with Array.prototype.sort().
// stableSort() brings sort stability to non-modern browsers (notably IE11). If you
// only support modern browsers you can replace stableSort(exampleArray, exampleComparator)
// with exampleArray.slice().sort(exampleComparator)
function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

export default function EnhancedTable({allHBL, setAllHBL}) {
  const [rows,setRow] = useState([
    
  ]);
  const [open, setOpen] = React.useState(false);
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.HBL);
      setSelected(newSelected);
      setAllHBL(rows)
      return;
    }
    setSelected([]);
  };

  const handleClick = (event,row, HBL) => {
    const selectedIndex = selected.indexOf(HBL);
    console.log(selectedIndex)
    console.log("ssss",allHBL)
    let newSelected = [];
    
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, HBL);
      setAllHBL(prevState => [...prevState, row])
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1)); //slice es para obtener valores segun su posicion
      setAllHBL(prevHBLList => prevHBLList.filter(item => item.HBL !== HBL));

    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
      setAllHBL(prevHBLList => prevHBLList.filter(item => item.HBL !== HBL));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
     
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  return (
    <Box sx={{ width: '100%' }}>
      
      <Paper sx={{ width: '100%', mb: 2 }}>
        <EnhancedTableToolbar
          setOpen={setOpen}
          rows={rows}
         numSelected={selected.length} />
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.HBL);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event,row, row.HBL)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={index}
                      selected={isItemSelected}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          color="primary"
                          checked={isItemSelected}
                          inputProps={{
                            'aria-labelledby': labelId,
                          }}
                        />
                      </TableCell>
                      
          

                      <TableCell align="center">{row.tipoDeMercancia}</TableCell>
                      {/* <TableCell align="center">{row.descripcion}</TableCell> */}<TableCell align="center">{row.cant}</TableCell>
                     {/*  <TableCell align="center">{row.numEtiq}</TableCell> */}
                      <TableCell align="center">{row.PesoUno}</TableCell>
                      
                      
                      
                      <TableCell align="center">{row.valorDeclarado}</TableCell>
                      
                      {/* <TableCell align="center">{row.numBulto}</TableCell>  
                       */}
                      
                      <TableCell align="center">{row.HBL}</TableCell>
                      <TableCell align="center">{row.Fecha}</TableCell>
                      
                      <TableCell align="center">{row.Consignatario}</TableCell>
                      <TableCell align="center">{row.PasaporteC}</TableCell>
                      <TableCell align="center">{row.cIdentidad}</TableCell>
                      <TableCell align="center">{row.DireccionDelCon}</TableCell>
                      <TableCell align="center">{row.Telefono}</TableCell>
                      
                      <TableCell align="center">{row.Embarcador}</TableCell>
                      <TableCell align="center">{row.Remitente}</TableCell>
                      
                      <TableCell align="center">{row.PasaporteR}</TableCell>
                      <TableCell align="center">{row.Direccion}</TableCell>
                      
                      <TableCell align="center">{row.Volumen}</TableCell>
                      <TableCell align="center">{row.Valor}</TableCell>
                      <TableCell align="center">
                        <Button onClick={()=>{
                      let param = new URLSearchParams(row).toString();
                          console.log(param)
                          window.open("https://hbl-model.vercel.app/?"+param)}} >
                          IMPRIMIR
                        </Button>  
                      </TableCell>
                      
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (dense ? 33 : 53) * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Dense padding"
      />
      <FormDialog
        open={open} 
        setOpen={setOpen}
        setRow={setRow}
        />
    </Box>
  );
}
                      {/* <TableCell align="center">{row.Entrada}</TableCell> */}

{/* <TableCell align="center">{row.valorDeclaradoac}</TableCell>
                      <TableCell align="center">{row.ValorDoc}</TableCell>
                      <TableCell align="center">{row.Sello}</TableCell> */}

                      {/* <TableCell align="center">{row.Cantidad}</TableCell> */}
                      {/* <TableCell align="center">{row.PesoDos}</TableCell> */}

                      {/* <TableCell align="center">{row.Manifiesto}</TableCell>
                      
                      
                      <TableCell align="center">{row.Guía}</TableCell>
                      <TableCell align="center">{row.Clasificación}</TableCell> */}

                      {/*<TableCell align="center">{row.Ancho}</TableCell> */}
                      {/* <TableCell align="center">{row.Altura}</TableCell> */}
                      {/* <TableCell align="center">{row.PesoVol}</TableCell> */}