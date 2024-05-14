
import { TailSpin } from 'react-loader-spinner'
function Loading() {
    return (
    <div className='h-[100vh] w-full flex items-center justify-center'>
            <TailSpin
        visible={true}
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass=""
        />
    </div>
    );
}

export default Loading;