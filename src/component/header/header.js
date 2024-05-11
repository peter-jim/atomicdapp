import React, { useEffect, useState,useContext } from 'react'
import './header.css'
import logo from '../../assets/logo.png'
import { Space } from 'antd'
import { AppstoreOutlined, MailOutlined, ContainerOutlined, DownOutlined, MinusSquareOutlined, UnorderedListOutlined, UserOutlined, PieChartOutlined, DesktopOutlined } from '@ant-design/icons'
import { Button, Menu, Dropdown } from 'antd/es'
import strkimg from '../../assets/strk.png'
import btcimg from '../../assets/btc.png'

import { connect as connectStarknetkit, disconnect as disconnectStarknetkit } from "starknetkit";
import { WalletContext } from '../../WalletContext';


const getWidth = () => {
  return { width: window.innerWidth };
};



export default function Header() {

  const [list] = useState([
    { label: 'STRK Faucet', url: 'https://starknet-faucet.vercel.app/' },
    { label: 'BTC Faucet', url: 'https://coinfaucet.eu/en/btc-testnet/' },
    { label: 'Docs', url: 'https://atomicstark.gitbook.io/atomicstark-docs/' }
  ]);

  const {
    btcAddress,
    strkAddress,
    setStrkAddress,
    setBtcAddress,
    address,
    setStrkAddressIsDropdownOpen,
    setBtcAddressIsDropdownOpen,

    isStrkAddressDropdownOpen,
    isBtcAddressDropdownOpen,
    
    HandleStarknetClick,
    CloseConnectStarknet,
    handleBitcoinClick,
    
} = useContext(WalletContext);

  
console.log('btcAddress', btcAddress);






  const handleMenuClick = (e) => {
    console.log('click', e);
    if (e.key === '1') {
      if (strkAddress) {
        CloseConnectStarknet();
        setStrkAddress('');
      } else if (btcAddress) {
        setBtcAddress('');
        setBtcAddressIsDropdownOpen(false);
      }
    }
  };
  const [windowWidth, setWindowWidth] = useState(getWidth());
  const [flag, setFlag] = useState(false);

  // 标记一下
  useEffect(() => {

    setStrkAddress(address);
    const widthSize = () => {
      setWindowWidth(getWidth());
    };
    window.addEventListener("resize", widthSize);
    return () => {
      window.removeEventListener("resize", widthSize);
    };
  }, []);
  function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }

  const strkDisconnectItems = {
    items:[{
      label: 'Disconnect',
      key: '1',
    }],
      onClick: () => {
        console.log('Disconnect starknet')
        CloseConnectStarknet();
        setStrkAddress(''); // 重置 strkAddress 为空字符串
        setStrkAddressIsDropdownOpen(false);
      },
    };

  const btcDisconnectItems = {
    items:[{
      label: 'Disconnect',
      key: '1',
    }],
    onClick: () => {
      console.log('Disconnect bitcoin')
      setBtcAddress(''); // 重置 btcAddress 为空字符串
      setBtcAddressIsDropdownOpen(false);
    },
  }
    

  const items = [
    {
      label: 'Disconnect',
      key: '1',
      // icon: <UserOutlined />,
    },
  ];
  const itemsa = [
    getItem('Points', '1'),
    getItem('Starknet', '2'),
    getItem('Docs', '3'),
    getItem('Connect Wallet', 'sub1', <AppstoreOutlined />, strkAddress ? strkDisconnectItems : []),
    getItem('Connect OKX', 'sub2', <AppstoreOutlined />, btcAddress ? btcDisconnectItems : []),
    getItem('Relays', 'sub3', <AppstoreOutlined />, [
      getItem('1', '11'),
    ]),
  ];

  const menuProps = {
    items: items,
    onClick: handleMenuClick,
  };

  const handleStrkDropdownOpenChange = (open) => {
    if (!open) {
      // 如果下拉菜单关闭,不执行断开连接操作
      setStrkAddressIsDropdownOpen(open);
    }
  };

  const handleBtcDropdownOpenChange = (open) => {
    if (!open) {
      // 如果下拉菜单关闭,不执行断开连接操作
      setBtcAddressIsDropdownOpen(open);
    }
  };

  return (
    <div className='box'>
      {windowWidth.width < 670 ? <>
        <div className='left'>
          <img src={logo} alt="" />
        </div>
        <div className='right' >
          <UnorderedListOutlined onClick={() => setFlag(!flag)} style={{ width: "22px", zIndex: '1111', height: '22px', cursor: 'pointer' }} />
          <div className='flxed' style={{ right: flag ? '0px' : '-200px' }}> <Menu
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
            theme="dark"
            items={itemsa}
          /></div>
        </div>
      </> : <>
        <div className='left'>
          <img src={logo} alt="" />
          <ul>
            {/* {list.length > 0 && list.map((e, i) => {
              return (
                <a  key={i}>{e}</a>
              )
            })} */}
            {list.length > 0 && list.map((item, i) => (
            <li key={i}>
              <a href={item.url} target="_blank" rel="noopener noreferrer">
                {item.label}
              </a>
            </li>
          ))}

            
          </ul>
        </div>
        <div className='right'>
          <> <Dropdown
            menu={strkDisconnectItems}
            trigger={['click']}
            open={isStrkAddressDropdownOpen}
            onOpenChange={handleStrkDropdownOpenChange}
          >
            <Button type="primary" style={{ background: '#00D889', color: '#fff' }} icon={<MinusSquareOutlined />} 
              onClick={() => HandleStarknetClick()} >
              {strkAddress ? strkAddress.substring(0, 8) + '...' + strkAddress.substring(strkAddress.length - 8, strkAddress.length) : 'Connect Wallet'} 
            </Button>
          </Dropdown>
          <Dropdown
            menu={btcDisconnectItems}
            trigger={['click']}
            open={isBtcAddressDropdownOpen}
            onOpenChange={handleBtcDropdownOpenChange}
          >
            <Button type="primary" style={{ background: '#00D889', color: '#fff' }}  onClick={() => handleBitcoinClick()} >
              <Space>
                {btcAddress ? btcAddress.substring(0, 8) + '...' + btcAddress.substring(btcAddress.length - 8, btcAddress.length) : 'Connect OKX'}
              </Space>
            </Button>
          </Dropdown>
            {/* <Dropdown menu={menuProps}>
              <Button style={{ border: '1px solid #00D889', color: '#fff' }} ghost>
                <Space>
                  Relays
                  <DownOutlined style={{ fontSize: '10px' }} />
                </Space>
              </Button>
            </Dropdown> */}
          </>
        </div>
      </>}
    </div>
  )
}
