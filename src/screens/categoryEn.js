import React, { Component } from 'react'; 
import { StyleSheet,ScrollView, View, Text, TouchableOpacity,Image, Dimensions } from 'react-native';
import CustomButton from '../components/button'
const {width,height}=Dimensions.get('window')
class En extends Component {
    render() {
        return (
            <ScrollView style={styles.container}>
                <View style={styles.button}>
                <CustomButton goTo='english' lang="Funny"  color="#A7414A" name="Funny"/>
                </View>
                <View style={styles.button}>                      
                <CustomButton goTo='english' lang="Success" color="#A7414A" name="Success"/>
                </View>
                <View style={styles.button}>                      
                <CustomButton goTo='english' lang="Pets" color="#A7414A" name="Pets"/>
                </View>
                <View style={styles.button}>                      
                <CustomButton goTo='english' lang="InspirationalMovieQuotes" color="#A7414A" name="Inspirational Movie Quotes"/>
                </View>
                <View style={styles.button}>
                <CustomButton goTo='english' lang="Love" color="#282726" name="Love"/>
                </View>
                <View style={styles.button}>                      
                <CustomButton goTo='english' lang="InstagramCaptionsforLyrics" color="#282726" name="Instagram Captions for Lyrics"/>
                </View>
                <View style={styles.button}>                      
                <CustomButton goTo='english' lang="Instagram" color="#282726" name="Instagram Captions for Winter & Christmas"/>
                </View>
                <View style={styles.button}>                      
                <CustomButton goTo='english' lang="SassyInstagramCaptions" color="#282726" name="Sassy Instagram Captions"/>
                </View>
                <View style={styles.button}>                      
                <CustomButton goTo='english' lang="BestFriend" color="#6A8A82" name="Best Friend"/>
                </View>
                <View style={styles.button}>                      
                <CustomButton goTo='english' lang="Lit" color="#6A8A82" name="Lit"/>
                </View>
                <View style={styles.button}>                      
                <CustomButton goTo='english' lang="InstagramCaptionsforCouples" color="#6A8A82" name="Instagram Captions for Couples"/>
                </View>
                <View style={styles.button}>                      
                <CustomButton goTo='english' lang="MeandMyself" color="#A37C27" name="Me and Myself"/>
                </View>
                <View style={styles.button}>                      
                <CustomButton goTo='english' lang="Travel" color="#A37C27" name="Travel"/>
                </View>
                <View style={styles.button}>                      
                <CustomButton goTo='english' lang="TravelInstagramCaptions" color="#A37C27" name="Travel Instagram Captions"/>
                </View>
                <View style={styles.button}>                      
                <CustomButton goTo='english' lang="Flirty" color="#563838" name="Flirty"/>
                </View>
                <View style={styles.button}>                      
                <CustomButton goTo='english' lang="Food" color="#563838" name="Food"/>
                </View>
                <View style={styles.button}>                      
                <CustomButton goTo='english' lang="EntrepreneurInstagramQuotes" color="#563838" name="Entrepreneur Instagram Quotes"/>
                </View>
                <View style={styles.button}>                      
                <CustomButton goTo='english' lang="Fitness" color="#563838" name="Fitness Quotes"/>
                </View>
                <View>
                    <Text></Text>
                    <Text></Text>
                    <Text></Text>

                </View>
            </ScrollView>

        )
    }
}

const styles = StyleSheet.create({
    container:{
        padding:width*0.06,
        flexDirection:"column",
        flex:1,
        backgroundColor:"#132226"
        
    },
    button:{
        marginTop:height*0.02,
        
        
    },
    
});

export default En