import { useState, useEffect } from "react";
import Button from "../../../components/Button";
import CardWhite from "../../../components/CardWhite";
import ModalOk from "../../../components/ModalOk";
import ModalCancel from "../../../components/ModalCancel";

const EditReminder = ({ isVisible, setModalIsVisible }) => {
  //estado para el texto
  const [text, setText] = useState("");
  // Estado para la anticipación
  const [anticipation, setAnticipation] = useState(null);
  //estado para el modal de ok
  const [modalOk, setModalOk] = useState(false);

  //estado para el modal de cancelar
  const [modalCancelIsVisible, setModalCancelIsVisible] = useState(false);

  useEffect(() => {
    // Simulando la carga de datos desde la base de datos
    setText(generateReminderMessage("Marcelo", "01/08/2024", anticipation));
  }, [anticipation]);

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleOnClose = () => {
    setModalIsVisible(false);
  };

  //genero el texto
  const generateReminderMessage = (name, date, time) => {
    return `¡Hola, ${name}!\nTe recordamos que tenés un turno programado en nuestro consultorio odontológico:\nFecha: ${date}\nHora: ${time}\n\nPor favor, confirmá tu asistencia.\n\n¡Gracias por tu colaboración!\nSi necesitas reprogramar tu cita, no dudes en contactarnos.\n\n¡Que tengas un excelente día!,\nDentalPlanner`;
  };

  return (
    isVisible && (
      <>
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <CardWhite className="w-[568px] bg-white">
            <div className="space-y-1">
              {/* Sección de botones para modificar texto */}
              <div className="flex justify-between items-start p-[10px] bg-bgGrey">
                <h2 className="text-[24px] font-semibold text-textGrey mb-1">
                  Recordatorio
                </h2>
              </div>
              {/* Campo de texto predefinido */}
              <div className="px-[10px]">
                <label
                  htmlFor="text"
                  className="block text-sm font-medium text-gray-700"
                ></label>
                <div className="p-2 ">
                  <textarea
                    id="text"
                    value={text}
                    onChange={handleTextChange}
                    className="w-full h-[21rem] text-[#616D7C] resize-none"
                    readOnly={true}
                  />
                </div>
              </div>

              {/* Botones de cancelar y guardar */}
              <div className="flex gap-2 p-[10px] bg-bgGrey justify-end">
                <Button
                  onClick={handleOnClose}
                  className="text-white bg-mainBlue"
                >
                  Volver
                </Button>
              </div>
            </div>
          </CardWhite>
        </div>
        {modalOk && (
          <ModalOk isOkVisible={modalOk} setIsOkVisible={setModalOk}>
            Cambios guardados con éxito
          </ModalOk>
        )}
        <ModalCancel
          isVisible={modalCancelIsVisible}
          setIsVisible={setModalCancelIsVisible}
          cancelModal={handleOnClose}
        />
      </>
    )
  );
};

export default EditReminder;
