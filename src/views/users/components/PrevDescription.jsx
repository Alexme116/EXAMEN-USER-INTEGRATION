/* eslint-disable react/prop-types */


const PrevDescription = ({ description }) => {

    const formatDate = (date) => {
        const newDate = new Date(date)
        const day = newDate.getDate() + '/' + (newDate.getMonth() + 1) + '/' + newDate.getFullYear()
        const hour = newDate.getHours() + ':' + newDate.getMinutes() + ':' + newDate.getSeconds()
        return day + ' - ' + hour
    }

    return (
        <div className="w-full h-full flex flex-col items-center justify-evenly px-2">
            <label className="text-xl font-bold">Previous Consultations:</label>

            <div className="flex flex-wrap flex-col gap-2 overflow-auto rounded-lg scroll-opt h-full">
                {description[0] ? description.map((desc, index) => (
                    <div key={index} className="bg-[#b7b7b7] h-full p-2 rounded-md flex flex-col overflow-auto scroll-opt">
                        <p><span className="font-bold">Date: </span>{formatDate(desc.createdat)}</p>
                        <p><span className="font-bold">Description: </span>{desc.description}</p>
                        <p><span className="font-bold">Prescription: </span>{desc.prescription}</p>
                    </div>
                ))
                : null}
            </div>
        </div>
    )
}

export default PrevDescription