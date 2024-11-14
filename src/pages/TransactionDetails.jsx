import { useParams } from "react-router-dom"
import { bookingItems } from "../constants/bookingList"
import TransactionCard from "../components/TransactionCard/TransactionCard";
import { transactionData } from "../constants/TransactionData";

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const getRandomTransactionCards = (data, min = 4, max = 9) => {
    const numberOfCards = getRandomInt(min, max);
    const shuffledData = data.sort(() => 0.5 - Math.random()); // Shuffle data
    return shuffledData.slice(0, numberOfCards);
};


function TransactionDetails() {
    const { clientId } = useParams()


    // Generate random values
    const followers = getRandomNumber(1000, 10000); // Random followers between 1,000 and 10,000
    const following = getRandomNumber(100, 1000);   // Random following between 100 and 1,000

    // Function to generate random numbers
    function getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    const bookingDetail = bookingItems.find((ele) => ele.clientId === clientId)

    const randomTransactionCards = getRandomTransactionCards(transactionData);
    return (
        <>
            <div className="w-full bg-gradient-to-r from-yellow-200 to-pink-200 rounded-bl-2xl rounded-br-2xl h-56 relative">

                <div className="absolute inset-x-0 bottom-0 bg-[#D73061] rounded-bl-2xl rounded-br-2xl text-white py-4 px-8 lg:flex lg:items-center lg:justify-between">
                    <div className="flex items-center">

                        <div className="lg:w-24 lg:h-24 w-20 h-20 rounded-full border-4 border-black overflow-hidden -mt-16">
                            <img
                                src={`${bookingDetail.avatar}`}
                                alt="Profile"
                                className="object-cover w-full h-full"
                            />
                        </div>


                        <div className="ml-4">
                            <h2 className="text-lg font-bold">{`${bookingDetail.clientName}`}</h2>
                            <p className="text-gray-400">{`${bookingDetail.clientId}`}</p>
                            <div className="flex items-center mt-2 text-sm">
                                <p className="mr-4">
                                    <span className="font-semibold">{followers.toLocaleString()}</span> Followers
                                </p>
                                <p>
                                    <span className="font-semibold">{following.toLocaleString()}</span> Following
                                </p>
                            </div>
                        </div>
                    </div>


                    {/* <div className="flex items-center space-x-4">
                        <button className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-full">
                            Message
                        </button>
                        <button className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-full">
                            Follow
                        </button>
                    </div> */}
                </div>
            </div>
            <div className="text-center font-semibold text-2xl border text-black my-2 py-2 rounded-2xl">
                Bookings
            </div>
            <div className="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-3">
                {randomTransactionCards.map((card, index) => (
                    <TransactionCard
                        key={index}
                        name={card.name}
                        id={card.id}
                        type={card.type}
                        avatar={card.avatar}
                        bookingId={card.bookingId}
                        time={card.time}
                        payment={card.payment}
                        service={card.service}
                        amount={card.amount}
                        notes={card.notes}
                        mail={card.mail}
                        phone={card.phone}
                    />
                ))}
            </div>






        </>
    )
}

export default TransactionDetails
