import React, { useState } from "react";
import { PropertieInterface } from "../../../../interfaces/propertie";
import { AiFillSave } from "react-icons/ai";

interface OwnProps {
  propertie: PropertieInterface;
  history: string[];
  handleSubmit: Function;
}

export default function EditPropertie(props: OwnProps) {
  const [logradouro, setLogradouro] = useState(
    props.propertie?.adress?.logradouro
  );
  const [bairro, setBairro] = useState(props.propertie?.adress?.bairro);
  const [numero, setNumero] = useState(props.propertie?.adress?.numero);
  const [cep, setCep] = useState(props.propertie?.adress?.cep);
  const [uf, setUf] = useState(props.propertie?.adress?.uf);
  const [complemento, setComplemento] = useState<string | undefined>(
    props.propertie?.adress?.complemento
  );
  const [roomsAmount, setRoomsAmount] = useState(props.propertie?.roomsAmount);
  const [suitesAmount, setSuitesAmount] = useState(
    props.propertie?.suitesAmount
  );
  const [livingRoomsAmount, setLivingRoomsAmount] = useState(
    props.propertie?.livingRoomsAmount
  );
  const [diningRoomsAmount, setDiningRoomsAmount] = useState(
    props.propertie?.diningRoomsAmount
  );
  const [parkingAmount, setParkingAmount] = useState(
    props.propertie?.parkingAmount
  );
  const [builtInCabinetsAmount, setBuiltInCabinetsAmount] = useState(
    props.propertie?.builtInCabinetsAmount
  );
  const [rentValue, setRentValue] = useState(props.propertie?.rentValue);
  const [description, setDescription] = useState(props.propertie?.description);
  const [floor, setFloor] = useState(props.propertie?.floor);
  const [condominiumValue, setCondominiumValue] = useState(
    props.propertie?.condominiumValue
  );

  return props.propertie ? (
    <form
      onSubmit={async (e) =>
        props.handleSubmit({
          adress: { logradouro, bairro, numero, cep, uf, complemento },
          roomsAmount,
          suitesAmount,
          livingRoomsAmount,
          diningRoomsAmount,
          parkingAmount,
          builtInCabinetsAmount,
          rentValue,
          description,
          floor,
          condominiumValue,
          fullConcierge: props.propertie?.fullConcierge,
        })
      }
    >
      <div className="detail-propertie-container">
        <div className="detail-propertie-content">
          <div className="detail-propertie-data">
            <div className="edit-propertie-field">
              <strong>Estado:</strong>
              <input
                placeholder={props.propertie?.adress?.uf}
                value={uf}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  setUf(event.target.value)
                }
              ></input>
            </div>
            <button className="detail-menu-button" type="submit">
              <AiFillSave size={40} className="icon"></AiFillSave>
              Salvar
            </button>
            <div className="edit-propertie-field">
              <strong>Bairro:</strong>
              <input
                placeholder={props.propertie?.adress?.bairro}
                value={bairro}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  setBairro(event.target.value)
                }
              ></input>
            </div>

            <div className="edit-propertie-field">
              <strong>Cep:</strong>
              <input
                placeholder={props.propertie?.adress?.cep}
                value={cep}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  setCep(event.target.value)
                }
              ></input>
            </div>

            <div className="edit-propertie-field">
              <strong>Logradouro:</strong>
              <input
                placeholder={props.propertie?.adress?.logradouro}
                value={logradouro}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  setLogradouro(event.target.value)
                }
              ></input>
            </div>

            <div className="edit-propertie-field">
              <strong>Numero:</strong>
              <input
                placeholder={props.propertie?.adress?.numero}
                value={numero}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  setNumero(event.target.value)
                }
              ></input>
            </div>

            <div className="edit-propertie-field">
              <strong>Complemento:</strong>
              <input
                placeholder={props.propertie?.adress?.complemento}
                value={complemento}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  setComplemento(event.target.value)
                }
              ></input>
            </div>

            <div className="edit-propertie-field">
              <strong>Quartos:</strong>
              <input
                placeholder={props.propertie?.roomsAmount.toString()}
                value={roomsAmount}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  setRoomsAmount(Number(event.target.value))
                }
              ></input>
            </div>

            <div className="edit-propertie-field">
              <strong>Suites:</strong>
              <input
                placeholder={props.propertie?.suitesAmount.toString()}
                value={suitesAmount}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  setSuitesAmount(Number(event.target.value))
                }
              ></input>
            </div>

            <div className="edit-propertie-field">
              <strong>Salas de jantar:</strong>
              <input
                placeholder={props.propertie?.diningRoomsAmount.toString()}
                value={diningRoomsAmount}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  setDiningRoomsAmount(Number(event.target.value))
                }
              ></input>
            </div>

            <div className="edit-propertie-field">
              <strong>Salas de jantar:</strong>
              <input
                placeholder={props.propertie?.livingRoomsAmount.toString()}
                value={livingRoomsAmount}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  setLivingRoomsAmount(Number(event.target.value))
                }
              ></input>
            </div>

            <div className="edit-propertie-field">
              <strong>Vagas:</strong>
              <input
                placeholder={props.propertie?.parkingAmount.toString()}
                value={parkingAmount}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  setParkingAmount(Number(event.target.value))
                }
              ></input>
            </div>

            <div className="edit-propertie-field">
              <strong>Armarios embutidos:</strong>
              <input
                placeholder={props.propertie?.builtInCabinetsAmount.toString()}
                value={builtInCabinetsAmount}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  setBuiltInCabinetsAmount(Number(event.target.value))
                }
              ></input>
            </div>

            <div className="edit-propertie-field">
              <strong>Descrição:</strong>
              <input
                placeholder={props.propertie?.description}
                value={description}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  setDescription(event.target.value)
                }
              ></input>
            </div>

            {props.propertie?.type === "apartamento" && (
              <div>
                <div className="edit-propertie-field">
                  <strong>Andar:</strong>
                  <input
                    placeholder={props.propertie?.floor!.toString()}
                    value={floor}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                      setFloor(Number(event.target.value))
                    }
                  ></input>
                </div>
                <div className="edit-propertie-field">
                  <strong>Valor do condominio:</strong>
                  <input
                    placeholder={props.propertie?.condominiumValue!.toString()}
                    value={condominiumValue}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                      setCondominiumValue(Number(event.target.value))
                    }
                  ></input>
                </div>
              </div>
            )}

            <div className="edit-propertie-field">
              <strong>Aluguel:</strong>
              <input
                placeholder={`R$${props.propertie?.rentValue.toFixed(2)}`}
                value={rentValue}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  setRentValue(Number(event.target.value))
                }
              ></input>
            </div>
          </div>
        </div>
      </div>
    </form>
  ) : (
    <div />
  );
}
