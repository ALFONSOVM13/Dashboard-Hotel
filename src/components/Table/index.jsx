/*Este componente sirve para renderizar una tabla, enviando los props headers que deben definirse como  un array de strings y data que debe ser un arreglo de objetos del tipo 
[
  {propiedad1:"celda1Fila1",propiedad2:"celda2Fila1",propiedad3:"celda3Fila1"},
  {propiedad1:"celda1Fila2",propiedad2:"celda2Fila2",propiedad3:"celda3Fila2"},
  {propiedad1:"celda1Fila3",propiedad2:"celda1Fila3",propiedad3:"celda1Fila3"}
]
*/
import { useState } from "react";

function Table({
  headers,
  data = [],
  Components,
  idName = "",
  size = 10,
  page = 0,
}) {
  const [pointer, setPointer] = useState(0);
  return (
    <table>
      <thead>
        <tr className="border-b-2 border-b-gray-200 shadow-sm shadow-slate-500">
          {headers.map((header, i) => (
            <th
              className=" w-[10%] text-xl text-black capitalize "
              key={header + i}
            >
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.length > 0 &&
          data.slice(size * (page - 1), size * page).map((row, i) => (
            <tr
              key={Object.values(row).values[0] + i.toString()}
              className="border-b-2 border-slate-300 h-[4rem]"
            >
              {Object.values(row).map((cell, j) => (
                <td
                  key={"Cell" + i.toString() + j.toString()}
                  className="justify-between items-center font-light text-black max-md:flex-wrap max-md:max-w-full"
                >
                  {cell}
                </td>
              ))}
              <td
                key={"Cell" + i.toString() + "components"}
                className="flex gap-5 h-full h-[4rem] items-center font-light text-black "
              >
                {Components !== undefined && (
                  <Components className="flex" id={`${row[idName]}`} />
                )}
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}

export default Table;
