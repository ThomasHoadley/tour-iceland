const Layout = ({ children }) => (
    <div id="container">
        {children}

        <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          height: 100%;
          width: 100%;
          font-size: 16px;
        }

        * {
            box-sizing: border-box;
        }   
      `}</style>
    </div>
)
export default Layout