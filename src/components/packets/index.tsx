import Taro from '@tarojs/taro';
import { View, Image } from '@tarojs/components';
import { observer } from '@tarojs/mobx';

import redPacket from './imgs/redPacket.png';

import styles from './index.module.less';
import './index.css'

interface Packets {
  angle: number,
  marginTop: number,
  marginLeft: number,
  width: number,
  height: number,
  animation: number,
}

const RedPackets = (props: { show: boolean, count: number }) => {
  const initPacketArr: Packets[] = [];
  const { show, count } = props;

  const [packets, setPackets] = Taro.useState(initPacketArr);

  Taro.useEffect(() => {
    if (show) {
      dropRedPackets();
    }
  }, [show])

  const dropRedPackets = () => {
    const arr: Packets[] = [];
    for (var i = 0; i < count; i++) {
      const angle = Math.ceil(Math.random() * 80) - 20;
      const marginLeft = Math.ceil(Math.random() * 750 - 30);
      const width = Math.floor(Math.random() * (100 - 60 + 1) + 60);
      const animation = Math.floor(Math.random() * (6 - 2) + 2)
      const height = Math.ceil(width * 1.25)
      const marginTop = Math.floor(Math.random() * (1000 - 30) + 0)
      const redPacket: Packets = {
        angle,
        marginLeft,
        width,
        height,
        marginTop,
        animation
      }
      arr.push(redPacket)
    }
    setPackets(arr)
  }

  return (
    <View className={styles.redPackets}>
      {show && packets.map((item, index) => (
        <Image
          style="transform:rotate({{item.angle}}deg);margin-top:{{item.marginTop}}px;margin-left:{{item.marginLeft}}rpx;width:{{item.width}}rpx;height:{{item.height}}rpx;animation: dropdown {{item.animation}}s linear infinite;"
          className={styles.packet}
          src={redPacket}
          key={index}
        />
      ))}
    </View>
  );

}

export default observer(RedPackets);
