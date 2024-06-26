import React,{ useState, useEffect }  from 'react'
import './home.css'
import { Tabs } from 'antd/es';
import Listing from '../tab/listing';
import Order from '../tab/order';
import History from '../tab/history';
import '../tab/All.css'
import imgs from '../../assets/bt.svg'
import imgs1 from '../../assets/node.svg'
import imgs2 from '../../assets/tvl.svg'
export default function Home() {


  const [overviewData, setOverviewData] = useState(null);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://45.32.100.53:4000/api/v1/overview');
        const data = await response.json();
        setOverviewData(data.overview[0]);
        console.log(data.overview);
      } catch (error) {
        console.error('Error fetching overview data:', error);
      }
    };
  
    fetchData();
  }, []);

  const list = [
    { icon: (<img src={imgs} style={{ height: '32px' }} alt="" />), title: 'BTC supply', value: overviewData?.btcsupply || 0 },
    { icon: (<img src={imgs} style={{ height: '32px' }} alt="" />), title: 'STRK supply', value: overviewData?.strksupply || 0 },
    { icon: (<img src={imgs1} alt="" />), title: 'Node', value: overviewData?.node || 0 },
    { icon: (<img src={imgs2} alt="" />), title: 'TVL', value: overviewData?.tvl || 0 }
  ];


  
  const onChange = (key) => {
    console.log(key);
  };
  const items = [
    {
      key: '1',
      label: 'Listing',
      children: (
        <Listing />
      )
    },
    {
      key: '2',
      label: 'Order History',
      children: (
        <History />
      ),
    },
    {
      key: '3',
      label: 'My Order',
      children: (
        <Order />
      ),
    },
  ];
  return (
    <div className='home'>
      <div className='top'>
        <h2>Overview</h2>
        <ul>
          {list.map((e, i) => {
            return (
              <li key={i}>
                <div className='t'>
                  {e.icon}
                  <span>{e.title}</span>
                </div>
                <div className='b'>
                  {e.value}
                </div>
              </li>
            )
          })}
        </ul>
      </div>
      <div className='bot'>
        <h2 style={{ marginBottom: '28px' }}>Pools</h2>
        <div className='tab'>
          <Tabs tabBarGutter={33} defaultActiveKey="1" items={items} onChange={onChange} />
        </div>
      </div>
    </div>
  )
}
