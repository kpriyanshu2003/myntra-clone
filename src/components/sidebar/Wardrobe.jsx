import { useState } from "react";
import menuData from "./menu";
export default function Choice() {
  const [unoOpen, setUnoOpen] = useState(false);
  const [dosOpen, setDosOpen] = useState(false);
  // const [tresOpen, setTresOpen] = useState(false);
  const items = (
    <ul>
      {menuData.map((uno, index) => {
        if (uno.items)
          return (
            <li key={index}>
              <span onClick={() => setUnoOpen(!unoOpen)}>{uno.key}</span>
              {unoOpen && (
                <ul key={index} className="ml-3">
                  {uno.items.map((dos, index) => {
                    if (dos.items)
                      return (
                        <li key={index}>
                          <span onClick={() => setDosOpen(!dos)}>
                            {dos.key}
                          </span>
                          {dosOpen && (
                            <ul key={index} className="ml-3">
                              {dos.items.map((tres, index) => {
                                return <li key={index}>{tres.key}</li>;
                              })}
                            </ul>
                          )}
                        </li>
                      );
                    else return <li key={index}>{dos.key}</li>;
                  })}
                </ul>
              )}
            </li>
          );
        else return <li key={index}>{uno.key}</li>;
      })}
    </ul>
  );
  return <div>{items}</div>;
}
// Old cod
// const items = menuData.map((uno, index) => {
//   if (uno.items)
//     return (
//       <details key={index} className="mx-0.5 my-0.5">
//         <summary className="py-0.5">{uno.key}</summary>
//         <p className="ml-4">
//           {uno.items.map((dos, index) => {
//             if (dos.items)
//               return (
//                 <details key={index}>
//                   <summary>{dos.key}</summary>
//                   <p className="ml-4">
//                     {dos.items.map((tres, index) => {
//                       if (tres.items)
//                         return (
//                           <details key={index}>
//                             <summary className="ml-4">{tres.key}</summary>
//                           </details>
//                         );
//                       else return <p className="ml-4">{tres.key}</p>;
//                     })}
//                   </p>
//                 </details>
//               );
//             else return <p className="ml-4">{dos.key}</p>;
//           })}
//         </p>
//       </details>
//     );
//   else return <p className="ml-4">{uno.key}</p>;
// });
