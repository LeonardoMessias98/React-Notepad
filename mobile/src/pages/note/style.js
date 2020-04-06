import { StyleSheet } from 'react-native';


export default StyleSheet.create({
  header:{
    display:"flex",
    flexDirection:"row",
    paddingTop:30,
    justifyContent:"space-around",
    height:80,
    width: "100%",
    backgroundColor:"#e02041",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
  },

  textHeader:{
    fontWeight:"bold",
    fontFamily:"Roboto",
    color:"white",
    fontSize:28,
  },

  container:{
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: 15,
  },

  divIcons:{
    alignSelf:"flex-end",
    borderColor:"#e02041",
    borderRadius:20,
    width:80,
    height:80,
    alignItems:"center",
    backgroundColor:"#fffffff0",
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-evenly"
  },

  iconRed:{
    fontSize:32,
    color:"#e02041"
  },

  iconWhite:{
    fontSize:32,
    color:"white"
  },

  textUser:{
    fontSize:24,
    width:400,
    top: 20,
    paddingLeft: 5
  },
  
  titleUser:{
    fontSize:24,
    fontWeight:"600",    
    paddingLeft:5,
    paddingBottom:10,
    borderBottomColor: "#ccc",
    borderBottomWidth: StyleSheet.hairlineWidth
  },

  modalOut:{
    flex:1,
  }
});