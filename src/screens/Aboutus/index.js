import React from 'react';
import {
  View,
  Text,
  Image,
  StatusBar,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import styles from './style';
import { connect } from 'react-redux';
import Loader from '../../config/loader';

class AboutPage extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    const { isFetching } = this.props
    return (
      <View style={styles.container}>
        {isFetching ? <Loader /> : null}
        <View
          style={styles.menu}>
          <View
            style={styles.menu2}>
            <TouchableOpacity
              style={{ width: 25, height: 20 }}
              onPress={() => {
                this.props.navigation.toggleDrawer();
              }}>
              <Image
                source={require('../../assets/icons/menu.png')}
                style={{ width: '99%', height: '99%' }}
              />
            </TouchableOpacity>

            <Text
              style={styles.title}>
              {'About Us'}
            </Text>
          </View>
          <View
            style={styles.bell}>
            <Image
              source={require('../../assets/icons/bell_one.png')}
              style={styles.bellIcon}
            />
            <TouchableOpacity
              style={{ alignItems: 'center' }}
              onPress={() => {
                this.props.navigation.navigate('ProfileStack');
              }}>
              <Image
                source={require('../../assets/icons/profile.png')}
                style={{ width: 31, height: 31 }}
              />
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView style={styles.scroll}>
          <View style={styles.firstView}>
            <Text style={styles.title}>The Beginning</Text>
            <Text style={styles.second}>
              In a new and changing world, corporate are looking to attain leadership.TAJ TRADE MARK is here to help you fulfill that mission. A mission in which TAJ TRADE MARK can redefine and set the standards as a provider of INTELLECTUAL PROPERTY RIGHTS as TRADE MARK, COPYRIGHT, BRAND, LOGO, TRADE NAME, WEB NAME, SLOGAN and DESIGN REGISTRATIONS & LITIGATIONS there of since the year 1970 in INDIA. knowledge and solutions set in the framework in Intellectual Property Law. Solutions that adhere to global standards. For achievement of leadership

            
              The Firm enjoys the services of some of the Top IP Professionals in the Country. The list of Firm's members includes highly experienced IP lawyers, Patent Attorneys, Patent agents and Patent Consultants from all technical fields including some of top ex-officials of Indian Patent Office, IP professionals exclusively handling the International and National Phase work under PCT, as well as Copyright and Design Consultants.
              TAJ TRADE MARK has grown over the years on the principle of identification with Clients' interests, supported by high standards of professional proficiency. The firm remains committed to providing quality legal services with a client centered and result-oriented approach to the practice.
              TAJ TRADE MARK maintains a full-time team of qualified personnel. This group of dynamic professionals of proven merit, equipped with contemporary information systems, is geared up and ready to serve you.
              Our Core Strengths
              Our strength lies in strong entrepreneurial skills, experience of Intellectual Property Law, business process knowledge and operational skills. All of which can work for you and your goals. TAJ TRADE MARK, reached to mass via ordinary people and business family thus widened its ambit. The TAJ TRADE MARK on the firmament of today’s registration world is a twinkling star paving way to prevailing potential segment, which is giving direction to business family on the road of development. We are pleased to introduce ourselves as a team of devoted professionals, specializing in the fields of services mentioned above. Agra based TAJ TRADE MARK offers you one-stop-shop for registration services in India. Our organization believes in maintaining prompt company-client contact and setting the highest standards of professional services in all our dealings.
              
              
              
              
              
              
              </Text>
              <View style={styles.top}>
              <Text style={styles.title}>Taj Trade Mark Today</Text>
              <Text style={styles.second}>
              In a new and changing world, corporate are looking to attain leadership.TAJ TRADE MARK is here to help you fulfill that mission. A mission in which TAJ TRADE MARK can redefine and set the standards as a provider of INTELLECTUAL PROPERTY RIGHTS as TRADE MARK, COPYRIGHT, BRAND, LOGO, TRADE NAME, WEB NAME, SLOGAN and DESIGN REGISTRATIONS & LITIGATIONS there of since the year 1970 in INDIA. knowledge and solutions set in the framework in Intellectual Property Law. Solutions that adhere to global standards. For achievement of leadership
              The Firm enjoys the services of some of the Top IP Professionals in the Country. The list of Firm's members includes highly experienced IP lawyers, Patent Attorneys, Patent agents and Patent Consultants from all technical fields including some of top ex-officials of Indian Patent Office, IP professionals exclusively handling the International and National Phase work under PCT, as well as Copyright and Design Consultants.
              TAJ TRADE MARK has grown over the years on the principle of identification with Clients' interests, supported by high standards of professional proficiency. The firm remains committed to providing quality legal services with a client centered and result-oriented approach to the practice.
              TAJ TRADE MARK maintains a full-time team of qualified personnel. This group of dynamic professionals of proven merit, equipped with contemporary information systems, is geared up and ready to serve you.
              Our Core Strengths
              Our strength lies in strong entrepreneurial skills, experience of Intellectual Property Law, business process knowledge and operational skills. All of which can work for you and your goals. TAJ TRADE MARK, reached to mass via ordinary people and business family thus widened its ambit. The TAJ TRADE MARK on the firmament of today’s registration world is a twinkling star paving way to prevailing potential segment, which is giving direction to business family on the road of development. We are pleased to introduce ourselves as a team of devoted professionals, specializing in the fields of services mentioned above. Agra based TAJ TRADE MARK offers you one-stop-shop for registration services in India. Our organization believes in maintaining prompt company-client contact and setting the highest standards of professional services in all our dealings.
              </Text>
                        </View>
                        </View>
        </ScrollView>
        <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      </View>
    );
  }
}
const mapStateToProps = state => {
  return {
    isFetching: state.isFetching,

  };
};
export default connect(mapStateToProps)(AboutPage);