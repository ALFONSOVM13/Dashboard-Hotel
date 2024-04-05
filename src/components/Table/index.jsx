/* eslint-disable react/prop-types */
/*Este componente sirve para renderizar una tabla, enviando los props headers que deben definirse como  un array de strings y data que debe ser un arreglo de objetos del tipo 
[
  {propiedad1:"celda1Fila1",propiedad2:"celda2Fila1",propiedad3:"celda3Fila1"},
  {propiedad1:"celda1Fila2",propiedad2:"celda2Fila2",propiedad3:"celda3Fila2"},
  {propiedad1:"celda1Fila3",propiedad2:"celda1Fila3",propiedad3:"celda1Fila3"}
]
*/
import HotelImages from "../HotelImages";

function Table({
  headers,
  data,
  Components,
  idName = "",
  size = 10,
  page = 0,
  maxHeight = false,
  omitt = "",
  setterModal1,
  setterModal2,
}) {
  return (
    <table
      className={`w-full block dark:text-[rgba(240,240,240,0.9)] ${
        maxHeight ? maxHeight + " overflow-y-auto" : ""
      }`}
    >
      <thead className="w-full">
        <tr className="border-b-2 border-b-gray-200 shadow-sm shadow-slate-500 w-full">
          {headers.map((header, i) => (
            <th
              className="px-10 min-w-fit w-1/6 dark:text-[rgba(240,240,240,0.9)]  text-xl text-black capitalize "
              key={header + i}
            >
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="w-full">
        {data.length > 0 &&
          data.slice(size * (page - 1), size * page).map((row, i) => (
            <tr
              key={Object.values(row).values[0] + i.toString()}
              className="h-[5rem] w-full hover:bg-[rgba(200,200,200,0.3)] transition-all duration-300"
            >
              {row.imageUrl && (
                <td className="flex justify-center items-center font-light dark:text-[rgba(240,240,240,0.9)] text-black px-10 min-w-fit w-1/6 text-xl">
                  <img
                    src={row.imageUrl}
                    alt={`Imagen de ${row.name}`}
                    className="mt-3 h-16 w-16 object-cover rounded-full"
                  />
                </td>
              )}
              {Object.values(row)
                .filter(
                  (value, index) =>
                    Object.keys(row)[index] !== "imageUrl" &&
                    Object.keys(row)[index] !== omitt
                )
                .map((cell, j) => (
                  <td
                    key={"Cell" + i.toString() + j.toString()}
                    className="justify-between p-5 items-center font-normal dark:text-[rgba(240,240,240,0.9)]  text-black max-md:flex-wrap max-md:max-w-full"
                  >
                    {typeof cell === "object" ? (
                      <div className="grid gap-3 grid-cols-3">
                        {Object.keys(cell).map((item, i) => (
                          <HotelImages
                            key={"HI" + j + i}
                            image={item}
                            size={"sm"}
                            value={cell[item]}
                          />
                        ))}
                      </div>
                    ) : typeof cell === "string" ? (
                      cell === "available" ||
                      cell === "maintenance" ||
                      cell === "busy" ? (
                        <span
                          className={`p-2 ${
                            cell === "available"
                              ? "bg-green-200"
                              : cell === "maintenance"
                              ? "bg-yellow-200"
                              : cell === "busy"
                              ? "bg-red-200"
                              : ""
                          } rounded-xl font-bold text-black w-[120px] block mx-auto`}
                        >
                          {cell.charAt(0).toUpperCase() +
                            cell.slice(1).toLowerCase()}
                        </span>
                      ) : cell.indexOf("@") !== -1 ? (
                        cell
                      ) : (
                        cell
                          .split(" ")
                          .map(
                            (text) =>
                              text.charAt(0).toUpperCase() +
                              text.slice(1).toLowerCase()
                          )
                          .join(" ")
                      )
                    ) : typeof cell === "boolean" ? (
                      cell ? (
                        <span className="p-2 bg-green-200 rounded-xl font-bold text-black w-[120px] block mx-auto">
                          Active
                        </span>
                      ) : (
                        <span className="p-2 bg-red-200 rounded-xl font-bold text-black w-[120px] block mx-auto">
                          Inactive
                        </span>
                      )
                    ) : (
                      cell
                    )}
                  </td>
                ))}
              {Components !== undefined && (
                <td key={"Cell" + i.toString() + "components"}>
                  <Components
                    id={`${row[idName]}`}
                    data={row}
                    setterModal1={setterModal1}
                    setterModal2={setterModal2}
                  />
                </td>
              )}
            </tr>
          ))}
      </tbody>
    </table>
  );
}

export default Table;
