import { StyleSheet } from 'react-native';


export default StyleSheet.create({
  header:{
    display:"flex",
    flexDirection:"row",
    paddingTop:30,
    paddingHorizontal:15,
    justifyContent:"space-between",
    height:80,
    width: "100%",
    backgroundColor:"white",
    shadowColor: "black",
  },
  textHeader:{
    fontWeight:"bold",
    fontSize:22,
  },
  container:{
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: 15,
  },
  content:{
    paddingTop:30,
    paddingHorizontal:15,
    overflow:"hidden",
    display:"flex",
    flexDirection:"row",
    justifyContent: "space-between",
    width:"100%",
    height:100,
    backgroundColor: "white"
  },
  texto:{
    left:"35%",
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
  close:{
    fontWeight:"bold",
    fontSize:34,
  },
  btn:{
    display:"flex",
    flexDirection:"row"
  }
});