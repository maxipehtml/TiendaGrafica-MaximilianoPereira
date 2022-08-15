import { useState, createContext } from 'react'

const Notification = ({ mensaje, tipo, classes }) => {
    const styleNoti = {
        position: 'fixed',
        top: 100,
        left:10,
        width: 'auto',
        height: 'auto',
        padding: '10px',
        opacity: 0.8,
        color: 'white',
        backgroundColor: tipo === 'success' ? 'green' : 'red'
    }

    if (mensaje === '') return

    return (
        <div className={`${classes}` || ''} style={styleNoti}>
            {mensaje}
        </div>
    )
}

const NotificationContext = createContext()

export const NotificationProvider = ({ children }) => {
        const [mensaje, setMensaje] = useState('')
        const [tipo, setTipo] = useState('success')
        const [classes, setClase] = useState('')

        const setNotification = (msj, tip , timeout = 3.14, clas = 'bigBanner' ) => {
            setMensaje(msj)
            setTipo(tip)
            setClase(clas)
            setTimeout(() => {
                setMensaje('')
            }, timeout * 1000)

        }

        return (
            <NotificationContext.Provider value={{ setNotification }}>
                <Notification mensaje={mensaje} tipo={tipo} classes={classes} />
                { children } 
            </NotificationContext.Provider>
        )
    }
export default NotificationContext


