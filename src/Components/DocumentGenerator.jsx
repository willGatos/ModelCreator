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
      
      width: "80%",
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
      width:"70%",
      flexBasis: "70%",
      border: "1px solid #000",
      padding: "1rem",
      borderRight:"0px",
    },
    cellSmal: {
      width:"30%",
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
      maxWidth:"50%",
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
      fontSize: "12px"
    },
    fontSmaller:{
      fontSize: "15px"
    }
  });
  
  // Create Document Component
  function BasicDocument() {
    return (
      <PDFViewer style={styles.viewer}>
        {/* Start of the document*/}
        <Document>
          {/*render a single page*/}
          <Page size="A4" style={styles.page}>
          <View style={styles.container}>
            <View style={[styles.cell, styles.smallPadding]}>
              <Text>CubaMax - EEUU</Text>
            </View>
            <View style={[styles.cell, styles.smallPadding]}>
              <Text>Cubanacan</Text>
            </View>
            <View style={[styles.fullCell, styles.smallPadding, styles.centerAll]}>
              
              <Image src={"https://barcodeapi.org/api/515154sadasd"} style={styles.imageSize}/>{/* Código de Barras */}
              
            </View>
            <View style={[styles.fullCell, styles.smallPadding]}>
              {<Text style={styles.rightText}>1s</Text>}
            </View>

            <View style={[styles.cellBig, styles.mediumPadding, styles.fontSmaller]}>
              <Text style={[styles.fontHeader]}>
                Remitente:
              </Text>
              <Text>JULIO PUERTAS, FL, MIAMI</Text>
              <Text style={[styles.fontHeader]}>
                Destinatario:
              </Text>
              
              <Text>Dirección</Text>
              
              <Text>Provincia / Municipio</Text>
              <Text>Carnet de Identidad</Text>
              <Text>TELEFONO</Text>
              <Text>CANTINFLAS VILLALOBOS</Text>
            </View>
            <View style={[styles.cellSmal, styles.mediumPadding]}>
              
            <Image src={"https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Exampled"} style={styles.imageSize}/>{/* Código de Barras */}
            </View>

            <View style={[styles.fullCell, styles.mediumPadding]}>
              <Text>Contenido:</Text>
              <Text>Miscelania</Text>
            </View>
            <View style={[styles.cell, styles.mediumPadding]}>
              <Text>
                41,7Lb
              </Text>
            </View>
            <View style={[styles.cell, styles.mediumPadding]}>
            <Text>CODEBAr</Text>
            </View>
          </View>
          </Page>

        </Document>
      </PDFViewer>
    );
  }
  export default BasicDocument;

  /**
   * <Image src="http://api.qrserver.com/v1/create-qr-code/?data=WILLIAMMMM  Marrero
          Masferrer
          - Centro Habana 
          &size=100x100"/>
   */