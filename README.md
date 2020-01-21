此插件旨在使用taro构建微信小程序实现红包雨效果

使用方式
npm install redpackets --save-dev
import RedPackets from 'redpackets'

<RedPackets 
  show={showRedPackets} 
  count={60} />


参数
show：boolean，是否显示红包雨，true--显示；false--不显示
count：number，红包雨数量
