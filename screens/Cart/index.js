import React from 'react';
import {View,Text,TouchableOpacity,StyleSheet} from 'react-native'
import {connect} from 'react-redux'
class Cart extends React.Component{

    constructor(props){
        super(props)
    }

    render(){
        const { productStore,buyProduct } = this.props ;
        const cartProducts = productStore.products.filter((single)=>single.count > 0)
        return(
            <View style={styles.container}>
                <TouchableOpacity 
                    onPress={()=>this.props.navigation.goBack()}
                    style={styles.header}>
                    <Text style={{ alignSelf: 'center', color: '#FFFFFF' }}>
                        {`Back`}
                    </Text>
                </TouchableOpacity>
                {cartProducts.map((single,index)=>(
                    <TouchableOpacity 
                        onPress={()=>buyProduct(index)} 
                        style={styles.singleProduct} 
                        key={index}>
                        <Text style={{alignSelf:'center',color:'#FFFFFF'}}>{`${single.name} selected ${single.count}`}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#F2E8DF',
        flex:1,
        paddingHorizontal:24,
        paddingVertical:50
    },
    singleProduct:{
        height:50,
        backgroundColor:'#143F59',
        marginBottom:20,
        justifyContent:'center',
        borderWidth:1,
        borderColor:'#A69992'
    },
    header:{
        height:50,
        marginBottom:30,
        backgroundColor:'#275D73',
        justifyContent:'flex-start',
        borderWidth:1,
        borderColor:'#A69992',
        flexDirection:'row',
        paddingLeft:10
    }
});

const mapStateToProps = state =>{
    return{
        productStore:state.productStore
    }   
}

export default connect(mapStateToProps,null) (Cart);