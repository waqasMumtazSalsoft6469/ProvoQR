import React, { useEffect, useState } from 'react';
import {ImageBackground, View, Image, ScrollView} from 'react-native';
import {backgrounds, icons} from '../../assets/images';
import styles from './styles';
import RubikLight from '../../components/Text/RubikLight';
import MainInput from '../../components/Input/MainInput';
import {vh, vw} from '../../Utils/Units';
import OutfitLightText from '../../components/Text/OutfitLightText';
import {sampleimage} from '../../assets/images/index';
import { useDispatch } from 'react-redux';
import { getAboutUs } from '../../Redux/Actions/otherActions';
import { imageUrl } from '../../Api/configs';

const AboutUs=()=> {
  const [data,setData]=useState()
  const dispatch=useDispatch()

  const getData=()=>{
    dispatch(getAboutUs()).then(res=>{
      setData(res?.about)
    })
  }

  useEffect(()=>{
    getData()
  },[])

    return (
      <View style={styles.container}>
        <ImageBackground
          source={backgrounds.grayBackground}
          style={styles.imgbg}
          resizeMode="cover"
          imageStyle={{width: 100 * vw, height: 100 * vh}}>
          <ScrollView style={styles.scroll}>
            <View
              style={{
                alignItems: 'center',
                marginTop: 5 * vh,
                paddingHorizontal: 4 * vw,
              }}>
              <Image source={{uri:imageUrl+data?.image}} style={styles.image} />
              <OutfitLightText style={styles.about}>
               {data?.description}
              </OutfitLightText>
            </View>
          </ScrollView>
        </ImageBackground>
      </View>
    );
  }
export default AboutUs;
