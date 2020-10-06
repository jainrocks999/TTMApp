import React, {Component} from 'react';
import {
  View,
  Image,
  TextInput,
  FlatList,
  Text,
  ScrollView,
  LayoutAnimation,
  TouchableOpacity,
} from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/Feather';
import {connect} from 'react-redux';
import storage from '../../config/storage';
import Loader from '../../screens/Util/loading';

import AsyncStorage from '@react-native-community/async-storage';
import style from './style';

let initialCount = 0;
let finalCount = 0;

class RegisteredDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      productData: [],
      spinner: true,
      fullList: [],
      RegisteredDetails: [],
      isFirstTime: true,
      Btn: '',
    };

    this.ApiCall();
  }

  ApiCall = async () => {
    let token = '';
    token = await AsyncStorage.getItem(storage.Token);

    const BtnName = this.props.navigation.getParam('btnValue');
    this.setState({
      Btn: BtnName,
    });

    initialCount = 0;
    finalCount = 0;
    let buttonValue = 'Lost';
    var myHeaders = new Headers();
    myHeaders.append('Authorization', 'Bearer ' + token);

    var raw = '';

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };

    fetch(
      'http://api.tajtrademark.in/api/NewTMApi/TMAPI?UserId=122&ASA&Ag=' +
        BtnName +
        '&PropName&AppStatusAll&AppStatusProposed&Prop_Id&ActionHead&As&search=',

      requestOptions,
    )
      .then(response => response.text())
      .then(res => {
        let Data = JSON.parse(res);
        let Apidata = Data.data;

        console.log('Datatatat : ', Data);
        let sectionData = [];

        if (Data.data && Data.data.length > 0) {
          let allProducts = Data.data;
          if (allProducts.length > 10) {
            for (let i = 0; i < 10; i++) {
              sectionData.push(allProducts[i]);
            }
          } else {
            for (let j = 0; j < allProducts.length; j++) {
              sectionData.push(allProducts[j]);
            }
          }
          initialCount = 1;
          finalCount = sectionData.length;
        }

        this.setState({
          spinner: false,
          productData: sectionData,
          fullList: Data.data ? Data.data : [],
        });
      })
      .catch(error => console.log('error', error));

    this.setState({});
  };

  onNext = () => {
    const {fullList, productData} = this.state;
    let sectionData = [];
    let index = null;
    for (let i = 0; i < fullList.length; i++) {
      if (
        productData[productData.length - 1].App_Status &&
        fullList[i].App_Status
      ) {
        if (
          productData[productData.length - 1].App_Status ==
          fullList[i].App_Status
        ) {
          index = i;
        }
      }
    }
    if (index) {
      initialCount =
        finalCount + 1 > fullList.length ? fullList.length : finalCount + 1;
      finalCount =
        initialCount + 5 > fullList.length ? fullList.length : initialCount + 5;
      for (let j = index; j < index + 6; j++) {
        sectionData.push(fullList[j]);
      }
    }
    if (sectionData.length > 0) {
      this.setState({productData: sectionData});
    }
  };

  onPrevious = () => {
    const {fullList, productData} = this.state;
    let sectionData = [];
    let index = null;
    for (let i = 0; i < fullList.length; i++) {
      if (productData[0].App_Status && fullList[i].App_Status) {
        if (productData[0].App_Status == fullList[i].App_Status) {
          index = i;
        }
      }
    }
    if (index) {
      if (index <= 5) {
        initialCount = 1;
        finalCount = index + 6 > fullList.length ? fullList.length : index + 1;
        for (let k = 0; k < index + 1; k++) {
          sectionData.push(fullList[k]);
        }
        sectionData.reverse();
      } else {
        initialCount =
          index + 2 > fullList.length ? fullList.length : index + 2;
        finalCount = index + 6 > fullList.length ? fullList.length : index + 6;
        for (let j = index; j > index - 6; j--) {
          sectionData.push(fullList[j]);
        }
      }
    }
    console.log('sectionData... previous', sectionData);
    if (sectionData.length > 0) {
      this.setState({productData: sectionData.reverse()});
    }
  };

  renderItemView = item => {
    if (this.state.visible == true) {
      if (this.state.itemValue == item.Rowno) {
        return (
          <View
            style={styles.mainView}>
            <View
              style={styles.same}>
              <Text
                style={styles.same1}>
                Status
              </Text>
              <Text
                style={styles.same2}>
                {item.App_Status}
              </Text>
            </View>
            <View
              style={styles.same}>
              <Text
                style={styles.same1}>
                App. Date
              </Text>
              <Text
                style={styles.same2}>
                {item.App_Date_New}
              </Text>
            </View>
            <View
              style={styles.same}>
              <Text
                style={styles.same1}>
                TM Type
              </Text>
              <Text
                style={styles.same2}>
                {item.Tm_Type}
              </Text>
            </View>
            <View
              style={styles.same}>
              <Text
                style={styles.same1}>
                Valid Upto
              </Text>
              <Text
                style={styles.same2}>
                {item.Valid_upto}
              </Text>
            </View>
            <View
              style={styles.same}>
              <Text
                style={styles.same1}>
                APPro Office
              </Text>
              <Text
                style={styles.same2}>
                {item.Appropriate_Office}
              </Text>
            </View>
            <View
              style={styles.same}>
              <Text
                style={styles.same1}>
                Class
              </Text>
              <Text
                style={styles.same2}>
                {item.Class_Class}
              </Text>
            </View>
            <View
              style={styles.button}>
              <TouchableOpacity
                style={styles.touch}>
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate('MyTradeDetailViewPage')
                  }>
                  <Text style={{color: 'white', fontSize: 14}}>View More</Text>
                </TouchableOpacity>
              </TouchableOpacity>
            </View>
          </View>
        );
      }
    }
  };
  getVisible(item) {
    if (this.state.visible == false) {
      this.setState({
        visible: true,
        itemValue: item.Rowno,
      });
    } else {
      this.setState({
        visible: false,
        itemValue: item.Rowno,
      });
    }
  }

  updateLayout = index => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    const array = [...this.state.listDataSource];
    array[index]['isExpanded'] = !array[index]['isExpanded'];
    this.setState(() => {
      return {
        listDataSource: array,
      };
    });
  };

  render() {
    const {productData, fullList} = this.state;

    const {RegisteredDetails, isFetching} = this.props;

    const BtnName = this.props.navigation.getParam('btnValue');

    return (
      <View style={{flex: 1}}>
       
          {isFetching ? <Loader /> : null}
          <ScrollView>
          <View
            style={styles.main}>
            <View
              style={styles.main1}>
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate('DashboardScreen');
                }}>
                <Image
                  source={require('../../assets/icons/arrow.png')}
                  style={styles.arrow}
                />
              </TouchableOpacity>

              <View>
                <Text
                  style={styles.btn}>
                  {this.state.Btn}
                </Text>
              </View>
            </View>
            <View
              style={styles.btnImage}>
              <Image
                source={require('../../assets/icons/bell_one.png')}
                style={styles.bell}
              />
              <View style={{alignItems: 'center'}}>
                <Image
                  source={require('../../assets/icons/profile.png')}
                  style={{width: 31, height: 31}}
                />
              </View>
            </View>
          </View>
          <View
            style={style.first}>
            <View
              style={styles.second}>
              <View style={{}}>
                <Icon1 name="search" size={25} style={{marginLeft: 5}} />
              </View>
              <View
                style={styles.inputView}>
                <TextInput
                  style={styles.input}
                  placeholder={'Tm search ...'}
                />
              </View>
            </View>

            <View
              style={styles.filter}>
              <View style={{alignItems: 'center', marginLeft: 10}}>
                <Icon name="filter" size={35} />
              </View>
            </View>
          </View>

          {productData.length > 0 ? (
            <FlatList
              data={productData}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({item}) => (
                <View style={{flex: 1}}>
                  <TouchableOpacity onPress={() => this.getVisible(item)}>
                    <View
                      style={styles.card}>
                      <View>
                        <View
                          style={styles.cardView}>
                          <Text
                            style={styles.app}>
                            {'App No :'}
                          </Text>
                          <Text
                            style={styles.item}>
                            {item.App_No}
                          </Text>
                        </View>
                        <View
                          style={styles.trade}>
                          <Text
                            style={styles.text}>
                            {'Trademark :'}
                          </Text>
                          <Text
                            style={styles.mark}>
                            {item.Trade_Mark}
                          </Text>
                        </View>
                      </View>
                      <Image
                        style={styles.round}
                        source={require('../../assets/icons/arrow_down.png')}
                      />
                    </View>
                  </TouchableOpacity>

                  {this.renderItemView(item)}
                </View>
              )}
            />
          ) : (
            <View />
          )}

          {productData.length > 0 ? (
            <View>
              <View
                style={styles.product}>
              </View>
              <View
                style={styles.product1}>
                {productData &&
                fullList &&
                productData[0] &&
                fullList[0] == fullList[0] ? (
                  <View style={{flexDirection: 'row'}}>
                    <Icon
                      name="chevron-left"
                      onPress={() => this.onPrevious()}
                      size={12}
                      style={{marginLeft: 10, marginTop: 5}}
                    />
                    <Text
                      onPress={() => this.onPrevious()}
                      style={{marginLeft: 10}}>
                      PREV
                    </Text>
                  </View>
                ) : null}
                 <Text style={{marginLeft: 10}}>
                  {`${initialCount}- ${finalCount} of ${fullList.length}`}{' '}
                </Text>
                {productData &&
                fullList &&
                productData[productData.length - 1] &&
                fullList[fullList.length - 1] ==
                  fullList[fullList.length - 1] ? (
                  <View style={{flexDirection: 'row'}}>
                    <Text
                      onPress={() => this.onNext()}
                      style={{marginLeft: 10}}>
                      NEXT{' '}
                    </Text>
                    <Icon
                      name="chevron-right"
                      size={12}
                      onPress={() => this.onNext()}
                      style={{marginLeft: 10, marginTop: 5}}
                    />
                  </View>
                ) : null}
              </View>
            </View>
          ) : null}
        </ScrollView>
      </View>
    );
  }
}
const mapStateToProps = state => {
  console.log('Details' + JSON.stringify(state.isFetching));
  return {
    isFetching: state.isFetching,
    RegisteredDetails: state.RegisteredDetails,
  };
};
export default connect(mapStateToProps)(RegisteredDetails);

