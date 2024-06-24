import {
    MdCheckCircle,
    MdCancel,
    } from 'react-icons/md';

function ExpenseCard({category, expenseTarget, actualExpense}) {
    const balance = actualExpense - expenseTarget;
    const isOnTrack = actualExpense <= expenseTarget;
    return (
        <div className="expense-card w-full border border-gray-200 rounded-md">
            <div className="bg-gray-100 p-2 items-center justify-between">
                <div>
                    <p>{category}</p>
                    <p className="font-bold text-navy-700">{balance}</p>
                </div>
                <div className="flex items-center space-x-2">
                    <div className="rounded-full text-lg">
                        {isOnTrack ? (
                        <MdCheckCircle className="text-greenPrimary" />
                        ) : (
                        <MdCancel className="text-redPrimary" />
                        )}
                    </div>
                    <span className={`font-bold ${isOnTrack ? 'text-greenPrimary' : 'text-redPrimary'}`}>
                        {isOnTrack ? 'On Track' : 'Warning'}
                    </span>
                    </div>
            </div>
            <hr></hr>
            <div className="flex items-center justify-between">
                <p className="font-bold text-lg text-navy-700">Expense target: </p>
                <p className="text-lg text-gray-500">Rp{expenseTarget}</p>
            </div>
            <div className="flex items-center justify-between">
                <p className="font-bold text-lg text-navy-700">Actual expense: </p>
                <p className="text-lg text-gray-500">Rp{actualExpense}</p>
            </div>
        </div>
    );
}

export default ExpenseCard;