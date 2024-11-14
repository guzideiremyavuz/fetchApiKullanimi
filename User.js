import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export const User = ({data}) => {
  return (
    <TouchableOpacity     
      onPress={()=>{
      alert(data.id);
    }}>
      <View style= {{
      width: '100%' ,
      height: 70,
      padding: 5 ,
      margin: 3 ,
      flexDirection: 'row'
         }}>

        <View style= {{flex: 2, justifyContent: 'center', alignItems: 'center' }}>
            <Image style={{
              width:60,
               height:60,
               borderRadius:30,
               borderWidth:2,
               borderColor: "black"}} source ={{uri:data.image}}/>
        </View>

        <View style= {{flex: 5 , justifyContent: 'center'}}>
          <Text style={{fontWeight:"bold", fontSize: 20}}>
            {data.firstName}  {data.lastName}
          </Text>
          <Text style={{color:"gray", fontSize: 15}}>
            {data.email}
          </Text>
        </View>

        <View style= {{flex: 1, alignItems:"center", justifyContent:"center" }}>
          <View style={{
            width: 30,
            height: 30,
            borderRadius: 20,
            backgroundColor: "#BC85FF",
            justifyContent:"center",
            alignContent:"center"

          }}>
            <Text style={{fontWeight:"bold" , color:"white"}}>{data.age}</Text>
          </View>
        </View>      
    </View>
    </TouchableOpacity>
  )
}