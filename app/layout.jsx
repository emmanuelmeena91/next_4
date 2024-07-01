
export const metadata = {
    title: "next1",
    description: "nex1app",
}
const Rootlayout = ({ children }) => {
  return (
    <html>
        <body>
            <div>
                <div/>
            </div>
            <main>
                {children}
            </main>
        </body>
    </html>
  )
}

export default Rootlayout