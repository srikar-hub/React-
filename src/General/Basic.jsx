
const Basic = ()=>{
const name="srikar";

const user = {
    firstName :"Srikar",
    address : "Mahabubnagar"
}

function print(data){
    return `Hello KL university from ${data.firstName} ${data.address}`
}

    return (
    <div>
        Hello i am {user.firstName} from {user.address}
        <h2>{print(user)}</h2>
    </div>
    );
}
export default Basic;
