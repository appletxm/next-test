import Header from './Header';

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD',
  backgroundColor: '#f5f5f5'
};

const bodyStyle = {
  margin: 10,
  padding: 10,
  border: '1px solid #9988dd'
}

const Layout = props => {
  // console.info(props.content, props.children)
  return (
      <div style={layoutStyle}>
        <Header />
        <div style={bodyStyle}>
          {props.content || props.children}
        </div> 
      </div>
    );
  }

export default Layout;