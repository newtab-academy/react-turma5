import axios from "axios"
import React, { useCallback, useEffect, useState } from "react"
import './list.css'
// class List extends React.Component {
    
//     render() {
//         this.setState({

//          })
//     }
// }

function List() {
    // let [clickes, setClickes] = useState(0)
    let [tarefas, setTarefas] = useState([])
    let [showModal, setShowModal] = useState(false)
    let [tarefaSelecionada, setTarefaSelecionada] = useState({})

    const [, updateState] = useState();
    const forceUpdate = useCallback(() => updateState({}), []);

    // let handleClick = (e) => {
    //     setClickes(clickes+1)
    // }

    useEffect(() => {
        // fetch('https://cors.bridged.cc/https://api.clickup.com/api/v2/list/17723790/task', {
        //     headers: {
        //         Authorization: 'pk_3049686_IA5B1K1NU1QR3OQ3HMTIC2XJ198G6EBI',
        //         'X-Requested-With': 'application/json'
        //     }
        // }).then((response) => response.json()).then((data) => console.log(data))

        axios.get('https://cors.bridged.cc/https://api.clickup.com/api/v2/list/17723790/task', {
            headers: {
                Authorization: 'pk_3049686_IA5B1K1NU1QR3OQ3HMTIC2XJ198G6EBI',
                'X-Requested-With': 'application/json'
            }
        }).then((resp) => {
           setTarefas(resp.data.tasks)

        })

    }, [])
    
    let mostraModal = (e, i) => {
        // console.log(e.target.dataset.index)
        // console.log(i)

        setTarefaSelecionada(Object.assign({}, tarefas[i]))
        setShowModal(true);
        

    }

    let salvarTarefa = () => {
        
        axios.put('https://cors.bridged.cc/https://api.clickup.com/api/v2/task/' + tarefaSelecionada.id, {
            status: tarefaSelecionada.status.status
        }, {
            headers: {
                Authorization: 'pk_3049686_IA5B1K1NU1QR3OQ3HMTIC2XJ198G6EBI',
                'Content-Type': 'application/json',
                'X-Requested-With': 'application/json'
            }
        }).then((novaTarefa) => {
            let tarefasAtual = tarefas
           
            tarefasAtual = tarefasAtual.map((t) => {
                if (t.id == novaTarefa.data.id) {
                    t = novaTarefa.data
                }

                return t
            })

            setTarefas(tarefasAtual)
            setShowModal(false)
        })
    }

    let updateTarefaSeleciona = (e) => {
        let tAtual = tarefaSelecionada
        tAtual.status.status = e.target.value
        console.log(tAtual)
        setTarefaSelecionada(tAtual)
        forceUpdate()
    }

    return (
        <>
            <div>
                {/* <button onClick={handleClick}>Clique em mim</button> */}
                {/* List funciona! */}
                <ul className="tasks">
                    {tarefas.map((t, index) => {
                        return (
                            <li key={'task-'+index}>
                                {t.name}
                                <div className="status" data-index={index} onClick={(e) => mostraModal(e, index) } style={{borderColor:t.status.color, backgroundColor:t.status.color}}>
                                    {t.status.status}
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div className="backdrop" style={{display: (showModal ? 'block' : 'none')}} onClick={() => setShowModal(false)}>
            </div>
            <div className="modal" style={{display: (showModal ? 'block' : 'none')}}>
                    <div className="form">
                        <div>{tarefaSelecionada.name}</div>
                        <div>
                            <select value={tarefaSelecionada.status?.status} onChange={updateTarefaSeleciona}>
                                <option value="to do"> TO DO </option>
                                <option value="in progress"> IN PROGRESS </option>
                                <option value="complete"> COMPLETE </option>
                            </select>
                        </div>
                        <button onClick={() => salvarTarefa()}>Salvar</button>
                    </div>
            </div>
        </>
    )
}

export default List