import React from 'react';
import {View,Text,TouchableOpacity,StyleSheet} from 'react-native'
import { connect } from 'react-redux';
import { buyProduct } from '../../redux/product/productActions';

class Product extends React.Component{

    constructor(props){
        super(props)
    }

    render(){
        const { productStore,buyProduct } = this.props ;
        return(
            <View style={styles.container}>
                <TouchableOpacity 
                    onPress={()=>{this.props.navigation.navigate('Cart')}} 
                    style={styles.header}>
                    <Text style={{alignSelf:'center',color:'#FFFFFF'}}>
                        {`Cart Count:- ${productStore.products.filter((single)=>single.count>0).length}`}
                    </Text>
                </TouchableOpacity>
                {productStore.products.map((single,index)=>(
                    <TouchableOpacity onPress={()=>buyProduct(index)} style={styles.singleProduct} key={index}>
                        <Text style={{alignSelf:'center',color:'#FFFFFF'}}>{single.name}</Text>
                        <Text style={{alignSelf:'center',color:'#FFFFFF'}}>{single.total}</Text>
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
        justifyContent:'center',
        borderWidth:1,
        borderColor:'#A69992'
    }
});

const mapStateToProps = state =>{
    return{
        productStore:state.productStore
    }   
}


const mapDispatchToProps = dispatch =>{
    return{
        buyProduct:(productIndex)=>{
            dispatch(buyProduct(productIndex))
        }
    }
}  


export default connect(mapStateToProps,mapDispatchToProps) (Product);