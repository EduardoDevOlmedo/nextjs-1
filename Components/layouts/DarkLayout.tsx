
const DarkLayout: React.FC = ({children}) => {
  return (
    <div style={{
        background: 'rgba(0,0,0,0.3)',
        padding: "10px",
        borderRadius: "10px"
    }}>
        <h3>
             Dark Layout
        </h3>
      <div>
        {children}
     </div>
    </div>
 )
}

export default DarkLayout