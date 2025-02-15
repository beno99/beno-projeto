import { Search, MoreHorizontal, ChevronsLeft, ChevronLeft, ChevronRight, ChevronsRight } from "lucide-react"
import { IconButton } from "./Icon-button"

export function AttendeeList(){
    return (
     <div className="flex-col flex gap-4 ">   

        <div className="flex gap-3 items-center">
            <h1 className="txt-2xl font-bold" >Participantes</h1>
            <div className="px-3 w-72 py-1.5 border border-white/10  rounded-lg text-sm flex items-center gap-3">
                <Search className="size-4 text-emerald-300"/> 
                <input type="text" className=" bg-transparent flex-1 outline-none h-auto border-0 p-0 text-sm ring-0" placeholder="Buscar participantes..." />
           </div>
        </div> 

        <div className="border border-white/10 rounded-lg">
            <table className="w-full ">
                <thead>
                    <tr className="border-b  border-white/10">
                        <th style={{ width: 64}}  className="py-3 px-4 text-sn font-semibold text-left">
                            <input type="checkbox" className=" size-4 bg-black/20 rounded border border-white/10 " />
                        </th>
                        <th className="py-3 px-4 text-sn font-semibold text-left">codigo</th>
                        <th className="py-3 px-4 text-sn font-semibold text-left">Participantes</th>
                        <th className="py-3 px-4 text-sn font-semibold text-left">Data de Inscrição</th>
                        <th className="py-3 px-4 text-sn font-semibold text-left">Data do check-in</th>
                        <th style={{ width: 64}} className="py-3 px-4 text-sn font-semibold text-left"></th>
                    </tr>
                </thead>
                <tbody>
                   {Array.from({length: 8}).map((_, i) => (
                       <tr key={i} className="border-b border-white/10 hover:bg-white/5">
                           <td className="py-3 px-4 text-sn  text-zinc-300">
                               <input type="checkbox" className=" size-4 bg-black/20 rounded border border-white/10" />
                           </td>
                           <td className="py-3 px-4 text-sn  text-zinc-300">1234</td>
                           <td className="py-3 px-4 text-sn  text-zinc-300">
                               <div className="flex flex-col gap-1 ">
                                   <span className="font-semibold text-white">Benoni Brandao</span>
                                   <span>Benonibrandao2004@Gmail.com</span>
                               </div>
                           </td>
                           <td className="py-3 px-4 text-sn  text-zinc-300">7 dias atras </td>
                           <td className="py-3 px-4 text-sn  text-zinc-300"> 3 dias atras</td>
                           <td className="py-3 px-4 text-sn  text-zinc-300">
                               <IconButton transparent={true}>
                                   <MoreHorizontal className=" size-4" />
                               </IconButton>
                           </td>
                       </tr>
                   ))}
                </tbody>
                <tfoot>
                    <tr>
                        <td className="py-3 px-4 text-sn  text-zinc-300" colSpan={3}>Mostrando 10 de 2028 itens</td>
                        <td className="py-3 px-4 text-sn  text-zinc-300 text-right" colSpan={3}>
                            <div className="inline-flex items-center gap-8">
                                <samp>pagina 1 de 23</samp>
                                <div className=" flex gap-1.5">
                                    <IconButton>
                                        <ChevronsLeft className=" size-4" />
                                    </IconButton>
                                    <IconButton>
                                        <ChevronLeft className=" size-4" />
                                    </IconButton>
                                    <IconButton>
                                        <ChevronRight className=" size-4" />
                                    </IconButton>
                                    <IconButton>
                                        <ChevronsRight className=" size-4" />
                                    </IconButton>
                                </div>
                            </div>
                        
                        </td>
                    </tr>
                </tfoot> 
            </table>
       </div>
    </div>  
    )
}