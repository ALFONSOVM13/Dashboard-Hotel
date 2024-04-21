import React, { useState, useEffect } from "react";
import { FaBell } from "react-icons/fa";

const AdministradorChat = ({ socket }) => {
  const [mensaje, setMensaje] = useState("");
  const [mensajes, setMensajes] = useState({});
  const [salasClientes, setSalasClientes] = useState({});
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [previousRoom, setPreviousRoom] = useState(null);
  const [newMessagesCount, setNewMessagesCount] = useState({});

  useEffect(() => {
    const storedMessages = JSON.parse(localStorage.getItem("storedMessages"));
    if (storedMessages) {
      setMensajes(storedMessages.mensajes || {});
      setSalasClientes(storedMessages.salasClientes || {});
      setSelectedRoom(storedMessages.lastSelectedRoom || null);
      setNewMessagesCount(storedMessages.newMessagesCount || {});
    }
  }, []);

  useEffect(() => {
    const dataToStore = {
      mensajes,
      salasClientes,
      lastSelectedRoom: selectedRoom,
      newMessagesCount,
    };
    localStorage.setItem("storedMessages", JSON.stringify(dataToStore));
  }, [mensajes, salasClientes, selectedRoom, newMessagesCount]);

  useEffect(() => {
    if (socket) {
      socket.emit("joinAdministrador");
      socket.on("administradorJoined", (data) => {
        console.log(data.message);
      });

      socket.on("adminJoined", (data) => {
        console.log(data.message);
      });

      socket.on("mensaje_administrador", (data) => {
        console.log(
          `Mensaje del administrador para el cliente ${data.clienteId}: ${data.mensaje}`
        );
        socket
          .to(data.clienteId)
          .emit("mensaje_cliente", {
            clienteId: data.clienteId,
            mensaje: data.mensaje,
          });
      });

      socket.emit("joinAdminToClientRooms");

      return () => {
        socket.off("mensaje_administrador");
        socket.off("administradorJoined");
      };
    }
  }, [socket]);

  useEffect(() => {
    if (socket) {
      socket.on("admin_mensaje", (data) => {
        console.log(`Mensaje del cliente ${data.clienteId}: ${data.mensaje}`);
        setMensajes((prevMensajes) => ({
          ...prevMensajes,
          [data.clienteId]: [
            ...(prevMensajes[data.clienteId] || []),
            { tipo: "cliente", mensaje: data.mensaje },
          ],
        }));

        setNewMessagesCount((prevCount) => ({
          ...prevCount,
          [data.clienteId]: (prevCount[data.clienteId] || 0) + 1,
        }));
      });
    }
    return () => {
      if (socket) {
        socket.off("admin_mensaje");
      }
    };
  }, [socket]);

  useEffect(() => {
    if (socket) {
      socket.on("mensaje_cliente", (data) => {
        console.log(
          "Mensaje del cliente recibido en el AdministradorChat:",
          data.mensaje
        );
        const mensajeConEtiqueta = ` ${data.clienteId}: ${data.mensaje}`;
        setMensajes((prevMensajes) => ({
          ...prevMensajes,
          [data.clienteId]: [
            ...(prevMensajes[data.clienteId] || []),
            { tipo: "administrador", mensaje: data.mensaje },
          ],
        }));
      });

      socket.on("salaClienteIniciada", (data) => {
        console.log("Nueva sala de cliente iniciada:", data);
        setSalasClientes((prevSalas) => ({
          ...prevSalas,
          [data.clienteId]: data.clienteId,
        }));
      });

      return () => {
        socket.off("mensaje_cliente");
        socket.off("salaClienteIniciada");
      };
    }
  }, [socket]);

  const cerrarSala = (salaId) => {
    if (window.confirm("¿Estás seguro de que quieres cerrar esta sala?")) {
      const nuevasSalas = { ...salasClientes };
      delete nuevasSalas[salaId];
      setSalasClientes(nuevasSalas);
      setPreviousRoom(selectedRoom === salaId ? null : previousRoom);
      setSelectedRoom(selectedRoom === salaId ? null : selectedRoom);
    }
  };

  const handleClickRoom = (roomId) => {
    setSelectedRoom(roomId);

    setNewMessagesCount((prevCount) => ({
      ...prevCount,
      [roomId]: 0,
    }));
  };

  const enviarMensaje = (event) => {
    event.preventDefault();
    if (socket && mensaje.trim() !== "" && selectedRoom) {
      socket.emit("mensaje_servidor", {
        clienteId: selectedRoom,
        mensaje: mensaje,
      });
      setMensaje("");
    }
  };
  const refrescarChat = () => {
    if (selectedRoom) {
      setMensajes((prevMensajes) => ({
        ...prevMensajes,
        [selectedRoom]: [],
      }));
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-gray-100 rounded shadow">
      <h1 className="text-2xl font-bold mb-4 text-center">
        Administrator Chat Rooms
      </h1>
      <div>
        <h2 className="text-lg font-bold mb-2">Client Chat Rooms</h2>
        <ul>
          {Object.keys(salasClientes).map((sala, index) => (
            <li key={index} className="flex items-center justify-between">
              <span
                onClick={() => handleClickRoom(salasClientes[sala])}
                className={`cursor-pointer text-xl ${
                  selectedRoom === salasClientes[sala] ? "bg-d" : ""
                } hover:bg-gray-100`}
              >
                Room: {salasClientes[sala]}
                {newMessagesCount[salasClientes[sala]] > 0 && (
                  <span className="relative inline-block">
                    <FaBell />
                    <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full px-2 text-xs transform translate-x-1/2 -translate-y-1/2">
                      {newMessagesCount[salasClientes[sala]]}
                    </span>
                  </span>
                )}
              </span>
              {selectedRoom === salasClientes[sala] && (
                <>
                  <button
                    className="text-black  font-bold mr-1"
                    onClick={(e) => {
                      e.stopPropagation();
                      cerrarSala(salasClientes[sala]);
                    }}
                  >
                    X
                  </button>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
      <div className="chat-container">
        {selectedRoom &&
          mensajes[selectedRoom] &&
          mensajes[selectedRoom].map((mensaje, index) => (
            <div
              key={index}
              className={`mensaje ${
                mensaje.tipo === "cliente"
                  ? "bg-d text-black"
                  : "bg-gray-300 text-gray-800"
              } p-2 rounded mb-2`}
            >
              <span className="font-bold">
                {mensaje.tipo === "cliente" ? "Client" : "admin"}:
              </span>{" "}
              {mensaje.mensaje}
            </div>
          ))}
      </div>
      <form onSubmit={enviarMensaje} className="flex items-center">
        <input
          type="text"
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
          placeholder="Escribe tu mensaje aquí..."
          className="flex-1 mr-2 p-2 rounded border border-gray-300 focus:outline-none focus:border-green-500"
        />

        <button
          type="submit"
          className="bg-amber-300 hover:bg-amber-400 transition-colors px-4 py-2 rounded focus:outline-none"
        >
          Send
        </button>
      </form>
      <div className="flex justify-center">
        <button
          onClick={refrescarChat}
          className="w-40 bg-amber-300 hover:bg-amber-400 transition-colors text-white font-bold py-2 px-4 rounded-2xl focus:outline-none focus:shadow-outline"
        >
          REFRESH CHAT
        </button>
      </div>
    </div>
  );
};

export default AdministradorChat;

// import React, { useState, useEffect } from 'react';

// const AdministradorChat = ({ socket }) => {
//   const [mensaje, setMensaje] = useState('');
//   const [mensajes, setMensajes] = useState({});
//   const [salasClientes, setSalasClientes] = useState({});
//   const [selectedRoom, setSelectedRoom] = useState(null);
//   const [previousRoom, setPreviousRoom] = useState(null);

//   useEffect(() => {
//     const storedMessages = JSON.parse(localStorage.getItem('mensajes'));
//     if (storedMessages) {
//       setMensajes(storedMessages.mensajes || {});
//       setSalasClientes(storedMessages.salasClientes || {});

//       const lastSelectedRoom = storedMessages.lastSelectedRoom;
//       setSelectedRoom(lastSelectedRoom || null);
//     }
//     console.log('Mensajes recuperados de localStorage:', storedMessages);
//   }, []);

//   useEffect(() => {
//     localStorage.setItem('storedMessages', JSON.stringify({ mensajes, salasClientes, lastSelectedRoom: selectedRoom }));
//     console.log('Datos guardados en localStorage:', localStorage.getItem('storedMessages'));
//   }, [mensajes, salasClientes, selectedRoom]);

//   useEffect(() => {
//     if (socket) {
//       socket.emit('joinAdministrador');
//       socket.on('administradorJoined', (data) => {
//         console.log(data.message);
//       });

//       socket.on('adminJoined', (data) => {
//         console.log(data.message);
//       });

//       socket.on('mensaje_administrador', (data) => {
//         console.log(`Mensaje del administrador para el cliente ${data.clienteId}: ${data.mensaje}`);
//         socket.to(data.clienteId).emit('mensaje_cliente', { clienteId: data.clienteId, mensaje: data.mensaje });
//       });

//       socket.emit('joinAdminToClientRooms');

//       return () => {
//         socket.off('mensaje_administrador');
//         socket.off('administradorJoined');
//       };
//     }
//   }, [socket]);

//    useEffect(() => {
//     if (socket) {
//         socket.on('admin_mensaje', (data) => {
//         console.log(`Mensaje del cliente ${data.clienteId}: ${data.mensaje}`);
//         setMensajes(prevMensajes => ({
//           ...prevMensajes,
//           [data.clienteId]: [...(prevMensajes[data.clienteId] || []), { tipo: 'cliente', mensaje: data.mensaje }]
//         }));
//       });
//     }

//     return () => {
//       if (socket) {
//         socket.off('admin_mensaje');
//       }
//     };
//   }, [socket]);

//   useEffect(() => {
//     if (socket) {
//         socket.on('mensaje_cliente', (data) => {
//         console.log('Mensaje del cliente recibido en el AdministradorChat:', data.mensaje);
//         const mensajeConEtiqueta = ` ${data.clienteId}: ${data.mensaje}`;
//         setMensajes(prevMensajes => ({
//           ...prevMensajes,
//           [data.clienteId]: [...(prevMensajes[data.clienteId] || []), { tipo: 'administrador', mensaje: data.mensaje }]

//         }));
//       });

//       socket.on('salaClienteIniciada', (data) => {
//         console.log('Nueva sala de cliente iniciada:', data);
//         setSalasClientes(prevSalas => ({
//           ...prevSalas,
//           [data.clienteId]: data.clienteId
//         }));
//       });

//       return () => {
//         socket.off('mensaje_cliente');
//         socket.off('salaClienteIniciada');
//       };
//     }
//   }, [socket]);

//   const cerrarSala = (salaId) => {
//     if (window.confirm('¿Estás seguro de que quieres cerrar esta sala?')) {
//       const nuevasSalas = { ...salasClientes };
//       delete nuevasSalas[salaId];
//       setSalasClientes(nuevasSalas);
//       setPreviousRoom(selectedRoom === salaId ? null : previousRoom);
//       setSelectedRoom(selectedRoom === salaId ? null : selectedRoom);
//     }
//   };

//   const enviarMensaje = (event) => {
//     event.preventDefault();
//     if (socket && mensaje.trim() !== '' && selectedRoom) {
//         socket.emit('mensaje_servidor', { clienteId: selectedRoom, mensaje: mensaje });
//         setMensaje('');
//     }
//   };
//   const refrescarChat = () => {
//     if (selectedRoom) {
//       setMensajes(prevMensajes => ({
//         ...prevMensajes,
//         [selectedRoom]: []
//       }));
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto p-4 bg-gray-100 rounded shadow">
//       <h1 className="text-2xl font-bold mb-4 text-center">Administrator Chat Room</h1>
//       <div>
//         <h2 className="text-lg font-bold mb-2">Client Chat Rooms</h2>
//         <ul>
//           {Object.keys(salasClientes).map((sala, index) => (
//             <li key={index} className="flex items-center justify-between">
//               <span onClick={() => setSelectedRoom(salasClientes[sala])}
//               className={`cursor-pointer text-xl ${selectedRoom === salasClientes[sala] ? 'bg-d' : ''} hover:bg-gray-100`}>
//                 Room: {salasClientes[sala]}
//               </span>
//               {selectedRoom === salasClientes[sala] && (
//                 <>
//                   <button className="text-black  font-bold mr-1" onClick={(e) => { e.stopPropagation(); cerrarSala(salasClientes[sala]); }}>
//                     X
//                   </button>
//                 </>
//               )}
//             </li>
//           ))}
//         </ul>
//       </div>
//       <div className="chat-container">
//           {selectedRoom && mensajes[selectedRoom] && mensajes[selectedRoom].map((mensaje, index) => (
//             <div key={index} className={`mensaje ${mensaje.tipo === 'cliente' ? 'bg-d text-black' : 'bg-gray-300 text-gray-800'} p-2 rounded mb-2`}>
//               <span className="font-bold">{mensaje.tipo === 'cliente' ? 'Client' : 'admin'}:</span> {mensaje.mensaje}
//             </div>
//           ))}
//       </div>
//       <form onSubmit={enviarMensaje} className="flex items-center">
//         <input
//           type="text"
//           value={mensaje}
//           onChange={(e) => setMensaje(e.target.value)}
//           placeholder="Escribe tu mensaje aquí..."
//           className="flex-1 mr-2 p-2 rounded border border-gray-300 focus:outline-none focus:border-green-500"
//         />

//         <button type="submit" className="bg-amber-300 hover:bg-amber-400 transition-colors px-4 py-2 rounded focus:outline-none">Send</button>
//       </form>
//       <div className="flex justify-center">
//         <button onClick={refrescarChat} className="w-40 bg-amber-300 hover:bg-amber-400 transition-colors text-white font-bold py-2 px-4 rounded-2xl focus:outline-none focus:shadow-outline">
//           REFRESH CHAT
//         </button>
//       </div>
//     </div>
//   );
// };

// export default AdministradorChat;
