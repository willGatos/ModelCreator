import {
    Document,
    Page,
    Text,
    View,
    StyleSheet,
    PDFViewer,
    Image,
  } from "@react-pdf/renderer";
  
  // Create styles
  const styles = StyleSheet.create({
    page: {
      flexDirection: 'row',
      backgroundColor: 'white',
      justifyContent:"center",
      alignContent:"center",
      alignItems:"center",
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1
    },
    viewer: {
      width: window.innerWidth, //the pdf viewer will take up all of the width and height
      height: window.innerHeight,
    },
    rightText:{
      textAlign: "right",
    },
    container: {
      display: "flex",
      flexWrap: "wrap",
      flexDirection:"row",
      height: "800px",
      width: "90%",
    },
    smallPadding:{
      padding:"5px"
    },
    mediumPadding:{
      padding:"10px"
    },
    cell: {
      width:"40vw",
      flexBasis: "40vw",
      border: "1px solid #000",
      padding: "1rem",
    },
    cellBig: {
      width:"60%",
      flexBasis: "70%",
      border: "1px solid #000",
      padding: "1rem",
      borderRight:"0px",
    },
    cellSmal: {
      width:"40%",
      flexBasis: "30%",
      border: "1px solid #000",
      borderLeft:"0px",
      padding: "1rem",
    },
    fullCell: {
      width:"100%",
      flexBasis: "100%",
      border: "1px solid #000",
      padding: "1rem",
    },
    imageSize:{
      width:"auto",
      maxWidth:"100%",
      height: "auto",
      maxHeight:"100%",
    },
    centerAll:{
      display: "flex",
      justifyContent: "center",
      alignItems:"center",
      textAlign:"center",
      alignContent: "center"
    },
    fontHeader:{
      fontSize: "26px"
    },
    fontSmaller:{
      fontSize: "24px"
    }
  });
  
  // Create Document Component
  function BasicDocument({allHBL}) {
    return (
      <PDFViewer style={styles.viewer}>
        {/* Start of the document*/}
        <Document>
          {allHBL.map(e=>(
          <Page size="A4" style={styles.page}>
          <View style={styles.container}>
            <View style={[styles.cell, styles.fullCell, styles.smallPadding, styles.centerAll]}>
              <Text>ESPIRAL</Text>
            </View>
            <View style={[styles.fullCell, styles.smallPadding, styles.centerAll]}>
              
              <Image src={"https://barcodeapi.org/api/"+ e.HBL} style={styles.imageSize}/>{/* Código de Barras */}
              
            </View>

            <View style={[styles.cellBig, styles.mediumPadding, styles.fontSmaller]}>
              <Text style={[styles.fontHeader]}>
                Remitente:
              </Text>
              <Text>
              {e.Remitente}
              </Text>
              
              <Text>{e.Consignatario}</Text>
              <Text style={[styles.fontHeader]}>
                Destinatario:
              </Text>
              <Text>{e.Consignatario}</Text>
              <Text>Dirección:</Text>
              <Text>{e.DireccionDelCon}</Text>
              <Text>CI: {e.cIdentidad}</Text>
              <Text>{e.Telefono}</Text>
              
            </View>
            <View style={[styles.cellSmal, styles.mediumPadding]}>
              
            <Image
              style={styles.imageSize}
              src={`https://api.qrserver.com/v1/create-qr-code/?size=800x800&data=HBL-${e.HBL}-${e.Consignatario}-${e.DireccionDelCon}-${e.cIdentidad}-${e.Telefono}-${e.Remitente}-${e.Direccion}`} />{/* Código de Barras */}
            </View>

            <View style={[styles.fullCell, styles.mediumPadding]}>
              <Text style={styles.fontHeader}>Contenido:</Text>
              <Text style={styles.fontHeader}>{e.tipoDeMercancia}</Text>
              <Text style={styles.fontHeader}>
               Peso:
              </Text>
              <Text style={styles.fontHeader}>
               {e.PesoUno}Kg
              </Text>
            </View>
            
          </View>
          </Page>
          ))}
        </Document>
      </PDFViewer>
    );
  }
  export default BasicDocument;