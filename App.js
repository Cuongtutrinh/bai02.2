import React from 'react';
import { View, Text, StyleSheet, FlatList, SafeAreaView, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

// Dữ liệu đầy đủ như trong ảnh
const DATA = [
  {
    id: '1',
    title: 'Bước 1 Xác định như cầu khách hàng',
    description: 'Vũ Văn Hoàng sắp đến hạn lúc 01/08/2020 9:00',
    type: 'checkmark',
    time: '20/08/2020, 06:00'
  },
  {
    id: '2',
    title: 'Bạn có khách hàng mới!',
    description: 'Chúc mừng bạn, bạn có khách hàng mới. Hãy mau chóng liên lạc ngay.',
    type: 'people',
    time: '20/08/2020, 06:00'
  },
  {
    id: '3',
    title: 'Khách hàng được chia sẻ bị trùng',
    description: 'Rất tiếc, khách hàng được chia sẻ đã tồn tại trên hệ thống. Vui lòng chia sẻ khách hàng khác.',
    type: 'people',
    time: '20/08/2020, 06:00'
  },
  {
    id: '4',
    title: 'Khách hàng được thêm bị trùng',
    description: 'Rất tiếc, khách hàng được thêm đã tồn tại trên hệ thống. Vui lòng thêm khách hàng khác.',
    type: 'people',
    time: '20/08/2020, 06:00'
  },
  {
    id: '5',
    title: 'Công việc sắp đến hạn trong hôm nay',
    description: 'Bạn có 17 công việc sắp đến hạn trong hôm nay',
    type: 'checkmark',
    time: '20/08/2020, 06:00'
  },
  {
    id: '6',
    title: 'Công việc đã quá hạn',
    description: 'Bạn có 17 công việc bị quá hạn. Hãy kiểm tra và lên kế hoạch thực hiện công việc.',
    type: 'checkmark',
    time: '20/08/2020, 06:00'
  }
];

// Component hiển thị icon tùy theo type
const NotificationIcon = ({ type }) => {
  if (type === 'checkmark') {
    return <Icon name="check-circle" size={24} color="#4CAF50" style={styles.icon} />;
  } else if (type === 'people') {
    return <Icon name="people" size={24} color="#2196F3" style={styles.icon} />;
  }
  return null;
};

// Component hiển thị từng item
const NotificationItem = ({ item }) => (
  <View style={styles.itemContainer}>
    <View style={styles.contentContainer}>
      <NotificationIcon type={item.type} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <Text style={styles.time}>{item.time}</Text>
      </View>
    </View>
  </View>
);

// Component chính
const NotificationScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Thông báo</Text>
      </View>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <NotificationItem item={item} />}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
      />
      <View style={styles.bottomNav}>
        <Icon name="home" size={24} color="#666" />
        <Icon name="chat" size={24} color="#666" />
        <View style={styles.addButton}>
          <Icon name="add" size={24} color="#FFF" />
        </View>
        <Icon name="notifications" size={24} color="#2196F3" />
        <Icon name="person" size={24} color="#666" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: StatusBar.currentHeight,
  },
  header: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  headerText: {
    fontSize: 18,
    fontWeight: '500',
  },
  itemContainer: {
    padding: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  icon: {
    marginRight: 12,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 15,
    fontWeight: '500',
    marginBottom: 4,
    color: '#000',
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
    lineHeight: 20,
  },
  time: {
    fontSize: 12,
    color: '#999',
  },
  bottomNav: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
    backgroundColor: '#fff',
  },
  addButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#2196F3',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
  },
});

export default NotificationScreen;