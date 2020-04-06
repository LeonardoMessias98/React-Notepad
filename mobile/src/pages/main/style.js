import { StyleSheet } from 'react-native';


export default StyleSheet.create({
  header:{
    display:"flex",
    flexDirection:"row",
    paddingTop:30,
    justifyContent:"center",
    height:80,
    width: "100%",
    backgroundColor:"#e02041",
    
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
  },

  flatlist:{
    backgroundColor:"#e3e3e3"
  },

  textHeader:{
    fontWeight:"bold",
    fontFamily:"Roboto",
    color:"white",
    fontSize:28,
  },

  container:{
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 10,
  },

  content:{
    overflow:"hidden",
    display:"flex",
    flexDirection:"row",
    alignItems:"center",
    justifyContent: "space-evenly",
    width:"100%",
    height:80,
    borderRadius:20,
    backgroundColor: "white"
  },

  texto:{
    fontFamily:"Roboto",
    fontWeight:"900",
    fontSize:30
  },

  img:{
    left:-160,
    width: 30,
    height:40
  },

  edit:{
    fontSize:32,
  },

  newFile:{
    fontWeight:"bold",
    color:"white",
    fontSize:34 
  },

  delete:{
    fontWeight:"bold",
    fontSize:34 
  },
  
  btn:{
    width:"80%",
    height:"100%",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    flexDirection:"row"
  },

  touchableNewFile:{
    left:75,
    width:30,
  }
});