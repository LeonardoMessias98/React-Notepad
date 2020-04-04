import { StyleSheet } from 'react-native';


export default StyleSheet.create({
  header:{
    display:"flex",
    flexDirection:"row",
    padding:15,
    justifyContent:"space-between",
    height:80,
    width: "100%",
    backgroundColor:"white",
    shadowColor: "black",
  },
  textHeader:{
    top:15,
    fontWeight:"bold",
    fontSize:22,
  },
  container:{
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: 15,
  },
  divIcons:{
    width:90,
    display:"flex",
    flexDirection:"row",
    top:15,
    justifyContent:"space-around"
  },
  cornerIcon:{
    fontSize:32
  },
  saveIcon:{
    fontSize:32
  },
  textUser:{
    fontSize:30,
    top: 20,
    padding: 5
  },
  titleUser:{
    fontSize:30,
    fontWeight:"bold",    
    padding: 5,
    borderBottomColor: "#ccc",
    borderBottomWidth: StyleSheet.hairlineWidth
  }
});